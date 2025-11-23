import React from 'react';
import Hero from '../sections/Hero';
import PainPoints from '../sections/PainPoints';
import Features from '../sections/Features';
import Target from '../sections/Target';
import Process from '../sections/Process';
import Portfolio from '../sections/Portfolio';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <PainPoints />
            <Features />
            <Target />
            <Process />
            <Portfolio />
            <Pricing />
            <FAQ />
        </>
    );
};

export default Home;
