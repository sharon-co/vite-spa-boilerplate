import { useRef, useEffect } from 'react';

// Accessible FAQ accordion item using button + region pattern
function FAQItem({ question, answer, isActive, onToggle, id }) {
  const answerRef = useRef(null);

  return (
    <article className={`qna-item ${isActive ? 'active' : ''}`}>
      <h3>
        <button
          className="qna-question"
          onClick={onToggle}
          aria-expanded={isActive}
          aria-controls={`${id}-answer`}
          id={`${id}-question`}
        >
          <span>{question}</span>
          <span className="qna-toggle" aria-hidden="true">
            {isActive ? '−' : '+'}
          </span>
        </button>
      </h3>

      <div
        id={`${id}-answer`}
        ref={answerRef}
        className="qna-answer"
        role="region"
        aria-labelledby={`${id}-question`}
        aria-hidden={!isActive}
      >
        <p>{answer}</p>
      </div>
    </article>
  );
}

export default FAQItem;
