import './style.css'
import { ParticleSystem } from './particles.js'
import '@lottiefiles/lottie-player'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="nav">
    <div class="nav-content">
      <div class="nav-logo">NeuroLink AI</div>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#technology">Technology</a>
        <a href="#contact">Contact</a>
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
        <lottie-player
          src="https://lottie.host/18df1ba7-e44d-4f47-a2ea-e39c1bdbe820/UYSrcXwbf1.lottie"
          background="transparent"
          speed="1"
          style="width: 400px; height: 400px;"
          loop
          autoplay>
        </lottie-player>
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
