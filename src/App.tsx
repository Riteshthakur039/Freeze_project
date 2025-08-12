import { useRef, useCallback } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Feedback";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';


type Section = {
  id: "home" | "about" | "contact" | "faq";
  label: string;
};

const sections: Section[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "Our Story" },
  { id: "contact", label: "Contact Us" },
  { id: "faq", label: "FAQs" },
];

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Removed scrollY and scroll handler: no tilt/3D effect

  // Remove 3D tilt/rotate effect: all sections get no transform
  const getSectionStyle = useCallback(
    (_index: number) => ({
      transform: "none",
      transition: "none",
    }),
    []
  );

  // Improved scroll behavior
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80;
      window.scrollTo({
        top: el.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-black text-white font-sans antialiased"
    >
      <Navbar sections={sections} scrollToSection={scrollToSection} />

      <Routes>
        <Route path="/" element={<Home style={getSectionStyle(0)} />} />
        <Route path="/about" element={<About style={getSectionStyle(1)} />} />
        <Route path="/contact" element={<Contact style={{}} />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <Footer />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(.4,2,.6,1) both;
          will-change: transform, opacity;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default App;