import { useEffect, useRef } from 'react'

function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []
    const resize = () => { canvas.width = canvas.parentElement.offsetWidth; canvas.height = canvas.parentElement.offsetHeight }
    resize()
    window.addEventListener('resize', resize)
    for (let i = 0; i < 60; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 2 + 0.5, dx: (Math.random() - 0.5) * 0.4, dy: (Math.random() - 0.5) * 0.4, color: ['#6C63FF','#00D4AA','#FF6B9D'][Math.floor(Math.random()*3)] })
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color; ctx.globalAlpha = 0.5; ctx.fill()
      })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />
}

const ring1 = [
  { icon: 'devicon-react-original colored', cls: 'r1-0' },
  { icon: 'devicon-nodejs-plain colored', cls: 'r1-1' },
  { icon: 'devicon-mongodb-plain colored', cls: 'r1-2' },
  { icon: 'devicon-express-original', cls: 'r1-3' },
]
const ring2 = [
  { icon: 'devicon-html5-plain colored', cls: 'r2-0' },
  { icon: 'devicon-css3-plain colored', cls: 'r2-1' },
  { icon: 'devicon-git-plain colored', cls: 'r2-2' },
  { icon: 'devicon-github-original', cls: 'r2-3' },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <ParticleCanvas />
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="glow glow-3" />
      <div className="hero-inner container">
        <div className="hero-content animate-left">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name">Ashish Kumar Yadav</h1>
          <span className="hero-role">Full Stack MERN Developer</span>
          <p className="hero-tagline">
            I build modern, scalable web applications with{' '}
            <span className="hl">React</span>,{' '}
            <span className="hl">Node.js</span>,{' '}
            <span className="hl">MongoDB</span> &{' '}
            <span className="hl">Express</span>.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">2+</span>
              <span className="hero-stat-label">Projects Built</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">5+</span>
              <span className="hero-stat-label">Technologies</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">MERN</span>
              <span className="hero-stat-label">Stack Expert</span>
            </div>
          </div>
        </div>
        <div className="hero-visual animate-right">
          <div className="orbit">
            <div className="orbit-center"><i className="devicon-javascript-plain colored" /></div>
            <div className="orbit-ring orbit-ring-1">
              {ring1.map((item, i) => (
                <div className={`orbit-icon ${item.cls}`} key={i}><i className={item.icon} /></div>
              ))}
            </div>
            <div className="orbit-ring orbit-ring-2">
              {ring2.map((item, i) => (
                <div className={`orbit-icon ${item.cls}`} key={i}><i className={item.icon} /></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
