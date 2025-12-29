import { useRef, useEffect } from 'react';

const HistorySidebar = ({ history, onSelect }) => {
    if (!history || history.length === 0) {
        return (
            <div className="p-4 text-center text-slate-500 text-sm">
                No history yet.
            </div>
        );
    }

    return (
        <div className="h-full bg-slate-50 border-l border-slate-200 flex flex-col">
            <div className="px-6 py-5 border-b border-slate-200 bg-white sticky top-0 z-10 flex justify-between items-center shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                    History
                </h3>
                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md">
                    {history?.length || 0}
                </span>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
                {(!history || history.length === 0) ? (
                    <div className="text-center py-10 px-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-slate-900 font-medium text-sm">No replies yet</p>
                        <p className="text-slate-500 text-xs mt-1">Generate your first reply to see it here.</p>
                    </div>
                ) : (
                    history.map((item) => (
                        <div
                            key={item._id}
                            onClick={() => onSelect(item)}
                            className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-slate-300 cursor-pointer transition-all duration-200 group relative overflow-hidden"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200 group-hover:bg-indigo-500 transition-colors"></div>
                            <div className="pl-2">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                        {item.tone}
                                    </span>
                                    <span className="text-[10px] text-slate-400">
                                        {new Date(item.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                    {item.originalEmail}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default HistorySidebar;
