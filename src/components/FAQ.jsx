import { useState } from 'react';
import FAQItem from './FAQItem';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How does NeuroLink AI work?',
      answer:
        'NeuroLink AI uses advanced sensors to detect your brain waves and processes them through our proprietary AI algorithms. Our LLM technology translates these signals into meaningful insights about your mental state, focus, and cognitive performance in real-time.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely. All neural data is encrypted end-to-end and stored locally on your device. We never share your brain wave data with third parties, and you have full control over what data is collected and retained.',
    },
    {
      question: 'When will NeuroLink AI be available?',
      answer:
        "We're currently in late-stage development and testing. Join our waitlist below to be among the first to know when NeuroLink AI becomes available for pre-order. Waitlist members will also receive exclusive early-bird pricing.",
    },
    {
      question: 'What are the system requirements?',
      answer:
        'NeuroLink AI is compatible with iOS 15+ and Android 12+ devices. The companion app requires minimal storage (under 50MB) and works seamlessly with Bluetooth 5.0 or higher for optimal performance.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="section section-light qna-section"
      aria-labelledby="faq-title"
    >
      <div className="qna-content">
        <h2 id="faq-title" className="section-title">
          Frequently Asked Questions
        </h2>

        <div className="qna-list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
              id={`faq-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
