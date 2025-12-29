import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserButton } from "@clerk/clerk-react";
import Logo from './Logo';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="fixed w-full z-50 top-0 start-0 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center group">
                            <Logo className="h-8 w-8 transition-transform group-hover:scale-110" />
                            <span className="ml-3 text-xl font-bold text-slate-900 tracking-tight">
                                AutoReply AI
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-8">
                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                                Features
                            </a>
                            <a href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                                Pricing
                            </a>
                        </div>

                        <div className="flex items-center space-x-4">
                            {user ? (
                                <>
                                    <div className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                                        Credits: <span className="text-indigo-600 font-bold ml-1">{user.credits}</span>
                                    </div>
                                    <UserButton afterSignOutUrl="/" />
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                                    >
                                        Get Started Free
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
