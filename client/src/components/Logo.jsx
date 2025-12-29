import React from 'react';

const Logo = ({ className = "h-8 w-8" }) => {
    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="20" cy="20" r="14" className="fill-slate-900" />
            <path
                d="M20 12V28M15 17L20 12L25 17"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Logo;
