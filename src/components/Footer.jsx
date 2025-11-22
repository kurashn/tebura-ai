import React from 'react';

import FadeIn from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-text text-background py-12 px-4 md:px-6 lg:px-12">
            <div className="max-w-[1200px] mx-auto text-center">
                <FadeIn>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white leading-tight whitespace-pre-line px-2">
                        {t('footer.title_1')}<br />
                        {t('footer.title_2')}
                    </h2>
                    <p className="text-white/80 text-base md:text-lg mb-16 md:mb-24 max-w-2xl mx-auto px-4">
                        {t('footer.text_1')}<br />
                        {t('footer.text_2')}
                    </p>

                    <div className="bg-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl mb-12 backdrop-blur-sm relative">
                        {/* Character pointing at button */}
                        <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 z-10">
                            <img
                                src="/teburakun.png"
                                alt="てぶら君"
                                className="w-full h-full object-contain drop-shadow-2xl animate-bounce"
                            />
                        </div>

                        <div className="flex flex-col items-center gap-3 md:gap-4">
                            <div className="bg-white text-primary px-4 md:px-6 py-1.5 md:py-2 rounded-full text-sm md:text-base font-bold shadow-lg animate-bounce">
                                {t('footer.cta_bubble')}
                            </div>
                            <a
                                href="#contact"
                                className="bg-white text-primary text-lg md:text-xl lg:text-2xl font-bold py-5 md:py-4 px-10 md:px-12 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all min-h-[56px] flex items-center justify-center w-full max-w-md"
                            >
                                {t('footer.cta_button')}
                            </a>
                        </div>
                    </div>
                </FadeIn>

                <div className="mt-16 md:mt-20 pt-6 md:pt-8 border-t border-white/20 text-center text-white/60 text-xs md:text-sm px-4">
                    &copy; {new Date().getFullYear()} {t('footer.copyright')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
