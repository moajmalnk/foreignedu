import { useState } from 'react';
import useNavScroll from '../hooks/useNavScroll';
import { NAV_LINKS, SITE } from '../constants/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useNavScroll();

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : 'nav--transparent'}`} style={{ height: 'var(--nav-height)' }}>
        <a href="#" className="nav__logo">
          <img src={SITE.logo} alt={SITE.name} className="nav__logo-img" />
          <div className="nav__text">
            <strong>Foreign Education</strong>
            <span>Consultancy</span>
          </div>
        </a>
        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn--primary btn--sm nav__cta nav__cta-icon nav__cta-icon--free-counselling nav__cta-icon--free-counselling-text">
              <span className="nav__cta-icon" aria-hidden></span>
              Free Counselling
            </a>
          </li>
        </ul>
        <button
          type="button"
          className={`nav__hamburger ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`nav__mobile ${isOpen ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--primary btn--sm nav__cta" onClick={() => setIsOpen(false)}>
          <span className="nav__cta-icon" aria-hidden>💬</span>
          Free Counselling
        </a>
      </div>
    </>
  );
}
