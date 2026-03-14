import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';
import { STATS } from '../constants/data';

const PROMISES = [
  { title: 'Transparent Fee Structure', desc: 'No hidden costs. We explain every rupee before you commit.' },
  { title: 'Verified University Partners', desc: 'Only MCI-recognised and accredited institutions.' },
  { title: 'Visa Expertise', desc: '98% success rate with UK, Schengen and Georgian visas.' },
  { title: 'Post-Arrival Support', desc: 'We stay with you from application to graduation.' },
];

function MetricCard({ label, value, suffix, countUpRef, displayValue }) {
  return (
    <article className="card card--metric" ref={countUpRef}>
      <div className="card__metric-value">{displayValue}{suffix}</div>
      <div className="card__metric-label">{label}</div>
    </article>
  );
}

export default function About() {
  const metricRef = useScrollReveal({ staggerChildren: 80 });
  const promiseRef = useScrollReveal({ staggerChildren: 60 });
  const s1 = useCountUp(STATS[0].value, 2000, 0);
  const s2 = useCountUp(STATS[1].value, 2000, 0);
  const s3 = useCountUp(STATS[2].value, 2000, 0);
  const s4 = useCountUp(STATS[3].value, 2000, 0);

  return (
    <section id="about" className="section section--white">
      <div className="container">
        <div className="about grid-split">
          <div className="about__visual">
            <span className="about__ghost" aria-hidden>Navigate Your Future</span>
            <div className="about__metrics grid-2 stagger-children" ref={metricRef}>
              <MetricCard
                label={STATS[0].label}
                value={STATS[0].value}
                suffix={STATS[0].suffix}
                countUpRef={s1.ref}
                displayValue={s1.displayValue}
              />
              <MetricCard
                label={STATS[1].label}
                value={STATS[1].value}
                suffix={STATS[1].suffix}
                countUpRef={s2.ref}
                displayValue={s2.displayValue}
              />
              <MetricCard
                label={STATS[2].label}
                value={STATS[2].value}
                suffix={STATS[2].suffix}
                countUpRef={s3.ref}
                displayValue={s3.displayValue}
              />
              <MetricCard
                label={STATS[3].label}
                value={STATS[3].value}
                suffix={STATS[3].suffix}
                countUpRef={s4.ref}
                displayValue={s4.displayValue}
              />
            </div>
          </div>
          <div className="about__content">
            <span className="section-header__tag">Why Choose Us</span>
            <h2 className="section-header__title">Navigate Your <em>Future</em> With Us</h2>
            <p className="section-header__sub">
              We&apos;ve helped thousands of Indian students reach UK, Malta, Latvia and Georgia.
              Honest counselling, verified universities, and support at every step.
            </p>
            <div className="about__promises stagger-children" ref={promiseRef}>
              {PROMISES.map((p, i) => (
                <article key={i} className="card card--feature">
                  <div className="card__title" style={{ marginBottom: 'var(--space-2)' }}>{p.title}</div>
                  <p className="card__body" style={{ margin: 0 }}>{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
