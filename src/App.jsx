import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import PainPoints from './sections/PainPoints';
import Features from './sections/Features';
import Target from './sections/Target';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';

function App() {
  return (
    <div className="font-sans text-text bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Features />
        <Target />
        <Process />
        <Portfolio />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
