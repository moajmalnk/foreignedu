export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="nav-logo" style={{ marginBottom: '4px' }}>
            <div className="nav-logo-img">
              <span style={{ fontSize: '20px' }}>🎓</span>
            </div>
            <div className="nav-logo-text">
              <strong style={{ color: 'rgba(255,255,255,.9)' }}>Foreign Education</strong>
              <span>Consultancy</span>
            </div>
          </div>
          <p>Expert guidance for global education. Specialising in MBBS and Nursing program placements in Georgia, UK, Malta, and Latvia.</p>
          <div className="footer-addresses">
            <div className="f-addr">
              <strong>London Hub</strong>
              15 Wigmore St, Marylebone, London W1U 1PF<br />
              T: +44 20 7946 0000 &nbsp;·&nbsp; E: info@foreigneducationconsultancy.com
            </div>
            <div className="f-addr">
              <strong>Tbilisi Operations</strong>
              MBBS &amp; Nursing Specialists
            </div>
          </div>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Career Counselling</a></li>
            <li><a href="#services">Visa Documentation</a></li>
            <li><a href="#services">University Selection</a></li>
            <li><a href="#services">Application Help</a></li>
            <li><a href="#services">Post-Visa Support</a></li>
            <li><a href="#services">Scholarships</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Destinations</h4>
          <ul>
            <li><a href="#destinations">United Kingdom</a></li>
            <li><a href="#destinations">Malta</a></li>
            <li><a href="#destinations">Latvia</a></li>
            <li><a href="#georgia">Georgia – MBBS</a></li>
            <li><a href="#georgia">Georgia – Nursing</a></li>
          </ul>
          <h4 style={{ marginTop: '24px' }}>Socials</h4>
          <div className="footer-social">
            <div className="social-icon">f</div>
            <div className="social-icon">in</div>
            <div className="social-icon">▶</div>
            <div className="social-icon">📸</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Foreign Education Consultancy. All Rights Reserved. &nbsp;·&nbsp; Smarter Paths to Global Success</p>
        <p>Privacy Policy &nbsp;·&nbsp; Terms of Service</p>
      </div>
    </footer>
  );
}
