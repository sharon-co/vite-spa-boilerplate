import './style.css'

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
  <section class="hero finisher-header">
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
      <div class="neural-network"></div>
    </div>
  </section>

  <!-- Feature Section 2 - Light -->
  <section class="section section-light">
    <div class="feature-visual">
      <div class="brain-visual"></div>
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

// Initialize Finisher Header for animated particle background
function initFinisherHeader() {
  if (typeof FinisherHeader !== 'undefined') {
    new FinisherHeader({
      "count": 150,
      "size": {
        "min": 20,
        "max": 150,
        "pulse": 0.5
      },
      "speed": {
        "x": {
          "min": 0.2,
          "max": 1.2
        },
        "y": {
          "min": 0.2,
          "max": 1.2
        }
      },
      "colors": {
        "background": "transparent",
        "particles": [
          "#00ff88",
          "#0071e3",
          "#64b5f6",
          "#4fc3f7",
          "#80deea"
        ]
      },
      "blending": "overlay",
      "opacity": {
        "center": 0.9,
        "edge": 0.2
      },
      "skew": 0,
      "shapes": [
        "c"
      ]
    })
    console.log('Finisher Header initialized with enhanced visibility!')
  } else {
    console.log('FinisherHeader not loaded yet, retrying...')
    setTimeout(initFinisherHeader, 100)
  }
}

// Wait for everything to load then initialize
setTimeout(initFinisherHeader, 500)
