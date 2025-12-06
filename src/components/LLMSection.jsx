import Button from './Button';

function LLMSection() {
  return (
    <section
      className="section section-dark"
      aria-labelledby="llm-section-title"
    >
      <div className="section-content">
        <h2 id="llm-section-title" className="section-title">
          Powered by LLMs
        </h2>
        <p className="section-subtitle">
          Our advanced language models translate complex brain signals into
          meaningful insights you can understand.
        </p>
        <Button variant="outline">Learn about the AI</Button>
      </div>

      <div className="feature-visual">
        <div className="ai-visual" aria-hidden="true"></div>
      </div>
    </section>
  );
}

export default LLMSection;
