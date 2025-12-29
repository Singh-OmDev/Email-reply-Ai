import Navbar from '../components/Navbar';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Agreement to Terms</h2>
                    <p className="mb-4 text-slate-600">
                        By accessing our website at AutoReply AI, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Use License</h2>
                    <p className="mb-4 text-slate-600">
                        Permission is granted to temporarily download one copy of the materials (information or software) on AutoReply AI's website for personal, non-commercial transitory viewing only.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Disclaimer</h2>
                    <p className="mb-4 text-slate-600">
                        The materials on AutoReply AI's website are provided on an 'as is' basis. AutoReply AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Limitations</h2>
                    <p className="mb-4 text-slate-600">
                        In no event shall AutoReply AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AutoReply AI's website.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Governing Law</h2>
                    <p className="mb-4 text-slate-600">
                        These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
