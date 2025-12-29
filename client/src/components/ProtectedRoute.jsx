import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUser } from '@clerk/clerk-react';

const ProtectedRoute = () => {
    const { user, loading } = useAuth();
    const { isSignedIn, isLoaded } = useUser();

    if (loading || !isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!isSignedIn) {
        return <Navigate to="/login" replace />;
    }

    // Signed in but backend sync failed or is slow
    if (!user) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
                <p className="text-slate-600">Setting up your profile...</p>
            </div>
        );
    }

    return <Outlet />;
};

export default ProtectedRoute;
