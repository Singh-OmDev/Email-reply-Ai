import { createContext, useState, useEffect, useContext } from 'react';
import { useUser, useAuth as useClerkAuth, useClerk } from '@clerk/clerk-react';
import api from '../api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { user: clerkUser, isLoaded, isSignedIn } = useUser();
    const { getToken } = useClerkAuth();
    const { signOut } = useClerk();

    // We maintain a "merged" user object that has Clerk details + our DB credits
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sync Clerk user with our MongoDB backend to get credits
    useEffect(() => {
        const syncUser = async () => {
            if (!isLoaded) return;

            if (isSignedIn && clerkUser) {
                try {
                    const token = await getToken();
                    // We'll create this endpoint next
                    const response = await api.post('/auth/sync', {}, {
                        headers: { Authorization: `Bearer ${token}` }
                    });

                    setUser({
                        ...clerkUser,
                        credits: response.data.credits,
                        mongoId: response.data._id
                    });
                } catch (error) {
                    console.error("Failed to sync user:", error);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        };

        syncUser();
    }, [isLoaded, isSignedIn, clerkUser, getToken]);

    // Update the axios instance to automatically inject token if available
    // Note: This is a bit of a hacky side-effect, but ensures subsequent calls have the token
    useEffect(() => {
        const interceptor = api.interceptors.request.use(async (config) => {
            if (isSignedIn) {
                const token = await getToken();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }
            return config;
        });

        return () => {
            api.interceptors.request.eject(interceptor);
        };
    }, [isSignedIn, getToken]);


    const updateCredits = (newCredits) => {
        setUser((prev) => prev ? ({ ...prev, credits: newCredits }) : null);
    };

    // expose specific fields to match old interface where possible
    const value = {
        user,
        loading: !isLoaded || loading,
        logout: () => signOut(),
        updateCredits,
        // Legacy stubs (Clerk handles UI, but keeps compatibility)
        login: () => { },
        register: () => { }
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
