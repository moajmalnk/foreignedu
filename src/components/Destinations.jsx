import useScrollReveal from '../hooks/useScrollReveal';
import { DESTINATIONS } from '../constants/data';

function DestinationCard({ flag, name, highlight, pillBg, pillColor, description, image, bgColor, learnMore, index }) {
  return (
    <a href={learnMore} className="card card--destination">
      <div
        className="dest-card__visual"
        style={{
          background: image ? `linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.4)), url(${image}) center/cover` : bgColor,
        }}
      >
        <span className="dest-card__bg-text" aria-hidden>{name}</span>
        <span className="dest-card__flag" role="img" aria-label={name} style={{ animationDelay: `${index * 0.5}s` }}>
          {flag}
        </span>
      </div>
      <div className="dest-card__body">
        <span
          className="dest-card__pill"
          style={{ background: pillBg, color: pillColor }}
        >
          {highlight}
        </span>
        <h3 className="dest-card__name">{name}</h3>
        <p className="dest-card__desc">{description}</p>
        <span className="dest-card__link">
          Learn More <span className="btn__arrow">→</span>
        </span>
      </div>
    </a>
  );
}

export default function Destinations() {
  const ref = useScrollReveal({ staggerChildren: 100 });

  return (
    <section id="destinations" className="section section--cream">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-header__tag">Where We Send Students</span>
          <h2 className="section-header__title">Study <em>Destinations</em></h2>
          <p className="section-header__sub">
            UK, Malta, Latvia &amp; Georgia — each with unique advantages for Indian students.
          </p>
        </div>
        <div className="grid-2 stagger-children" ref={ref}>
          {DESTINATIONS.map((d, i) => (
            <DestinationCard key={d.id} {...d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
