import React from 'react';

import FadeIn from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-text text-background py-12 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto text-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight whitespace-pre-line">
                        {t('footer.title_1')}<br />
                        {t('footer.title_2')}
                    </h2>
                    <p className="text-white/80 text-lg mb-24 max-w-2xl mx-auto">
                        {t('footer.text_1')}<br />
                        {t('footer.text_2')}
                    </p>

                    <div className="bg-white/10 p-8 rounded-3xl mb-12 backdrop-blur-sm relative">
                        {/* Character pointing at button */}
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 w-24 h-24 md:w-32 md:h-32 z-10">
                            <img
                                src="/teburakun.png"
                                alt="てぶら君"
                                className="w-full h-full object-contain drop-shadow-2xl animate-bounce"
                            />
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <div className="bg-white text-primary px-6 py-2 rounded-full font-bold shadow-lg animate-bounce">
                                {t('footer.cta_bubble')}
                            </div>
                            <a
                                href="#contact"
                                className="bg-white text-primary text-xl md:text-2xl font-bold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                            >
                                {t('footer.cta_button')}
                            </a>
                        </div>
                    </div>
                </FadeIn>

                <div className="mt-20 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
                    &copy; {new Date().getFullYear()} {t('footer.copyright')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
