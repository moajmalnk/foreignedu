import { SITE } from './constants/data';
import Navbar from './components/Navbar';
import HeroHeader from './components/HeroHeader';
import Services from './components/Services';
import Destinations from './components/Destinations';
import GeorgiaMedical from './components/GeorgiaMedical';
import StudentFirst from './components/StudentFirst';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroHeader />
        <Services />
        <Destinations />
        <GeorgiaMedical />
        <StudentFirst />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-wa"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  );
}

export default App;
