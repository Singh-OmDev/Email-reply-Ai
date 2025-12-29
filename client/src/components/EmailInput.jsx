const EmailInput = ({ value, onChange }) => {
    return (
        <div className="w-full">
            <textarea
                rows={6}
                className="input-clean resize-none font-medium"
                placeholder="Dear [Name], I am writing to inquire about..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default EmailInput;
