import React from 'react';

// Reusable feature card component with proper accessibility
function FeatureCard({ icon, title, description }) {
  return (
    <article className="feature-card">
      <div className="feature-icon" aria-hidden="true" role="presentation">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default FeatureCard;
