export default function HeroSplit({ whatsappNumber = "919876543210" }) {
  const waUrl = `https://wa.me/${whatsappNumber}`;
  return (
    <div className="hero-split">
      <div className="hero-left">
        <div className="tag animate">European Education Specialists</div>
        <h2 className="animate delay-1">Study in Europe at<br /><em>Affordable Costs</em></h2>
        <div className="price-badge animate delay-1">💶 Tuition from ₹3 Lakhs in Latvia</div>
        <p className="animate delay-2">European education opportunities with high European standards, globally recognised degrees and access to 29 Schengen countries.</p>
        <div className="honest-badge animate delay-2">Honest, transparent counselling with no false promises.</div>
        <div className="hero-btns animate delay-3">
          <a href="#contact" className="btn-blue">Free Counselling</a>
          <a href={waUrl} className="btn-whatsapp">
            <span>💬</span> WhatsApp Now
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-right-placeholder">
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
            background: 'linear-gradient(0deg, #1a3a5c, #2a6496, transparent)'
          }} />
          <div style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, textAlign: 'center', fontSize: '60px' }}>🏙️</div>
          <div style={{ position: 'absolute', top: '30px', right: '30px', fontSize: '30px' }}>☀️</div>
        </div>
        <div className="hero-right-overlay">
          <strong>Access 29 Schengen Countries</strong>
          <p>Study in one country, work in another — Germany, France, Italy, Switzerland &amp; more.</p>
        </div>
      </div>
    </div>
  );
}
