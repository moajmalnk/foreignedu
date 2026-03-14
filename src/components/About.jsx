const promises = [
  {
    title: 'Transparent & Honest Counselling',
    desc: 'No false promises, no pushy tactics. We give you a clear, realistic picture of your options and costs upfront.'
  },
  {
    title: 'Budget-Friendly Pathways',
    desc: 'Latvia from ₹3 lakhs, Georgia for MBBS — we specialise in finding high-quality, cost-effective European options.'
  },
  {
    title: 'End-to-End Support',
    desc: 'From profile evaluation to post-arrival orientation — we stay with you throughout your entire journey abroad.'
  },
  {
    title: 'Deep European Expertise',
    desc: 'Offices in London and Tbilisi give us on-the-ground knowledge of UK, Malta, Latvia and Georgia pathways.'
  }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-metric-grid">
              <div className="about-metric">
                <div className="about-metric-num">5K+</div>
                <div className="about-metric-label">Students Placed</div>
              </div>
              <div className="about-metric">
                <div className="about-metric-num">98%</div>
                <div className="about-metric-label">Visa Success</div>
              </div>
              <div className="about-metric">
                <div className="about-metric-num">4</div>
                <div className="about-metric-label">Countries Served</div>
              </div>
              <div className="about-metric">
                <div className="about-metric-num">₹3L</div>
                <div className="about-metric-label">Starting Tuition</div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <div className="tag">Student-First Expertise</div>
            <h2 className="section-heading">We Bridge Aspirations &amp; World-Class Degrees</h2>
            <p className="section-sub">At Foreign Education Consultancy, our mission is built on transparency and integrity, specialising in affordable study pathways.</p>
            <div className="about-promise-list">
              {promises.map((p, i) => (
                <div key={i} className="promise-item">
                  <div className="promise-dot" />
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
