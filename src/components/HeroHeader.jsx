import { SITE } from '../constants/data';

export default function HeroHeader() {
  return (
    <header className="hero" style={{ backgroundImage: 'url(/Coastal%20Cityscape%20View.avif)' }}>
      <div className="hero__card container">
        <div className="hero__logo-wrap">
          <img src={SITE.logo} alt={SITE.name} className="hero__logo-img" />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">{SITE.name}</h1>
          <p className="hero__tagline">{SITE.tagline}</p>
        </div>
        <div className="hero__blob" aria-hidden />
      </div>
    </header>
  );
}
