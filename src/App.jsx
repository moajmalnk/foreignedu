import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroHeader from './components/HeroHeader';
import HeroSplit from './components/HeroSplit';
import SchengenBar from './components/SchengenBar';
import Services from './components/Services';
import Destinations from './components/Destinations';
import GeorgiaMedical from './components/GeorgiaMedical';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CtaBand from './components/CtaBand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    const selectors = '.service-card, .dest-card, .testi-card, .about-metric, .program-card';
    document.querySelectorAll(selectors).forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <HeroHeader />
      <HeroSplit />
      <SchengenBar />
      <Services />
      <Destinations />
      <GeorgiaMedical />
      <About />
      <Testimonials />
      <CtaBand />
      <Contact />
      <Footer />
      <StickyWhatsApp />
    </>
  );
}

export default App;
