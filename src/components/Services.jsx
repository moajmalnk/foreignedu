import useScrollReveal from '../hooks/useScrollReveal';
import { SERVICES } from '../constants/data';

function ServiceCard({ icon, number, title, description }) {
  return (
    <article className="card card--cream" style={{ display: 'flex', flexDirection: 'column' }}>
      <span className="card__number" aria-hidden>{number}</span>
      <div className="card__icon-wrap">{icon}</div>
      <h3 className="card__title">{title}</h3>
      <p className="card__body">{description}</p>
    </article>
  );
}

export default function Services() {
  const ref = useScrollReveal({ staggerChildren: 80 });

  return (
    <section id="services" className="section section--white">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-header__tag">What We Offer</span>
          <h2 className="section-header__title">Our <em>Services</em></h2>
          <p className="section-header__sub">
            End-to-end support from course selection to visa and beyond — so you can focus on your dream.
          </p>
        </div>
        <div className="grid-3 stagger-children" ref={ref}>
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.id}
              icon={s.icon}
              number={s.number}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
