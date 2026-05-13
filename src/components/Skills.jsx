const categories = [
  {
    title: 'Frontend',
    icon: 'fa fa-desktop',
    skills: [
      { icon: 'devicon-react-original colored', name: 'React.js' },
      { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
      { icon: 'devicon-html5-plain colored', name: 'HTML5' },
      { icon: 'devicon-css3-plain colored', name: 'CSS3' },
      { icon: 'devicon-bootstrap-plain colored', name: 'Bootstrap' },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: 'fa fa-server',
    skills: [
      { icon: 'devicon-nodejs-plain colored', name: 'Node.js' },
      { icon: 'devicon-express-original', name: 'Express.js', color: '#00E5FF' },
      { icon: 'devicon-mongodb-plain colored', name: 'MongoDB' },
      { icon: 'fa fa-database', name: 'DBMS', color: '#00D4AA' },
      { icon: 'devicon-java-plain colored', name: 'Java' },
      { icon: 'devicon-python-plain colored', name: 'Python' },
      { icon: 'fa fa-plug', name: 'REST APIs', color: '#FF6B9D' },
      { icon: 'fa fa-key', name: 'Authentication', color: '#FFC107' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: 'fa fa-wrench',
    skills: [
      { icon: 'devicon-git-plain colored', name: 'Git & GitHub' },
      { icon: 'devicon-docker-plain colored', name: 'Docker' },
      { icon: 'fa fa-map-marker', name: 'Mapbox / Leaflet', color: '#4264fb' },
      { icon: 'fa fa-cloud-upload', name: 'Cloudinary', color: '#FF9F43' },
      { icon: 'fa fa-rocket', name: 'Render Deploy', color: '#00D4AA' },
      { icon: 'fa fa-bar-chart', name: 'Chart.js', color: '#FF6384' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-card" key={cat.title}>
              <div className="skill-card-header">
                <div className="skill-card-icon"><i className={cat.icon} /></div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <div className="skill-tag" key={s.name}>
                    <i className={s.icon} style={s.color ? { color: s.color } : undefined} />
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
