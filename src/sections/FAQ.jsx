import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-accent/30 last:border-none">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4">
                    <span className="text-primary font-bold text-xl">Q.</span>
                    <span className="font-bold text-text text-lg group-hover:text-primary transition-colors">{question}</span>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-text/50" />
                ) : (
                    <ChevronDown className="w-6 h-6 text-text/50" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="flex gap-4 pl-4">
                    <span className="text-accent font-bold text-xl">A.</span>
                    <p className="text-text/80 leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const { t } = useLanguage();
    const faqs = [
        {
            question: t('faq.q1'),
            answer: t('faq.a1')
        },
        {
            question: t('faq.q2'),
            answer: t('faq.a2')
        },
        {
            question: t('faq.q3'),
            answer: t('faq.a3')
        }
    ];


    return (
        <section className="py-20 px-6 md:px-12 bg-accent/10">
            <div className="max-w-3xl mx-auto">
                <FadeIn>
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-text flex items-center justify-center gap-3">
                        <HelpCircle className="w-8 h-8 text-primary" />
                        {t('faq.title')}
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="bg-white rounded-[2rem] px-8 py-4 shadow-sm">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default FAQ;
