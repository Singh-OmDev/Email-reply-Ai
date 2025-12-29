import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ReplyCard = ({ data }) => {
    const [copied, setCopied] = useState(false);

    // Added check for data to prevent runtime errors if data is null/undefined
    if (!data) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(data);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full soft-card overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-sm font-bold text-slate-700 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Generated Reply
                </h3>
                <button
                    onClick={handleCopy}
                    className="inline-flex items-center px-3 py-1.5 border border-slate-200 shadow-sm text-xs font-medium rounded-lg text-slate-600 bg-white hover:bg-slate-50 hover:text-slate-900 focus:outline-none transition-all duration-200"
                >
                    {copied ? (
                        <>
                            <Check className="h-3.5 w-3.5 mr-1.5 text-green-600" />
                            Copied
                        </>
                    ) : (
                        <>
                            <Copy className="h-3.5 w-3.5 mr-1.5" />
                            Copy
                        </>
                    )}
                </button>
            </div>
            <div className="p-6 bg-white">
                <pre className="whitespace-pre-wrap font-sans text-sm text-slate-700 leading-relaxed max-w-none">{data}</pre>
            </div>
        </div>
    );
};

export default ReplyCard;
