import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section className="relative pt-20 pb-32 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-background to-accent/10">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">

                {/* Text Content */}
                <div className="z-10">
                    <FadeIn delay={0.1}>
                        <div className="inline-block bg-white border border-primary/20 text-primary px-6 py-2 rounded-full text-sm md:text-base font-bold mb-8 shadow-sm">
                            {t('hero.badge')}
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-tight mb-8 text-text">
                            {t('hero.headline_1')}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600 whitespace-nowrap">{t('hero.headline_2')}</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-text/80 text-lg md:text-xl mb-10 leading-loose max-w-lg">
                            {t('hero.subtext_1')}<br className="hidden md:block" />
                            {t('hero.subtext_2')}<br />
                            {t('hero.subtext_3')}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-col gap-5 mb-10">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02, translateY: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full md:w-auto bg-gradient-to-r from-cta to-emerald-500 text-white text-center py-4 md:py-5 px-6 md:px-10 rounded-2xl font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 md:gap-3 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span>{t('hero.cta_button')}</span>
                                <span className="bg-white text-cta px-2 py-0.5 rounded text-xs md:text-sm font-bold shadow-sm">{t('hero.cta_free')}</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <p className="text-sm text-center text-text/60 font-medium">
                                {t('hero.cta_note')}
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base text-text/80 font-bold">
                            <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-primary/10">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>{t('hero.feature_pc')}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-primary/10">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>{t('hero.feature_delivery')}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-primary/10">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span>{t('hero.feature_revision')}</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Visual Content */}
                {/* Visual Content */}
                <div className="relative z-0 flex justify-center items-center">
                    {/* Decorative background blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/30 rounded-full blur-3xl -z-10"></div>

                    <FadeIn delay={0.6} direction="left">
                        <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                            {/* CSS-styled Phone Mock */}
                            <div className="relative w-64 md:w-72 aspect-[9/19] bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[10px] border-white overflow-hidden flex flex-col ring-1 ring-gray-900/5">
                                {/* Status Bar */}
                                <div className="h-6 bg-gray-100 w-full flex items-center justify-end px-4 text-[10px] text-gray-500">
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Instagram Header */}
                                <div className="h-12 border-b border-gray-100 flex items-center justify-between px-4 bg-white">
                                    <div className="font-bold text-text text-sm">tebura_ai_hp</div>
                                    <div className="flex gap-3">
                                        <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                                        <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <div className="p-4 pb-2 bg-white">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-full flex-shrink-0 border-2 border-primary/30 p-0.5">
                                            <img src="/teburakun.png" alt="Profile" className="w-full h-full object-contain bg-accent/20 rounded-full" />
                                        </div>
                                        <div className="flex-1 flex justify-around">
                                            <div className="flex flex-col items-center">
                                                <div className="font-bold text-sm text-text">42</div>
                                                <div className="text-[10px] text-gray-400">Posts</div>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="font-bold text-sm text-text">1.2k</div>
                                                <div className="text-[10px] text-gray-400">Followers</div>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="font-bold text-sm text-text">89</div>
                                                <div className="text-[10px] text-gray-400">Following</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-1 mb-4 px-1 text-xs text-text">
                                        <div className="font-bold">てぶらAIホームページ | インスタHP作成</div>
                                        <div className="text-text/80">たった1日でインスタがHPに早変わり✨</div>
                                        <div className="text-text/80">PC操作不要！スマホだけで完結📱</div>
                                        <div className="text-text/80">月額980円〜で自分だけの公式サイトを👇</div>
                                        <div className="mt-1 text-primary font-bold">tebura-ai.com</div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 mb-4">
                                        <div className="flex-1 h-7 bg-primary text-white text-xs font-bold rounded flex items-center justify-center">Follow</div>
                                        <div className="flex-1 h-7 bg-gray-100 text-text text-xs font-bold rounded flex items-center justify-center">Message</div>
                                    </div>

                                    {/* Story Highlights */}
                                    <div className="flex gap-3 mb-4 overflow-x-hidden">
                                        {[
                                            { color: 'bg-primary/20', label: 'About' },
                                            { color: 'bg-accent/30', label: 'Voice' },
                                            { color: 'bg-orange-100', label: 'Q&A' },
                                            { color: 'bg-blue-100', label: 'Tips' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col items-center gap-1">
                                                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 p-0.5">
                                                    <div className={`w-full h-full rounded-full ${item.color}`}></div>
                                                </div>
                                                <div className="text-[9px] text-text/70">{item.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tabs */}
                                    <div className="flex border-t border-gray-100 mb-1">
                                        <div className="flex-1 h-8 flex items-center justify-center border-b-2 border-text">
                                            <div className="w-4 h-4 bg-text/80"></div>
                                        </div>
                                        <div className="flex-1 h-8 flex items-center justify-center">
                                            <div className="w-4 h-4 bg-gray-300"></div>
                                        </div>
                                        <div className="flex-1 h-8 flex items-center justify-center">
                                            <div className="w-4 h-4 bg-gray-300"></div>
                                        </div>
                                    </div>

                                    {/* Grid */}
                                    <div className="grid grid-cols-3 gap-0.5">
                                        {[
                                            'bg-primary/10', 'bg-accent/20', 'bg-primary/20',
                                            'bg-accent/10', 'bg-primary/5', 'bg-accent/30',
                                            'bg-primary/15', 'bg-accent/15', 'bg-primary/25'
                                        ].map((color, i) => (
                                            <div key={i} className={`aspect-square ${color} hover:opacity-80 transition-opacity relative group flex items-center justify-center`}>
                                                {i === 0 && <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-50"></div>}
                                                <div className="w-1/2 h-1/2 bg-white/30 rounded-lg"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Hero;
