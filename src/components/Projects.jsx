const projectsData = [
  {
    title: 'WanderLust',
    type: 'Travel & Hospitality Platform',
    badge: '⭐ Featured',
    badgeCls: 'badge-featured',
    desc: 'A full-featured Airbnb-style travel platform built with the MERN stack. Users can discover, list, and book unique accommodations worldwide — from mountain retreats to glass igloos. Features include interactive Mapbox maps, user authentication, image uploads via Cloudinary, reviews & ratings, and category-based search with filters.',
    tags: [
      { name: 'React', cls: 'react' },
      { name: 'Node.js', cls: 'node' },
      { name: 'MongoDB', cls: 'mongo' },
      { name: 'Express', cls: 'express' },
      { name: 'Mapbox', cls: 'mapbox' },
      { name: 'Cloudinary', cls: 'cloud' },
    ],
    live: 'https://wanderlustproject-bwq5.onrender.com',
    source: 'https://github.com/ashishyadav9696/WanderlustProject.git',
    img: './assets/wanderlust.png',
  },
  {
    title: 'CleanCity',
    type: 'Smart Waste Management System',
    badge: '🧪 Prototype',
    badgeCls: 'badge-prototype',
    desc: 'An intelligent municipal waste management dashboard designed for Nagarpalika staff, admins, and field workers. Features real-time issue tracking with interactive maps, category-based reporting (broken dustbins, sewage overflow, etc.), worker assignment, analytics dashboards with trend charts, and role-based access control.',
    tags: [
      { name: 'React', cls: 'react' },
      { name: 'Node.js', cls: 'node' },
      { name: 'MongoDB', cls: 'mongo' },
      { name: 'Express', cls: 'express' },
      { name: 'Leaflet', cls: 'leaflet' },
      { name: 'Chart.js', cls: 'chart' },
    ],
    live: 'https://cleancity-frontend.onrender.com',
    source: 'https://github.com/ashishyadav9696/cleancity-.git',
    img: './assets/cleancity.png',
  },
  {
    title: 'ChatSphere',
    type: 'Real-Time Chat Application',
    badge: '💬 Live',
    badgeCls: 'badge-live',
    desc: 'A full-stack real-time messaging platform enabling seamless one-on-one and group conversations. Built with Socket.io for instant bi-directional communication, JWT-based authentication, online presence indicators, message history persistence, and a sleek dark-themed UI with responsive design across all devices.',
    tags: [
      { name: 'React', cls: 'react' },
      { name: 'Node.js', cls: 'node' },
      { name: 'MongoDB', cls: 'mongo' },
      { name: 'Socket.io', cls: 'socket' },
      { name: 'Express', cls: 'express' },
      { name: 'JWT', cls: 'jwt' },
    ],
    live: 'https://chatsphere-frontend-moyv.onrender.com',
    source: 'https://github.com/ashishyadav9696/RealTimeChat-Application.git',
    img: '/assets/chatsphere.png',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        {projectsData.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-info">
              <span className={`project-badge ${p.badgeCls}`}>{p.badge}</span>
              <h3>{p.title}</h3>
              <p className="project-type">{p.type}</p>
              <p><strong>{p.desc.split(' ').slice(0, 4).join(' ')}</strong>{' '}{p.desc.split(' ').slice(4).join(' ')}</p>
              <div className="tech-tags">
                {p.tags.map((t) => (
                  <span className={`tech-tag ${t.cls}`} key={t.name}>{t.name}</span>
                ))}
              </div>
              <div className="project-btns">
                <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary">🚀 See Live</a>
                <a href={p.source} target="_blank" rel="noreferrer" className="btn btn-outline">{'</>'} Source Code</a>
              </div>
            </div>
            <div className="project-img">
              <img src={p.img} alt={p.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
