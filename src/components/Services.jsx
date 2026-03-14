const services = [
  {
    icon: '🎯',
    title: 'Career Counselling & Profile Evaluation',
    desc: 'We analyse your academic background and professional goals to map out the most suitable education pathways in Europe.'
  },
  {
    icon: '📋',
    title: 'Visa Documentation & Interview Prep',
    desc: 'Navigate complex visa requirements with expert documentation support and thorough mock interview preparation.'
  },
  {
    icon: '🏫',
    title: 'University & Course Selection',
    desc: 'Identify top-tier institutions across the UK, Malta, Georgia, and Latvia that fit your budget and career aspirations perfectly.'
  },
  {
    icon: '✈️',
    title: 'Post-Visa Guidance',
    desc: "We don't stop at the visa. Get support with accommodation, travel arrangements, and local orientation in your new city."
  },
  {
    icon: '📝',
    title: 'Application & Offer Letter Assistance',
    desc: 'We streamline the application process, ensuring all documentation is accurate to secure your offer letter promptly.'
  },
  {
    icon: '💰',
    title: 'Scholarship & Financial Guidance',
    desc: 'Identify scholarships, grants and financial aid opportunities to make your European dream even more affordable.'
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="tag">What We Offer</div>
        <h2 className="section-heading">Our Comprehensive Services</h2>
        <p className="section-sub">Expert guidance tailored for your journey to affordable European education, from first consultation to arrival.</p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
