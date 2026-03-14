export default function HeroHeader() {
  return (
    <header className="hero">
      <div className="hero__card container">
        <div className="hero__logo-wrap">
          <div className="hero__logo">
            <div className="hero__logo-row">♛</div>
            <div className="hero__logo-row hero__logo-row--icons">📖 🎓</div>
            <div className="hero__logo-divider" />
            <div className="hero__logo-row hero__logo-row--icons">🏛️ 🌾</div>
            <div className="hero__logo-ribbon">EDUCATION</div>
          </div>
        </div>
        <div className="hero__content">
          <h1 className="hero__title">Foreign Education Consultancy</h1>
          <p className="hero__tagline">Navigate Your Future With Us</p>
        </div>
        <div className="hero__blob" aria-hidden />
      </div>
    </header>
  );
}
