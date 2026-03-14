const destinations = [
  {
    flag: '🇬🇧',
    bgText: 'UK',
    highlight: 'Global Rankings',
    title: 'United Kingdom',
    desc: 'Globally recognised education with a rich history of academic excellence and research innovation. Access world-class universities and vibrant cultural experiences.',
    href: '#contact'
  },
  {
    flag: '🇲🇹',
    bgText: 'Malta',
    highlight: 'English Medium',
    title: 'Malta',
    desc: 'English-taught European degrees in a safe, vibrant island nation with world-class facilities and a Mediterranean lifestyle.',
    href: '#contact'
  },
  {
    flag: '🇱🇻',
    bgText: 'Latvia',
    highlight: 'From ₹3 Lakhs',
    highlightStyle: { background: 'rgba(200,150,10,.1)', color: 'var(--gold)' },
    imgStyle: { background: 'linear-gradient(135deg, #0e3fa8, #2563eb)' },
    title: 'Latvia',
    desc: 'Budget-friendly Europe with tuition fees starting from ₹3 lakhs INR, offering high European standards and a strong focus on technical and medical sciences.',
    href: '#contact'
  },
  {
    flag: '🇬🇪',
    bgText: 'Georgia',
    highlight: 'MBBS & Nursing',
    highlightStyle: { background: 'rgba(220,38,38,.08)', color: '#dc2626' },
    imgStyle: { background: 'linear-gradient(135deg, #7c2d12, #c2410c)' },
    title: 'Georgia',
    desc: 'MBBS & Nursing programs providing premium healthcare training and extensive clinical exposure. WHO and NMC recognised universities.',
    href: '#georgia'
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="destinations-section">
      <div className="container">
        <div className="tag">Study Destinations</div>
        <h2 className="section-heading">Explore Our Featured<br />European Destinations</h2>
        <p className="section-sub">Four distinct study destinations, each offering unique advantages tailored to your academic and career goals.</p>
        <div className="dest-grid">
          {destinations.map((d, i) => (
            <div key={i} className="dest-card">
              <div className="dest-card-img" style={d.imgStyle || {}}>
                {d.flag}
                <div className="dest-bg-text">{d.bgText}</div>
              </div>
              <div className="dest-card-body">
                <div className="dest-highlight" style={d.highlightStyle || {}}>{d.highlight}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <a href={d.href} className="dest-link">Learn More <span>→</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
