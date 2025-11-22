import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Background Circle */}
            <circle cx="50" cy="50" r="50" fill="#8CBF68" fillOpacity="0.2" />

            {/* Leaf/Sprout Shape */}
            <path
                d="M50 80C50 80 30 70 30 50C30 30 50 20 50 20C50 20 70 30 70 50C70 70 50 80 50 80Z"
                fill="#8CBF68"
            />
            <path
                d="M50 80V40"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M50 60L65 45"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M50 50L35 35"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default Logo;
