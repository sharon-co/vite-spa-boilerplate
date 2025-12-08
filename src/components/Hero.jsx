import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { ParticleSystem } from '../particles.js';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Initialize particle system for hero background
    if (heroRef.current) {
      const particleSystem = new ParticleSystem(heroRef.current);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">
          NeuroLink AI
        </h1>
        <p className="hero-subtitle">Your mind. Amplified.</p>
        <p className="hero-description">
          Experience the future of brain-computer interfaces. Our AI-powered
          device reads and interprets your brain waves in real-time.
        </p>
        <div className="hero-cta">
          <Button variant="primary">Learn more</Button>
          <Button variant="secondary">Pre-order</Button>
        </div>
      </div>

      {/* Brain wave visualization */}
      <div className="hero-device" aria-hidden="true">
        <div className="device-placeholder">
          <div className="brain-wave-animation"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
