import useScrollReveal from '../hooks/useScrollReveal';
import { TESTIMONIALS } from '../constants/data';

function TestimonialCard({ quote, name, role, initial }) {
  return (
    <article className="card card--testimonial" style={{ alignSelf: 'stretch' }}>
      <span className="testi-card__quote" aria-hidden>&ldquo;</span>
      <div className="testi-card__stars" aria-hidden>
        <span className="testi-card__star">★</span>
        <span className="testi-card__star">★</span>
        <span className="testi-card__star">★</span>
        <span className="testi-card__star">★</span>
        <span className="testi-card__star">★</span>
      </div>
      <p className="testi-card__text">{quote}</p>
      <div className="testi-card__author">
        <div className="testi-card__avatar">{initial}</div>
        <div>
          <span className="testi-card__name">{name}</span>
          <span className="testi-card__role">{role}</span>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const ref = useScrollReveal({ staggerChildren: 80 });

  return (
    <section id="testimonials" className="section section--cream">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-header__tag">Success Stories</span>
          <h2 className="section-header__title">What Students <em>Say</em></h2>
          <p className="section-header__sub">
            Real experiences from students who chose Foreign Education Consultancy.
          </p>
        </div>
        <div className="testimonials-grid stagger-children" ref={ref}>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard
              key={t.id}
              quote={t.quote}
              name={t.name}
              role={t.role}
              initial={t.initial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
