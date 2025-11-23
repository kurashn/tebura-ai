import React from 'react';
import { ExternalLink, Instagram } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
    const { t } = useLanguage();
    return (
        <section className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-[1200px] mx-auto">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text">
                            {t('portfolio.title')}
                        </h2>
                        <p className="text-text/70">
                            {t('portfolio.subtitle')}
                        </p>
                    </div>
                </FadeIn>

                {/* Example: Tebura HP */}
                <FadeIn delay={0.2}>
                    <div className="bg-accent/10 rounded-[2.5rem] p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left: Description */}
                            <div>
                                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                                    {t('portfolio.tebura_category')}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text">
                                    {t('portfolio.tebura_title')}
                                </h3>
                                <p className="text-text/80 mb-6 leading-relaxed">
                                    {t('portfolio.tebura_desc')}
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <div>
                                            <span className="text-text/80">{t('portfolio.tebura_period')}</span>
                                        </div>
                                    </div>
                                    {t('portfolio.tebura_plan') && (
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                            <div>
                                                <span className="text-text/80">{t('portfolio.tebura_plan')}</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <div>
                                            <span className="text-text/80">{t('portfolio.tebura_features')}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://www.instagram.com/tebura_ai_hp/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                                    >
                                        <Instagram className="w-5 h-5" />
                                        {t('portfolio.view_insta')}
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        {t('portfolio.view_site')}
                                    </a>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[4/3] bg-white rounded-2xl shadow-xl border-4 border-white overflow-hidden">
                                    <img
                                        src="/tebura_hero.png"
                                        alt="てぶらホームページのスクリーンショット"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Decorative element */}
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Example 2: Meangurls BKK */}
                <FadeIn delay={0.3}>
                    <div className="bg-accent/10 rounded-[2.5rem] p-8 md:p-12 mt-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="relative order-2 md:order-1">
                                <div className="aspect-[4/3] bg-white rounded-2xl shadow-xl border-4 border-white overflow-hidden">
                                    <img
                                        src="/meangurls_hero.png"
                                        alt="Meangurls BKKのスクリーンショット"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Decorative element */}
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-200 rounded-full blur-2xl -z-10"></div>
                            </div>

                            {/* Right: Description */}
                            <div className="order-1 md:order-2">
                                <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                                    {t('portfolio.meangurls_category')}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text">
                                    {t('portfolio.meangurls_title')}
                                </h3>
                                <p className="text-text/80 mb-6 leading-relaxed">
                                    {t('portfolio.meangurls_desc')}
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                                        <div>
                                            <span className="text-text/80">{t('portfolio.meangurls_industry')}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                                        <div>
                                            <span className="text-text/80">{t('portfolio.meangurls_period')}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                                        <div>
                                            <span className="text-text/80">{t('portfolio.meangurls_features')}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://www.instagram.com/meangurlsbkk/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                                    >
                                        <Instagram className="w-5 h-5" />
                                        {t('portfolio.view_insta')}
                                    </a>
                                    <a
                                        href="https://meangurlsbkk.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-white border-2 border-purple-500 text-purple-500 px-6 py-3 rounded-xl font-bold hover:bg-purple-500 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        {t('portfolio.view_site')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* CTA */}
                <FadeIn delay={0.4}>
                    <div className="text-center mt-12">
                        <p className="text-text/70 mb-6">
                            {t('portfolio.cta_text')}
                        </p>
                        <a
                            href="https://lin.ee/9ZFmmDS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-cta text-white px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
                        >
                            {t('portfolio.cta_button')}
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Portfolio;
