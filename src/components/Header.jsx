import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    return (
        <header className="w-full py-4 px-6 md:px-12 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10">
                        <img src="/teburakun.png" alt="てぶらHPロゴ" className="w-full h-full object-contain drop-shadow-md" />
                    </div>
                    <span className="font-bold text-xl text-text tracking-tight whitespace-nowrap">
                        Teburaホームページ
                    </span>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="flex bg-white/50 rounded-full p-1 border border-primary/20">
                        <button
                            onClick={() => setLanguage('ja')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'ja' ? 'bg-primary text-white shadow-sm' : 'text-text/60 hover:text-primary'}`}
                        >
                            JP
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-primary text-white shadow-sm' : 'text-text/60 hover:text-primary'}`}
                        >
                            EN
                        </button>
                    </div>

                    {/* CTA */}
                    <nav className="hidden md:block">
                        <a
                            href="https://lin.ee/9ZFmmDS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary text-lg md:text-xl lg:text-2xl font-bold py-5 md:py-4 px-10 md:px-12 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all min-h-[56px] flex items-center justify-center w-full max-w-md"
                        >{t('header.contact')}
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
