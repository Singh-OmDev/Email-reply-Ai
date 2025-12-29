const tones = [
    'Professional',
    'Friendly',
    'Polite',
    'Formal',
    'Angry',
    'Apology',
    'Follow-up',
];

const ToneSelector = ({ selectedTone, onChange }) => {
    return (
        <div className="w-full">
            <label className="block text-sm font-semibold text-slate-900 mb-3">
                <span className="text-slate-500 font-normal mr-2">2.</span>
                Select Tone
            </label>
            <div className="flex flex-wrap gap-2">
                {tones.map((tone) => {
                    const isSelected = selectedTone === tone;
                    return (
                        <button
                            key={tone}
                            onClick={() => onChange(tone)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${isSelected
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-md transform scale-105'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                        >
                            {tone}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ToneSelector;
