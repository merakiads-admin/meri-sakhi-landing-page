import React from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import IVFProcess from './components/IVFProcess';
import Testimonials from './components/Testimonials';
import MeriSakhi from './components/MeriSakhi';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div id="why-choose">
        <WhyChooseUs />
      </div>
      <div id="process">
        <IVFProcess />
      </div>
      <Testimonials />
      <div id="meri-sakhi">
        <MeriSakhi />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <CTASection />
      <Footer />
      <FloatingCTA />
      <Toaster />
    </div>
  );
}

export default App;