export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src="/assets/profile.jpeg" alt="Ashish Kumar Yadav" />
          </div>
          <div className="about-info">
            <p>
              I'm a passionate Full Stack Developer specializing in the{' '}
              <strong>MERN stack</strong> — MongoDB, Express.js, React.js, and Node.js.
              I love turning ideas into elegant, performant web applications that solve
              real-world problems.
            </p>
            <p>
              From building an <strong>Airbnb-inspired</strong> travel platform to a{' '}
              <strong>Smart Waste Management</strong> system for municipalities, I focus
              on creating impactful solutions with clean code and beautiful interfaces.
            </p>
            <p>
              I'm always eager to learn new technologies and take on challenging projects.
              Currently focused on building scalable applications with{' '}
              <strong>cloud deployment</strong> and <strong>real-time features</strong>.
            </p>
            <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-white" style={{ marginTop: '1rem' }}>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
