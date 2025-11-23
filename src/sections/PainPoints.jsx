import React from 'react';
import { Frown, AlertCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const PainPoints = () => {
    const { t } = useLanguage();
    const points = [
        {
            icon: "💸",
            titleKey: "painpoints.card_1_title",
            textKey: "painpoints.card_1_text"
        },
        {
            icon: "💻",
            titleKey: "painpoints.card_2_title",
            textKey: "painpoints.card_2_text"
        },
        {
            icon: "⏰",
            titleKey: "painpoints.card_3_title",
            textKey: "painpoints.card_3_text"
        }
    ];

    return (
        <section className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
            {/* Character: Thinking */}
            <div className="absolute top-10 right-10 w-24 md:w-32 opacity-80 hidden md:block animate-pulse">
                <img
                    src="/teburakun.png"
                    alt="悩むてぶら君"
                    className="w-full h-full object-contain -scale-x-100 rotate-12"
                />
            </div>

            <div className="max-w-[1200px] mx-auto text-center relative z-10">
                <FadeIn>
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 text-text flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-center">
                        <Frown className="w-8 h-8 text-primary hidden md:block" />
                        <span>{t('painpoints.title_1')}<br className="md:hidden" />{t('painpoints.title_2')}</span>
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {points.map((point, index) => (
                        <FadeIn key={index} delay={index * 0.1} className="h-full">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-accent/20 h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full -mr-4 -mt-4"></div>
                                <h3 className="text-lg font-bold mb-4 text-text flex items-center gap-2">
                                    <span className="text-2xl">{point.icon}</span> {t(point.titleKey)}
                                </h3>
                                <p className="text-text/70 leading-relaxed whitespace-pre-line">
                                    {t(point.textKey)}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.4}>
                    <div className="text-center mt-16">
                        <p className="text-xl md:text-2xl font-bold text-text">
                            {t('painpoints.solution_title')} <span className="text-primary text-3xl md:text-4xl mx-2 whitespace-nowrap">{t('painpoints.solution_highlight')}</span> {t('painpoints.solution_text')}
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default PainPoints;
