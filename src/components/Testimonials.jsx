const testimonials = [
  {
    quote: 'The budget pathway for Latvia was explained so clearly. Starting from ₹3 lakhs, it was the perfect affordable pathway for us with zero false promises.',
    name: 'Arjun K.',
    role: 'Parent · Latvia Pathway 🇱🇻',
    initial: 'A'
  },
  {
    quote: 'Securing my MBBS seat in Georgia was a seamless experience. They provided honest, transparent guidance through every step of the visa process.',
    name: 'Sneha Reddy',
    role: 'MBBS Student · Georgia 🇬🇪',
    initial: 'S'
  },
  {
    quote: 'Transparent counselling is hard to find. Their student-first approach and budget guidance for Malta made my European dream a reality.',
    name: 'Vikram Singh',
    role: 'Masters Student · Malta 🇲🇹',
    initial: 'V'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="tag">Student &amp; Parent Stories</div>
        <h2 className="section-heading">Success Stories</h2>
        <p className="section-sub">Real students, real results — honest guidance that changed lives.</p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-quote">&ldquo;</div>
              <blockquote>{t.quote}</blockquote>
              <div className="testi-author">
                <div className="testi-avatar">{t.initial}</div>
                <div className="testi-author-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
