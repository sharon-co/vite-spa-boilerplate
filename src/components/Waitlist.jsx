import { useState } from 'react';
import Button from './Button';

function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Mock submission
    console.log('Waitlist submission:', {
      email,
      timestamp: new Date().toISOString(),
      status: 'pending',
    });

    setSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 5000);
  };

  return (
    <section
      id="waitlist"
      className="section section-dark waitlist-section"
      aria-labelledby="waitlist-title"
    >
      <div className="waitlist-content">
        <h2 id="waitlist-title" className="section-title">
          Join the Waitlist
        </h2>
        <p className="section-subtitle">
          Be the first to experience the future of brain-computer interfaces.
          Get exclusive early access and special launch pricing.
        </p>

        {!submitted ? (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email-input" className="visually-hidden">
                Email address
              </label>
              <input
                type="email"
                id="email-input"
                className="email-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'email-error' : 'email-note'}
                required
              />
              <Button type="submit" variant="primary" className="submit-btn">
                Join Waitlist
              </Button>
            </div>

            {error && (
              <p id="email-error" className="form-error" role="alert">
                {error}
              </p>
            )}

            <p id="email-note" className="form-note">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        ) : (
          <div className="success-message" role="status" aria-live="polite">
            <div className="success-icon" aria-hidden="true">
              ✓
            </div>
            <h3>You're on the list!</h3>
            <p>
              Thank you for joining our waitlist. We'll notify you as soon as
              NeuroLink AI is available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Waitlist;
