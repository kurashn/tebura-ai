import React from 'react';
import { Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
    const { t } = useLanguage();
    return (
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-white">
            <div className="max-w-[1200px] mx-auto">
                <FadeIn>
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-text px-2">
                            {t('pricing.title_1')}<br className="md:hidden" />{t('pricing.title_2')}
                        </h2>
                        <p className="text-sm md:text-base text-text/70 px-4">
                            {t('pricing.subtitle_1')}<br className="md:hidden" />{t('pricing.subtitle_2')}
                        </p>
                    </div>
                </FadeIn>

                {/* Production Fee Banner */}
                <FadeIn delay={0.2}>
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 md:p-6 mb-8 md:mb-12 max-w-2xl mx-auto text-center">
                        <h3 className="text-base md:text-lg font-bold text-text mb-2">{t('pricing.production_fee_label')}</h3>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                            <span className="text-lg md:text-xl text-text/40 line-through decoration-2 decoration-red-500/50">
                                {t('pricing.production_fee_original')}
                            </span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl md:text-4xl font-bold text-primary">{t('pricing.production_fee_price')}</span>
                                <span className="text-xs md:text-sm text-text/60">{t('pricing.production_fee_unit')}</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Monthly Plans */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <FadeIn delay={0.3} className="h-full">
                        <div className="bg-white border-2 border-gray-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 relative shadow-lg h-full flex flex-col">
                            <h3 className="text-lg md:text-xl font-bold text-center mb-3 md:mb-4 text-text">{t('pricing.plan_free_title')}</h3>
                            <div className="text-center mb-6 md:mb-8">
                                <span className="text-3xl md:text-4xl font-bold text-text">{t('pricing.plan_free_price')}</span>
                                <span className="text-xs md:text-sm text-text/60">{t('pricing.plan_free_unit')}</span>
                            </div>

                            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                                <li className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 text-text flex-shrink-0" />
                                    <span>{t('pricing.item_domain_free')}</span>
                                </li>
                                <li className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-text/60">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 text-text/30 flex-shrink-0" />
                                    <span>{t('pricing.item_update_free')}</span>
                                </li>
                            </ul>

                            <a href="#contact" className="block w-full bg-gray-100 text-text text-center py-4 md:py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors min-h-[48px] flex items-center justify-center">
                                {t('pricing.cta_button')}
                            </a>
                        </div>
                    </FadeIn>

                    {/* Support Plan */}
                    <FadeIn delay={0.4} className="h-full">
                        <div className="bg-white border-2 border-primary rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 relative shadow-xl transform hover:-translate-y-1 transition-transform h-full flex flex-col">
                            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 md:px-6 py-1 rounded-full text-xs md:text-sm font-bold">
                                {t('pricing.plan_support_badge')}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-center mb-3 md:mb-4 text-text mt-2 md:mt-0">{t('pricing.plan_support_title')}</h3>
                            <div className="text-center mb-6 md:mb-8">
                                <span className="text-3xl md:text-4xl font-bold text-primary">{t('pricing.plan_support_price')}</span>
                                <span className="text-xs md:text-sm text-text/60">{t('pricing.plan_support_unit')}</span>
                            </div>

                            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                                <li className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-bold text-primary">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                                    <span>{t('pricing.item_domain_custom')}</span>
                                </li>
                                <li className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                                    <span>{t('pricing.item_update_support')}</span>
                                </li>
                                <li className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-text/60">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 text-text/30 flex-shrink-0" />
                                    <span>{t('pricing.item_support_desc')}</span>
                                </li>
                            </ul>

                            <a href="#contact" className="block w-full bg-primary text-white text-center py-4 md:py-3 rounded-xl font-bold hover:opacity-90 transition-opacity min-h-[48px] flex items-center justify-center">
                                {t('pricing.cta_button')}
                            </a>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={0.6}>
                    <p className="text-center text-xs text-text/50 mt-8">
                        {t('pricing.note')}
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};

export default Pricing;
