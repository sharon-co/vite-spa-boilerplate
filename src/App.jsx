import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import LottieSection from './components/LottieSection';
import LLMSection from './components/LLMSection';
import FeaturesGrid from './components/FeaturesGrid';
import FAQ from './components/FAQ';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import './style.css';

function App() {
  return (
    <div className="app">
      <SkipLink />
      <Navigation />

      <main id="main-content">
        <Hero />
        <VideoSection />
        <LottieSection />
        <LLMSection />
        <FeaturesGrid />
        <FAQ />
        <Waitlist />
      </main>

      <Footer />
    </div>
  );
}

export default App;
