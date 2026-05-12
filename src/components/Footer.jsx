export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#hero">
            <i className="fa fa-angle-up" style={{ fontSize: '2.4rem', color: 'var(--text2)' }} />
          </a>
        </div>
        <div className="social-links">
          <a href="https://github.com/ashishyadav9696" target="_blank" rel="noreferrer" className="social-link">
            <i className="devicon-github-original" />
          </a>
          <a href="https://www.linkedin.com/in/ashish-kumar-yadav-961465334/" target="_blank" rel="noreferrer" className="social-link">
            <i className="devicon-linkedin-plain" />
          </a>
          <a href="mailto:ay96964032@gmail.com" className="social-link">
            <i className="fa fa-envelope" />
          </a>
        </div>
        <p>© 2026 — Designed & Built by <a href="https://github.com/ashishyadav9696" target="_blank" rel="noreferrer" className="highlight">Ashish Kumar Yadav</a></p>
      </div>
    </footer>
  )
}
