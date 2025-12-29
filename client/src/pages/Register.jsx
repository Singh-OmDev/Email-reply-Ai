import { SignUp, useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const Register = () => {
    const { isSignedIn } = useUser();

    if (isSignedIn) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <SignUp signInUrl="/login" forceRedirectUrl="/dashboard" />
        </div>
    );
};

export default Register;
