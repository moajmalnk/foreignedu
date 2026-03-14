import { NAV_LINKS, DESTINATIONS } from '../constants/data';

const SOCIAL_LINKS = [
  { icon: 'f', label: 'Facebook', href: '#' },
  { icon: 'in', label: 'LinkedIn', href: '#' },
  { icon: '▶', label: 'YouTube', href: '#' },
  { icon: '📸', label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer section section--dark">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__crest">♛📖🎓</div>
            <h3>Foreign Education Consultancy</h3>
            <p>
              Helping Indian students navigate their path to UK, Malta, Latvia and Georgia.
              Honest counselling. Verified universities. Your future, our commitment.
            </p>
            <div className="footer__addresses">
              <div className="footer__addr">
                <span className="footer__addr-label">London Office</span>
                <span>42 Education Square, London EC1A 1BB, UK</span>
              </div>
              <div className="footer__addr">
                <span className="footer__addr-label">Tbilisi Office</span>
                <span>15 Rustaveli Avenue, Tbilisi 0108, Georgia</span>
              </div>
            </div>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {NAV_LINKS.slice(0, 3).map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4>Destinations</h4>
            <ul>
              {DESTINATIONS.map((d) => (
                <li key={d.id}><a href={d.learnMore}>{d.name}</a></li>
              ))}
            </ul>
            <div className="footer__social">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} className="footer__social-icon" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Foreign Education Consultancy. All rights reserved.</p>
          <div>
            <a href="#">Privacy</a> · <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
