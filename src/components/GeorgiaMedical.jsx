import useScrollReveal from '../hooks/useScrollReveal';
import { PROGRAMS, GEORGIA_STATS } from '../constants/data';

export default function GeorgiaMedical() {
  const panelRef = useScrollReveal({ direction: 'right', threshold: 0.15 });

  return (
    <section id="georgia" className="section section--blue georgia-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(26,75,140,.95) 0%, rgba(26,75,140,.85) 100%), url(/georgia.avif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <div className="georgia grid-split--wide">
          <div className="georgia__left">
            <span className="section-header__tag section-header__tag--light">Georgia Specialists</span>
            <h2 className="section-header__title section-header__title--white">
              MBBS &amp; Nursing in Georgia
            </h2>
            <p className="section-header__sub section-header__sub--white">
              MCI-recognised medical universities in Georgia offer affordable MBBS and Nursing programmes.
              English-taught curriculum, EU clinical exposure, and a clear pathway to practice in India after FMGE.
            </p>
            <div className="georgia__programs">
              {PROGRAMS.map((prog) => (
                <article key={prog.id} className="card card--program">
                  <div className="georgia__prog-header">
                    <span className="georgia__prog-num">{prog.number}</span>
                    <h3>{prog.title}</h3>
                  </div>
                  <ul>
                    {prog.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="georgia__right card card--glass georgia__panel-img" ref={panelRef}>
            <div className="georgia__stat-grid">
              {GEORGIA_STATS.map((stat) => (
                <div key={stat.label} className="georgia__stat">
                  <div className="georgia__stat-value">{stat.value}{stat.label.includes('Pass Rate') ? '%' : '+'}</div>
                  <div className="georgia__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="georgia__desc">
              Our team has placed hundreds of students in Georgia&apos;s top medical universities.
              We handle documentation, admission, and pre-departure support.
            </p>
            <a href="#contact" className="btn btn--gold btn--md">
              Enquire About Georgia <span className="btn__arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
