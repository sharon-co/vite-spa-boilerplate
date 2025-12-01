// Custom Particle Animation System
export class ParticleSystem {
  constructor(container) {
    this.container = container
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.particles = []
    this.animationId = null

    this.canvas.style.position = 'absolute'
    this.canvas.style.top = '0'
    this.canvas.style.left = '0'
    this.canvas.style.width = '100%'
    this.canvas.style.height = '100%'
    this.canvas.style.pointerEvents = 'none'
    this.canvas.style.zIndex = '5'

    this.container.appendChild(this.canvas)

    this.resize()
    window.addEventListener('resize', () => this.resize())

    this.init()
    this.animate()
  }

  resize() {
    const rect = this.container.getBoundingClientRect()
    this.canvas.width = rect.width
    this.canvas.height = rect.height
  }

  init() {
    const particleCount = 20
    const colors = [
      { r: 0, g: 113, b: 227 },    // Blue
      { r: 100, g: 181, b: 246 },  // Light blue
      { r: 255, g: 255, b: 255 },  // White
    ]

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 30 + 15,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: color,
        alpha: Math.random() * 0.15 + 0.05,
        pulseSpeed: Math.random() * 0.005 + 0.002,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }
  }

  drawParticle(particle) {
    // Subtle pulsing effect
    const pulse = Math.sin(Date.now() * particle.pulseSpeed + particle.pulsePhase)
    const currentSize = particle.size + pulse * 5
    const currentAlpha = particle.alpha + pulse * 0.05

    // Create radial gradient for glow effect
    const gradient = this.ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, currentSize
    )

    gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${currentAlpha})`)
    gradient.addColorStop(0.5, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${currentAlpha * 0.5})`)
    gradient.addColorStop(1, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0)`)

    this.ctx.fillStyle = gradient
    this.ctx.beginPath()
    this.ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)
    this.ctx.fill()
  }

  updateParticle(particle) {
    particle.x += particle.speedX
    particle.y += particle.speedY

    // Wrap around edges
    if (particle.x < -particle.size) particle.x = this.canvas.width + particle.size
    if (particle.x > this.canvas.width + particle.size) particle.x = -particle.size
    if (particle.y < -particle.size) particle.y = this.canvas.height + particle.size
    if (particle.y > this.canvas.height + particle.size) particle.y = -particle.size
  }

  animate() {
    // Clear canvas completely (no trails for clean look)
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // Update and draw particles
    this.particles.forEach(particle => {
      this.updateParticle(particle)
      this.drawParticle(particle)
    })

    this.animationId = requestAnimationFrame(() => this.animate())
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    if (this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas)
    }
  }
}
