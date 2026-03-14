export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our counsellor will contact you within 24 hours. 🎓');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-details">
            <div className="tag">Get in Touch</div>
            <h2 className="section-heading">Contact Details</h2>
            <p>Reach out to us for a free, no-obligation counselling session. We respond within 24 hours.</p>
            <div className="contact-item">
              <div className="c-icon">📞</div>
              <div>
                <strong>Call Us</strong>
                <span>+91 00000 00000</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon">✉️</div>
              <div>
                <strong>Email</strong>
                <span>info@foreigneducation.com</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon">📍</div>
              <div>
                <strong>London Hub</strong>
                <span>15 Wigmore St, Marylebone<br />London W1U 1PF, United Kingdom</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon">🏥</div>
              <div>
                <strong>Tbilisi Operations</strong>
                <span>MBBS &amp; Nursing Specialists<br />Tbilisi, Georgia</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon">💬</div>
              <div>
                <strong>WhatsApp Support</strong>
                <span>+91 00000 00000<br />Preferred for quick response &amp; personalised guidance.</span>
              </div>
            </div>
          </div>
          <div className="contact-form-box">
            <h3>Book Free Counselling</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="fg">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" type="text" placeholder="Your first name" />
                </div>
                <div className="fg">
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" placeholder="Your last name" />
                </div>
              </div>
              <div className="form-row">
                <div className="fg">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className="fg">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@email.com" />
                </div>
              </div>
              <div className="fg">
                <label htmlFor="destination">Preferred Destination</label>
                <select id="destination">
                  <option value="">Select a country</option>
                  <option>United Kingdom 🇬🇧</option>
                  <option>Malta 🇲🇹</option>
                  <option>Latvia 🇱🇻</option>
                  <option>Georgia (MBBS/Nursing) 🇬🇪</option>
                </select>
              </div>
              <div className="fg">
                <label htmlFor="program">Program / Course</label>
                <input id="program" type="text" placeholder="e.g. MBBS, Nursing, MBA, Engineering..." />
              </div>
              <div className="fg">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us about your academic background, budget or any queries..." />
              </div>
              <button type="submit" className="submit-btn">
                Request Free Counselling →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
