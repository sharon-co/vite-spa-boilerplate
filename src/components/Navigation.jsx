import React, { useState } from 'react';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-content">
        <div className="nav-logo" aria-label="NeuroLink AI Home">
          NeuroLink AI
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
          <a
            href="#features"
            onClick={(e) => handleNavClick(e, '#features')}
          >
            Features
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, '#faq')}
          >
            Q&amp;A
          </a>
          <a
            href="#waitlist"
            onClick={(e) => handleNavClick(e, '#waitlist')}
          >
            Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
