import React from 'react';
import { Scissors, Coffee, Music, Camera } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const Target = () => {
    const { t } = useLanguage();
    const targets = [
        {
            icon: <Scissors className="w-6 h-6 text-white" />,
            title: t('target.item_1_title'),
            description: t('target.item_1_desc'),
            color: "bg-pink-400"
        },
        {
            icon: <Coffee className="w-6 h-6 text-white" />,
            title: t('target.item_2_title'),
            description: t('target.item_2_desc'),
            color: "bg-amber-600"
        },
        {
            icon: <Music className="w-6 h-6 text-white" />,
            title: t('target.item_3_title'),
            description: t('target.item_3_desc'),
            color: "bg-indigo-500"
        },
        {
            icon: <Camera className="w-6 h-6 text-white" />,
            title: t('target.item_4_title'),
            description: t('target.item_4_desc'),
            color: "bg-purple-500"
        }
    ];

    return (
        <section className="py-20 px-6 md:px-12 bg-white relative">
            {/* Character: Happy */}
            <div className="absolute top-0 right-1/4 w-24 md:w-32 -translate-y-1/2 hidden md:block">
                <img
                    src="/teburakun.png"
                    alt="喜ぶてぶら君"
                    className="w-full h-full object-contain scale-110 drop-shadow-lg"
                />
            </div>

            <div className="max-w-[1200px] mx-auto">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text">
                            {t('target.title')}
                        </h2>
                        <p className="text-text/70">
                            {t('target.subtitle_1')}<br className="md:hidden" />{t('target.subtitle_2')}<br className="md:hidden" />{t('target.subtitle_3')}
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-6">
                    {targets.map((target, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="flex items-start gap-4 p-6 rounded-3xl border-2 border-accent/30 hover:border-primary/50 transition-colors h-full">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${target.color}`}>
                                    {target.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-text">
                                        {target.title}
                                    </h3>
                                    <p className="text-text/70 text-sm leading-relaxed">
                                        {target.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default Target;
