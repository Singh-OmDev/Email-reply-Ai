import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import EmailInput from '../components/EmailInput';
import ToneSelector from '../components/ToneSelector';
import ReplyCard from '../components/ReplyCard';
import HistorySidebar from '../components/HistorySidebar';
import api from '../api';
import { useAuth } from '../context/AuthContext';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
    const [emailText, setEmailText] = useState('');
    const [tone, setTone] = useState('Professional');
    const [generatedReply, setGeneratedReply] = useState('');
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);
    const { updateCredits } = useAuth();

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const { data } = await api.get('/history');
            setHistory(data);
        } catch (error) {
            console.error('Failed to fetch history', error);
        }
    };

    const handleGenerate = async () => {
        if (!emailText) return;
        setLoading(true);
        try {
            const { data } = await api.post('/generate-reply', {
                originalEmail: emailText,
                tone,
            });
            setGeneratedReply(data.reply);
            updateCredits(data.creditsLeft);
            fetchHistory(); // Refresh history
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || 'Failed to generate reply');
        } finally {
            setLoading(false);
        }
    };

    const loadHistoryItem = (item) => {
        setEmailText(item.originalEmail);
        setTone(item.tone);
        setGeneratedReply(item.generatedReply);
    };

    const loadExample = () => {
        const example = "Subject: Invitation to Speak at TechConf 2024\n\nDear Sarah,\n\nI hope this email finds you well.\n\nI am writing to formally invite you to be a keynote speaker at our upcoming TechConf 2024, scheduled for October 15th in San Francisco. We have followed your work on AI ethics closely and believe your insights would be invaluable to our audience.\n\nPlease let us know if you would be interested, and we can discuss the details further.\n\nBest regards,\nAlex Johnson\nEvent Director";
        setEmailText(example);
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
                    <p className="text-slate-500 mt-1">Generate perfect replies in seconds.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="flex-1 space-y-8">
                        <div className="soft-card p-8">
                            <div className="flex flex-col gap-8">
                                {/* Step 1 */}
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="block text-sm font-semibold text-slate-900">
                                            <span className="text-slate-500 font-normal mr-2">1.</span>
                                            Paste Email
                                        </label>
                                        <button
                                            onClick={loadExample}
                                            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 py-1 px-3 rounded-md transition-colors"
                                        >
                                            View Example
                                        </button>
                                    </div>
                                    <EmailInput value={emailText} onChange={setEmailText} />
                                </div>

                                {/* Step 2 */}
                                <div>
                                    <ToneSelector selectedTone={tone} onChange={setTone} />
                                </div>

                                {/* Action */}
                                <div className="pt-4">
                                    <button
                                        onClick={handleGenerate}
                                        disabled={loading || !emailText}
                                        className="btn-primary w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="animate-spin h-6 w-6 mr-3" />
                                                Generating Magic...
                                            </>
                                        ) : (
                                            <>
                                                <span className="mr-2">✨</span> Generate Reply
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {generatedReply && (
                            <div className="animate-fade-in-up">
                                <ReplyCard data={generatedReply} />
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-96">
                        <div className="soft-card h-[calc(100vh-180px)] sticky top-24 overflow-hidden flex flex-col">
                            <HistorySidebar history={history} onSelect={loadHistoryItem} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
