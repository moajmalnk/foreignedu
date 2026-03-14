export default function GeorgiaMedical() {
  return (
    <section id="georgia" className="georgia-section">
      <div className="container">
        <div className="georgia-inner">
          <div className="georgia-left">
            <div className="tag">Medical Excellence</div>
            <h2>Medical Career in Georgia</h2>
            <p>Georgia is a leading destination for international medical students, offering premium education with advanced clinical exposure. Our programs are tailored to meet global healthcare standards.</p>
            <div className="program-cards">
              <div className="program-card">
                <div className="program-card-header">
                  <div className="prog-num">01</div>
                  <h3>MBBS Program</h3>
                </div>
                <ul>
                  <li>6-year English medium curriculum</li>
                  <li>WHO and NMC recognised universities</li>
                  <li>Advanced anatomy and simulation training</li>
                  <li>Seamless pathways to USMLE and PLAB exams</li>
                </ul>
              </div>
              <div className="program-card">
                <div className="program-card-header">
                  <div className="prog-num">02</div>
                  <h3>Nursing Program</h3>
                </div>
                <ul>
                  <li>4-year clinical excellence degree</li>
                  <li>Aligned with EU Healthcare directives</li>
                  <li>Hands-on practice in multi-specialty clinics</li>
                  <li>Global accreditation and licensing assistance</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="georgia-right">
            <div className="georgia-stat-grid">
              <div className="g-stat">
                <div className="g-stat-num">6</div>
                <div className="g-stat-label">Year Program</div>
              </div>
              <div className="g-stat">
                <div className="g-stat-num">WHO</div>
                <div className="g-stat-label">Recognised</div>
              </div>
              <div className="g-stat">
                <div className="g-stat-num">NMC</div>
                <div className="g-stat-label">Approved</div>
              </div>
              <div className="g-stat">
                <div className="g-stat-num">100%</div>
                <div className="g-stat-label">English Medium</div>
              </div>
            </div>
            <div className="georgia-desc">
              <p>Tbilisi, Georgia&apos;s capital, is a vibrant cosmopolitan city offering an affordable student lifestyle with direct flights from India. All universities are WHO-listed and recognised by the National Medical Commission (NMC) of India.</p>
            </div>
            <div style={{ marginTop: '24px' }}>
              <a href="#contact" className="btn-blue" style={{ display: 'inline-block', marginTop: '8px' }}>Apply for MBBS / Nursing →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
