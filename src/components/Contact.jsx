import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import CustomSelect from './CustomSelect';
import { CONTACT_ITEMS, DESTINATIONS } from '../constants/data';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  destination: '',
  course: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState('idle');
  const detailsRef = useScrollReveal({ direction: 'left', staggerChildren: 60 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validate = () => {
    const next = {};
    const required = ['firstName', 'lastName', 'phone', 'email', 'destination', 'course', 'message'];
    required.forEach((key) => {
      if (!String(formData[key]).trim()) next[key] = true;
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitState('loading');
    setTimeout(() => {
      setSubmitState('success');
      setFormData(INITIAL_FORM);
      setErrors({});
    }, 1500);
  };

  const btnClasses = ['btn', 'btn--primary', 'btn--lg', 'btn--full'];
  if (submitState === 'loading') btnClasses.push('btn--loading');
  if (submitState === 'success') btnClasses.push('btn--success');
  if (submitState === 'error') btnClasses.push('btn--error');

  return (
    <section id="contact" className="section section--white">
      <div className="container">
        <div className="contact grid-split--contact">
          <div className="contact__details stagger-children" ref={detailsRef}>
            <span className="section-header__tag">Get in Touch</span>
            <h2 className="section-header__title">Contact Us</h2>
            <p className="section-header__sub">
              Reach out for a free counselling session. We&apos;ll help you find the right programme and destination.
            </p>
            <div className="contact__items-grid">
              {CONTACT_ITEMS.map((item, i) => (
                <div key={i} className="contact__item">
                  <div className="contact__icon">{item.icon}</div>
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact__form-panel">
            <h3 className="contact__form-title">Request Free Counselling</h3>
            <form onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'input-error' : ''}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'input-error' : ''}
                  />
                </div>
              </div>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'input-error' : ''}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                  />
                </div>
              </div>
              <div className="contact__field">
                <label id="destination-label" htmlFor="destination">Preferred Destination</label>
                <CustomSelect
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Select a country"
                  options={DESTINATIONS.map((d) => ({ value: d.name, label: d.name }))}
                  className={errors.destination ? 'input-error' : ''}
                  aria-invalid={errors.destination}
                />
              </div>
              <div className="contact__field">
                <label htmlFor="course">Course / Programme</label>
                <input
                  id="course"
                  name="course"
                  type="text"
                  placeholder="e.g. MBBS, MBA, BSc Nursing"
                  value={formData.course}
                  onChange={handleChange}
                  className={errors.course ? 'input-error' : ''}
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your goals and background..."
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'input-error' : ''}
                />
              </div>
              <button
                type="submit"
                className={btnClasses.join(' ')}
                disabled={submitState === 'loading' || submitState === 'success'}
                style={{ minHeight: '52px' }}
              >
                {submitState === 'idle' && 'Submit'}
                {submitState === 'loading' && (
                  <>
                    <span className="contact__spinner" aria-hidden />
                    Submitting...
                  </>
                )}
                {submitState === 'success' && '✓ Submitted!'}
                {submitState === 'error' && 'Try Again'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
