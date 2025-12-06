import { useEffect, useState } from 'react';
import Button from './Button';

function LottieSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section
      className="section section-light section-realtime"
      aria-labelledby="lottie-section-title"
    >
      <div className="feature-visual">
        <div
          className="lottie-container"
          role="img"
          aria-label="Real-time brain wave analysis visualization"
        >
          {!prefersReducedMotion ? (
            <iframe
              src="https://lottie.host/embed/18df1ba7-e44d-4f47-a2ea-e39c1bdbe820/UYSrcXwbf1.json"
              style={{
                width: 400,
                height: 400,
                border: 'none',
                background: 'transparent'
              }}
              title="Real-time insights animation"
            />
          ) : (
            // Static fallback for reduced motion
            <div className="lottie-fallback" aria-hidden="true">
              ⚡
            </div>
          )}
        </div>
      </div>

      <div className="section-content">
        <h2 id="lottie-section-title" className="section-title">
          Real-time insights
        </h2>
        <p className="section-subtitle">
          Get instant feedback on your mental state, focus levels, and
          cognitive performance.
        </p>
        <Button variant="primary">See how it works</Button>
      </div>
    </section>
  );
}

export default LottieSection;
