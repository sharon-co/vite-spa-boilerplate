import './style.css'
import { ParticleSystem } from './particles.js'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="nav">
    <div class="nav-content">
      <div class="nav-logo">NeuroLink AI</div>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#qna">Q&A</a>
        <a href="#waitlist">Waitlist</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">NeuroLink AI</h1>
      <p class="hero-subtitle">Your mind. Amplified.</p>
      <p class="hero-description">Experience the future of brain-computer interfaces. Our AI-powered device reads and interprets your brain waves in real-time.</p>
      <div class="hero-cta">
        <button class="btn-primary">Learn more</button>
        <button class="btn-secondary">Pre-order</button>
      </div>
    </div>
    <div class="hero-device">
      <div class="device-placeholder">
        <div class="brain-wave-animation"></div>
      </div>
    </div>
  </section>

  <!-- Feature Section 1 - Dark -->
  <section class="section section-dark">
    <div class="section-content">
      <h2 class="section-title">Understand your mind</h2>
      <p class="section-subtitle">Advanced AI technology that interprets your neural patterns with unprecedented accuracy.</p>
      <button class="btn-outline">Explore the science</button>
    </div>
    <div class="feature-visual">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/LNHBMFCzznE?si=-4F3eyvCfBggK10_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </section>

  <!-- Feature Section 2 - Light -->
  <section class="section section-light section-realtime">
    <div class="feature-visual">
      <div class="lottie-container">
        <dotlottie-wc
          src="https://lottie.host/18df1ba7-e44d-4f47-a2ea-e39c1bdbe820/UYSrcXwbf1.lottie"
          style="width: 400px; height: 400px"
          autoplay
          loop>
        </dotlottie-wc>
      </div>
    </div>
    <div class="section-content">
      <h2 class="section-title">Real-time insights</h2>
      <p class="section-subtitle">Get instant feedback on your mental state, focus levels, and cognitive performance.</p>
      <button class="btn-primary">See how it works</button>
    </div>
  </section>

  <!-- Feature Section 3 - Dark -->
  <section class="section section-dark">
    <div class="section-content">
      <h2 class="section-title">Powered by LLMs</h2>
      <p class="section-subtitle">Our advanced language models translate complex brain signals into meaningful insights you can understand.</p>
      <button class="btn-outline">Learn about the AI</button>
    </div>
    <div class="feature-visual">
      <div class="ai-visual"></div>
    </div>
  </section>

  <!-- Features Grid -->
  <section class="features-grid" id="features">
    <div class="feature-card">
      <div class="feature-icon">🧠</div>
      <h3>Neural Precision</h3>
      <p>99.9% accuracy in brain wave detection and analysis</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">⚡</div>
      <h3>Real-time Processing</h3>
      <p>Instant feedback with sub-millisecond latency</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🔒</div>
      <h3>Privacy First</h3>
      <p>Your neural data stays encrypted and secure</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🤖</div>
      <h3>AI-Powered</h3>
      <p>Advanced LLMs for natural language insights</p>
    </div>
  </section>

  <!-- Q&A Section -->
  <section class="section section-light qna-section" id="qna">
    <div class="qna-content">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="qna-list">
        <div class="qna-item">
          <div class="qna-question">
            <h3>How does NeuroLink AI work?</h3>
            <span class="qna-toggle">+</span>
          </div>
          <div class="qna-answer">
            <p>NeuroLink AI uses advanced sensors to detect your brain waves and processes them through our proprietary AI algorithms. Our LLM technology translates these signals into meaningful insights about your mental state, focus, and cognitive performance in real-time.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-question">
            <h3>Is my data secure?</h3>
            <span class="qna-toggle">+</span>
          </div>
          <div class="qna-answer">
            <p>Absolutely. All neural data is encrypted end-to-end and stored locally on your device. We never share your brain wave data with third parties, and you have full control over what data is collected and retained.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-question">
            <h3>When will NeuroLink AI be available?</h3>
            <span class="qna-toggle">+</span>
          </div>
          <div class="qna-answer">
            <p>We're currently in late-stage development and testing. Join our waitlist below to be among the first to know when NeuroLink AI becomes available for pre-order. Waitlist members will also receive exclusive early-bird pricing.</p>
          </div>
        </div>
        <div class="qna-item">
          <div class="qna-question">
            <h3>What are the system requirements?</h3>
            <span class="qna-toggle">+</span>
          </div>
          <div class="qna-answer">
            <p>NeuroLink AI is compatible with iOS 15+ and Android 12+ devices. The companion app requires minimal storage (under 50MB) and works seamlessly with Bluetooth 5.0 or higher for optimal performance.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Waitlist Section -->
  <section class="section section-dark waitlist-section" id="waitlist">
    <div class="waitlist-content">
      <h2 class="section-title">Join the Waitlist</h2>
      <p class="section-subtitle">Be the first to experience the future of brain-computer interfaces. Get exclusive early access and special launch pricing.</p>
      <form class="waitlist-form" id="waitlistForm">
        <div class="form-group">
          <input
            type="email"
            id="emailInput"
            placeholder="Enter your email address"
            required
            class="email-input"
          />
          <button type="submit" class="btn-primary submit-btn">Join Waitlist</button>
        </div>
        <p class="form-note">We respect your privacy. Unsubscribe at any time.</p>
      </form>
      <div class="success-message" id="successMessage">
        <div class="success-icon">✓</div>
        <h3>You're on the list!</h3>
        <p>Thank you for joining our waitlist. We'll notify you as soon as NeuroLink AI is available.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 NeuroLink AI. All rights reserved.</p>
      <div class="footer-links">
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </footer>
`

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

// Initialize custom particle system
const heroSection = document.querySelector('.hero')
if (heroSection) {
  const particleSystem = new ParticleSystem(heroSection)
  console.log('Custom particle system initialized!')
}

// Q&A Accordion functionality
const qnaItems = document.querySelectorAll('.qna-item')
qnaItems.forEach(item => {
  const question = item.querySelector('.qna-question')
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active')

    // Close all other items
    qnaItems.forEach(otherItem => {
      otherItem.classList.remove('active')
      otherItem.querySelector('.qna-toggle').textContent = '+'
    })

    // Toggle current item
    if (!isActive) {
      item.classList.add('active')
      question.querySelector('.qna-toggle').textContent = '−'
    }
  })
})

// Waitlist form submission with mock data
const waitlistForm = document.getElementById('waitlistForm')
const successMessage = document.getElementById('successMessage')
const emailInput = document.getElementById('emailInput')

waitlistForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = emailInput.value

  // Mock data storage (console log to simulate backend)
  const mockWaitlistData = {
    email: email,
    timestamp: new Date().toISOString(),
    status: 'pending'
  }

  console.log('Mock waitlist submission:', mockWaitlistData)

  // Show success message
  waitlistForm.style.display = 'none'
  successMessage.style.display = 'flex'

  // Optional: Reset form after 5 seconds
  setTimeout(() => {
    waitlistForm.style.display = 'flex'
    successMessage.style.display = 'none'
    emailInput.value = ''
  }, 5000)
})
