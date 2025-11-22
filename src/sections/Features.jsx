import React from 'react';
import { Wallet, Smartphone, PenTool } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
    const { t } = useLanguage();
    const features = [
        {
            icon: <Wallet className="w-10 h-10 text-white" />,
            title: t('features.item_1_title'),
            description: t('features.item_1_desc')
        },
        {
            icon: <Smartphone className="w-10 h-10 text-white" />,
            title: t('features.item_2_title'),
            description: t('features.item_2_desc')
        },
        {
            icon: <PenTool className="w-10 h-10 text-white" />,
            title: t('features.item_3_title'),
            description: t('features.item_3_desc')
        }
    ];

    return (
        <section className="py-20 px-6 md:px-12 bg-accent/10 relative">
            <div className="max-w-[1200px] mx-auto">
                <FadeIn>
                    <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center text-text">
                        {t('features.title_prefix')}<br className="md:hidden" />
                        {t('features.title_middle')}<br />
                        <span className="text-primary text-4xl md:text-5xl mt-2 inline-block">{t('features.title_highlight')}</span>
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow h-full">
                                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto rotate-3 hover:rotate-6 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-center mb-4 text-text">
                                    {feature.title}
                                </h3>
                                <p className="text-text/70 leading-relaxed text-sm md:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
