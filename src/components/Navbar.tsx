import { memo, useState } from 'react';
import freezeLogo from '/assets/freeze logo.png';
import { useNavigate } from 'react-router-dom';

type Section = {
  id: "home" | "about" | "contact" | "faq";
  label: string;
};

interface NavbarProps {
  sections: Section[];
  scrollToSection: (id: Section['id']) => void;
}


const Navbar = memo(({ sections, scrollToSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (id: Section['id']) => {
    if (id === 'contact') {
      navigate('/contact');
    } else if (id === 'faq') {
      navigate('/faq');
    } else if (id === 'about') {
      navigate('/about');
    } else if (id === 'home') {
      // Always go to homepage, then scroll to home section
      navigate('/');
      setTimeout(() => {
        scrollToSection('home');
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col justify-between bg-black/30 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 min-h-[80px]">
        <div
          className="select-none animate-fade-in cursor-pointer"
          onClick={() => handleSectionClick('home')}
        >
          <img
            src={freezeLogo}
            alt="Freeze Logo"
            className="h-16 w-30 object-contain drop-shadow-lg"
            style={{ borderRadius: '12px' }}
          />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-green-900/20 rounded-lg transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-green-400 mb-1.5 transition-transform duration-200 ease-in-out"
            style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}
          ></div>
          <div className="w-6 h-0.5 bg-green-400 mb-1.5 transition-opacity duration-200 ease-in-out"
            style={{ opacity: isMenuOpen ? 0 : 1 }}
          ></div>
          <div className="w-6 h-0.5 bg-green-400 transition-transform duration-200 ease-in-out"
            style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}
          ></div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSectionClick(s.id)}
              className="relative px-4 py-2 text-lg font-semibold text-white hover:text-green-400 transition-colors duration-300 after:block after:h-0.5 after:bg-green-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent rounded font-poppins uppercase"
              style={{ letterSpacing: "0.1em" }}
            >
              {s.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 border-t border-green-500/20' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-2 px-4 py-4">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSectionClick(s.id)}
              className="w-full text-left px-4 py-3 text-lg font-semibold text-white hover:text-green-400 hover:bg-green-900/20 rounded-lg transition-colors duration-200 font-poppins uppercase"
            >
              {s.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
