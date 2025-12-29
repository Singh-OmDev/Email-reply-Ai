import { ArrowRight, Zap, Check, Smile, Frown, ThumbsUp, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-50 selection:text-indigo-900 font-sans transition-colors duration-300">
            <Navbar />

            {/* HERO SECTION */}
            <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 -z-10 h-full w-full bg-white [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="text-left space-y-8">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5 }}
                            variants={fadeInUp}
                        >
                            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 shadow-sm mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                                Powered by Llama 3 AI
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                                Write Better <br />
                                <span className="text-indigo-600">Email Replies</span> <br />
                                in Seconds ✨
                            </h1>

                            <p className="mt-6 text-xl text-slate-600 max-w-lg leading-relaxed">
                                Stop staring at a blank screen. Paste any email, choose your tone, and let AI generate the perfect professional response instantly.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link
                                    to="/register"
                                    className="btn-primary px-8 py-4 text-lg rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all flex items-center"
                                >
                                    Get Started Free
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <a
                                    href="#how-it-works"
                                    className="btn-outline px-8 py-4 text-lg rounded-xl hover:bg-slate-50 transition-all"
                                >
                                    View Example
                                </a>
                            </div>

                            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
                                <div className="flex items-center">
                                    <Check className="w-4 h-4 text-indigo-500 mr-2" />
                                    No credit card required
                                </div>
                                <div className="flex items-center">
                                    <Check className="w-4 h-4 text-indigo-500 mr-2" />
                                    20 free credits/month
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Embedded Auth Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                        <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Mockup Header */}
                            <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="ml-4 h-2 w-32 bg-slate-200 rounded-full"></div>
                            </div>

                            <div className="p-2">
                                <div className="p-8">
                                    <div className="text-center mb-8">
                                        <h3 className="text-xl font-bold text-slate-900">Try it now</h3>
                                        <p className="text-sm text-slate-500">Create your free account</p>
                                    </div>
                                    <form className="space-y-4">
                                        <div>
                                            <label className="sr-only">Email</label>
                                            <input type="email" placeholder="name@company.com" className="input-clean" disabled />
                                        </div>
                                        <div>
                                            <label className="sr-only">Password</label>
                                            <input type="password" placeholder="Create a password" className="input-clean" disabled />
                                        </div>
                                        <Link to="/register" className="btn-primary w-full justify-center flex py-3">
                                            Sign Up Free
                                        </Link>
                                        <p className="text-xs text-center text-slate-400 mt-4">
                                            By clicking Sign Up, you agree to our Terms.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* HOW IT WORKS SECTION */}
            <div id="how-it-works" className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm">Workflow</span>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                            Three simple steps to better emails
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Paste Email",
                                desc: "Copy the email you received and paste it into the dashboard.",
                                icon: <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                            },
                            {
                                step: "02",
                                title: "Choose Tone",
                                desc: "Select from 7+ tones like Professional, Friendly, or Apologetic.",
                                icon: <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">2</div>
                            },
                            {
                                step: "03",
                                title: "Get AI Reply",
                                desc: "Review the generated draft, copy it, and hit send.",
                                icon: <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold">3</div>
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* TONE SHOWCASE SECTION */}
            <div className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm">Versatility</span>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
                        Always strike the right tone
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {[
                            { label: 'Professional', icon: Briefcase, color: 'bg-slate-100 text-slate-700 border-slate-200' },
                            { label: 'Friendly', icon: Smile, color: 'bg-green-100 text-green-700 border-green-200' },
                            { label: 'Polite', icon: ThumbsUp, color: 'bg-blue-100 text-blue-700 border-blue-200' },
                            { label: 'Apologetic', icon: Frown, color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
                            { label: 'Formal', icon: Check, color: 'bg-gray-800 text-white border-gray-900' },
                            { label: 'Angry', icon: Zap, color: 'bg-red-100 text-red-700 border-red-200' },
                        ].map((tone) => (
                            <div key={tone.label} className={`flex items-center px-6 py-3 rounded-full border-2 font-bold text-lg ${tone.color} shadow-sm transform hover:scale-105 transition-transform cursor-default`}>
                                <tone.icon className="w-5 h-5 mr-2" />
                                {tone.label}
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-slate-500">
                        + Custom tones to match your personal brand.
                    </p>
                </div>
            </div>

            {/* PRICING SECTION */}
            <div id="pricing" className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                            Simple, transparent pricing
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Start for free and upgrade when you need more power.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Free Tier */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative">
                            <h3 className="text-lg font-bold text-slate-900">Free Starter</h3>
                            <div className="mt-4 flex items-baseline text-slate-900">
                                <span className="text-4xl font-extrabold tracking-tight">$0</span>
                                <span className="ml-1 text-xl font-semibold text-slate-500">/mo</span>
                            </div>
                            <p className="mt-4 text-slate-500 text-sm">Perfect for trying out AutoReply AI.</p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                                    <span className="ml-3 text-slate-600 text-sm">20 free credits/month</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                                    <span className="ml-3 text-slate-600 text-sm">Basic tones included</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                                    <span className="ml-3 text-slate-600 text-sm">Standard support</span>
                                </li>
                            </ul>
                            <Link to="/register" className="mt-8 block w-full py-3 px-4 rounded-lg border-2 border-slate-900 text-slate-900 font-bold text-center hover:bg-slate-50 transition-colors">
                                Get Started
                            </Link>
                        </div>

                        {/* Pro Tier */}
                        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-900 shadow-xl relative transform scale-105 z-10">
                            <div className="absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full shadow-lg">
                                POPULAR
                            </div>
                            <h3 className="text-lg font-bold text-white">Pro Unlimited</h3>
                            <div className="mt-4 flex items-baseline text-white">
                                <span className="text-4xl font-extrabold tracking-tight">$12</span>
                                <span className="ml-1 text-xl font-semibold text-slate-400">/mo</span>
                            </div>
                            <p className="mt-4 text-slate-400 text-sm">For professionals who email daily.</p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 w-5 h-5 text-indigo-400" />
                                    <span className="ml-3 text-slate-300 text-sm">Unlimited credits</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 w-5 h-5 text-indigo-400" />
                                    <span className="ml-3 text-slate-300 text-sm">All premium tones</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 w-5 h-5 text-indigo-400" />
                                    <span className="ml-3 text-slate-300 text-sm">Faster generation speed</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 w-5 h-5 text-indigo-400" />
                                    <span className="ml-3 text-slate-300 text-sm">Priority support</span>
                                </li>
                            </ul>
                            <Link to="/register" className="mt-8 block w-full py-3 px-4 rounded-lg bg-indigo-600 text-white font-bold text-center hover:bg-indigo-500 transition-colors shadow-lg">
                                Start 7-Day Free Trial
                            </Link>
                        </div>

                        {/* Enterprise Tier */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative">
                            <h3 className="text-lg font-bold text-slate-900">Team</h3>
                            <div className="mt-4 flex items-baseline text-slate-900">
                                <span className="text-4xl font-extrabold tracking-tight">$29</span>
                                <span className="ml-1 text-xl font-semibold text-slate-500">/mo</span>
                            </div>
                            <p className="mt-4 text-slate-500 text-sm">For teams and agencies.</p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                                    <span className="ml-3 text-slate-600 text-sm">5 Team members</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                                    <span className="ml-3 text-slate-600 text-sm">Shared custom tones</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                                    <span className="ml-3 text-slate-600 text-sm">Admin dashboard</span>
                                </li>
                            </ul>
                            <Link to="/register" className="mt-8 block w-full py-3 px-4 rounded-lg border-2 border-slate-200 text-slate-600 font-bold text-center hover:border-slate-300 hover:text-slate-900 transition-colors">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>



            </div>

            {/* FOOTER */}
            <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div className="col-span-2">
                            <div className="flex items-center mb-4">
                                <span className="text-xl font-bold text-slate-900">AutoReply AI</span>
                            </div>
                            <p className="text-slate-500 max-w-xs">
                                The AI-powered email assistant that helps you write better, faster, and more professional emails.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li><a href="#how-it-works" className="hover:text-indigo-600">Features</a></li>
                                <li><a href="#pricing" className="hover:text-indigo-600">Pricing</a></li>
                                <li><a href="#" className="hover:text-indigo-600">Examples</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li><Link to="/privacy" className="hover:text-indigo-600">Privacy</Link></li>
                                <li><Link to="/terms" className="hover:text-indigo-600">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
                        &copy; {new Date().getFullYear()} AutoReply AI. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
