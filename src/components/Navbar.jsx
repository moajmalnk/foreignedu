export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <div className="nav-logo-img" style={{ fontSize: '22px' }}>
          🎓
        </div>
        <div className="nav-logo-text">
          <strong>Foreign Education</strong>
          <span>Consultancy</span>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#georgia">Medical</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact" className="nav-cta">Free Counselling</a></li>
      </ul>
      <div className="hamburger" aria-label="Menu"><span /><span /><span /></div>
    </nav>
  );
}
