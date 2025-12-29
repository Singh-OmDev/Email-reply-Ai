import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Introduction</h2>
                    <p className="mb-4 text-slate-600">
                        Welcome to AutoReply AI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. The Data We Collect</h2>
                    <p className="mb-4 text-slate-600">
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes email address.</li>
                        <li><strong>Usage Data</strong> includes information about how you use our website and services (e.g., generated email content).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. How We Use Your Data</h2>
                    <p className="mb-4 text-slate-600">
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                        <li>To provide the AI generation service you requested.</li>
                        <li>To manage your account and subscription.</li>
                        <li>To improve our website and services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Data Security</h2>
                    <p className="mb-4 text-slate-600">
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Contact Us</h2>
                    <p className="mb-4 text-slate-600">
                        If you have any questions about this privacy policy or our privacy practices, please contact us at support@autoreply.ai.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
