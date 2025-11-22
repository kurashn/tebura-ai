import React from 'react';
import { UserPlus, Send, CheckSquare } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const Process = () => {
    const { t } = useLanguage();
    const steps = [
        {
            icon: <UserPlus className="w-8 h-8 text-primary" />,
            title: t('process.step_1_title'),
            description: t('process.step_1_desc')
        },
        {
            icon: <Send className="w-8 h-8 text-primary" />,
            title: t('process.step_2_title'),
            description: t('process.step_2_desc')
        },
        {
            icon: <CheckSquare className="w-8 h-8 text-primary" />,
            title: t('process.step_3_title'),
            description: t('process.step_3_desc')
        }
    ];

    return (
        <section className="py-20 px-6 md:px-12 bg-accent/10">
            <div className="max-w-[1200px] mx-auto">
                <FadeIn>
                    <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center text-text">
                        {t('process.title_1')}<br className="md:hidden" />{t('process.title_2')}
                    </h2>
                </FadeIn>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-primary/20 -z-10"></div>

                    <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <FadeIn key={index} delay={index * 0.2}>
                                <div className="relative flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6 border-4 border-accent">
                                        {step.icon}
                                        <div className="absolute top-0 left-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg mb-3 text-text">
                                        {step.title}
                                    </h3>
                                    <p className="text-text/70 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
