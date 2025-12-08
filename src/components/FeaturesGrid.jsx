import React from 'react';
import FeatureCard from './FeatureCard';

function FeaturesGrid() {
  const features = [
    {
      icon: '🧠',
      title: 'Neural Precision',
      description: '99.9% accuracy in brain wave detection and analysis',
    },
    {
      icon: '⚡',
      title: 'Real-time Processing',
      description: 'Instant feedback with sub-millisecond latency',
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your neural data stays encrypted and secure',
    },
    {
      icon: '🤖',
      title: 'AI-Powered',
      description: 'Advanced LLMs for natural language insights',
    },
  ];

  return (
    <section
      id="features"
      className="features-grid"
      aria-labelledby="features-title"
    >
      <h2 id="features-title" className="visually-hidden">
        Features
      </h2>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
}

export default FeaturesGrid;
