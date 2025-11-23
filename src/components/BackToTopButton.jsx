import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleHomeClick = () => {
        if (pathname === '/') {
            scrollToTop();
        } else {
            navigate('/');
            window.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-40">
            {isVisible && (
                <button
                    onClick={handleHomeClick}
                    className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all hover:scale-110 focus:outline-none"
                    aria-label="トップページに戻る"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
