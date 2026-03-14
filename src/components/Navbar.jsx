import { useState } from 'react';
import useNavScroll from '../hooks/useNavScroll';
import { NAV_LINKS } from '../constants/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useNavScroll();

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : 'nav--transparent'}`} style={{ height: 'var(--nav-height)' }}>
        <a href="#" className="nav__logo">
          <div className="nav__crest" />
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
            <a href="#contact" className="btn btn--primary btn--sm">
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
        <a href="#contact" className="btn btn--primary btn--sm" onClick={() => setIsOpen(false)}>
          Free Counselling
        </a>
      </div>
    </>
  );
}
