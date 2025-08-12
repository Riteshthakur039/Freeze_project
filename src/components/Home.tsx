import { useEffect, useState, useRef } from 'react';

// Use 7 images from assets
const HERO_IMAGES = [
  '/src/assets/freeze ig post 3.png',
  '/src/assets/freeze ig post 4.png',
  '/src/assets/freeze ig post 7.png',
  '/src/assets/freeze ig post 8.png',
  '/src/assets/freeze ig post 9.png',
  '/src/assets/freeze ig post 10.png',
  '/src/assets/freeze ig post 11.png',
];
const SLIDE_INTERVAL = 3500; // ms


const Home = ({ style }: { style: React.CSSProperties }) => {
  const [bgIndices, setBgIndices] = useState([0, 1, 2]);
  // No fade state needed
  const [parallax, setParallax] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Background slideshow
  // Staggered slide for each image, always unique, no fade effect
  useEffect(() => {
    const intervals = [0, 1, 2].map((i) =>
      setInterval(() => {
        setBgIndices((prev) => {
          let next = [...prev];
          let tries = 0;
          do {
            next[i] = (next[i] + 1) % HERO_IMAGES.length;
            tries++;
          } while ((next.includes(next[i], i + 1) || next.slice(0, i).includes(next[i])) && tries < HERO_IMAGES.length);
          // If all images are used, fallback to next index
          if (new Set(next).size < 3) {
            for (let j = 0; j < HERO_IMAGES.length; j++) {
              if (!next.includes(j)) {
                next[i] = j;
                break;
              }
            }
          }
          return next;
        });
      }, SLIDE_INTERVAL * (i + 1))
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  // Parallax effect for hero background
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // Only apply parallax if hero is in view
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        // The more you scroll down, the more the background moves up (max 60px)
        const offset = Math.min(Math.max(-rect.top * 0.15, -60), 60);
        setParallax(offset);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative scroll-mt-20 px-0"
      style={style}
    >
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="w-full min-h-screen h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-green-900 via-emerald-900 to-black py-16 px-4 overflow-hidden "
        style={{
          height: '100vh',
          ...('transform' in document.body.style ? { transform: `translateY(${parallax}px)` } : {}),
          willChange: 'transform',
        }}
      >
        {/* Background Slideshow: Responsive - 1 image for mobile, 3 for md+ */}
        <div className="absolute inset-0 w-full h-full min-h-[500px] md:min-h-[700px] pointer-events-none pt-20 md:pt-28 flex flex-row" style={{ willChange: 'transform', height: '100%' }}>
          {/* Mobile: show only the center image, Desktop: show all 3 */}
          <div className="flex-1 h-full min-h-[500px] md:min-h-[700px] bg-center block md:hidden"
            style={{
              backgroundImage: `url('${HERO_IMAGES[bgIndices[1]]}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.5,
              transform: `translateY(${parallax * 0.5}px)`,
              willChange: 'transform',
            }}
          />
          {/* Desktop: show 3 images side by side */}
          {[0, 1, 2].map((i) => {
            const idx = bgIndices[i];
            return (
              <div
                key={HERO_IMAGES[idx] + '-' + i}
                className={`flex-1 h-full min-h-[500px] md:min-h-[700px] bg-center hidden md:block`}
                style={{
                  backgroundImage: `url('${HERO_IMAGES[idx]}')`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  opacity: 0.32 + 0.18 * (2 - i),
                  transform: `translateY(${parallax * 0.5}px)`,
                  willChange: 'transform',
                }}
              />
            );
          })}
          {/* Overlay for readability and style */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-green-900/20 to-transparent" style={{zIndex: 100}}></div>
        </div>
        {/* <div className="relative z-20 flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-4 text-center text-transparent bg-gradient-to-r from-green-300 via-green-400 to-emerald-300 bg-clip-text animate-fade-in hero-glow">
            Freeze
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-green-100 max-w-2xl text-center animate-fade-in delay-200 font-semibold drop-shadow-lg">
            The Ultimate 3D Cold Drink Experience
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-emerald-200 max-w-2xl text-center animate-fade-in delay-200 px-4 drop-shadow">
            Welcome to Freeze, where refreshment meets innovation! Discover the coolest drinks, vibrant flavors, and a chill like never before.
          </p>
          <a href="#contact" className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xl font-bold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-green-500/50 select-none transform-gpu animate-fade-in delay-200">
            Share Your Chill
          </a>
        </div> */}
        <style>{`.hero-glow {
            text-shadow:
              0 0 32px #4ade80,
              0 1px 0 #fff,
              0 8px 32px #4ade80,
              0 0px 100px #4ade80;
          }
        `}</style>
      </div>

      {/* Our Story Card Section */}
      <div className="mt-12 w-full max-w-7xl mx-auto py-12 px-4 flex justify-center">
        <a
          href="/about"
          className="group block max-w-xl w-full bg-gradient-to-br from-green-900 via-emerald-900 to-black rounded-3xl shadow-2xl border-2 border-green-400/40 p-8 md:p-12 text-center transition-transform duration-300 hover:scale-105 hover:shadow-green-400/30 cursor-pointer relative overflow-hidden"
          style={{ textDecoration: 'none' }}
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-400/10 rounded-full blur-2xl z-0"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-green-300 via-green-400 to-emerald-300 bg-clip-text drop-shadow animate-fade-in">Our Story</h2>
          <p className="text-lg sm:text-xl text-green-100 font-semibold leading-relaxed mb-4 animate-fade-in delay-200">
            Discover how FREEZƎ started in Mohali, Punjab, and our mission to deliver guilt-free, sugar-free refreshment. Learn about our journey, values, and what makes us different.
          </p>
          <span className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 text-white text-lg font-bold shadow-lg group-hover:scale-105 transition-all duration-300 group-hover:shadow-green-500/50 select-none transform-gpu animate-fade-in delay-200">
            Read Our Story
          </span>
        </a>
      </div>

      {/* Comparison Section - Responsive: Smaller on mobile, full width on desktop */}
      <div className="w-full flex flex-col gap-0 py-0 px-0 items-center">
        {/* Mobile: Smaller width */}
        <div className="flex md:hidden w-[90vw] max-w-md h-[60vh] min-h-[320px] items-center justify-center overflow-hidden rounded-2xl shadow-xl border-2 border-green-400/30 mb-4">
          <img 
            src="/src/assets/freeze w3.png" 
            alt="FREEZƎ Drink" 
            className="w-full h-full object-contain object-center transition-transform duration-700 hover:scale-105 bg-black" 
            style={{ maxHeight: '60vh' }}
          />
        </div>
        <div className="flex md:hidden w-[90vw] max-w-md h-[60vh] min-h-[320px] items-center justify-center overflow-hidden rounded-2xl shadow-xl border-2 border-green-400/30">
          <img 
            src="/src/assets/freeze web1.png" 
            alt="Regular Drink" 
            className="w-full h-full object-contain object-center transition-transform duration-700 hover:scale-105 bg-black" 
            style={{ maxHeight: '60vh' }}
          />
        </div>
        {/* Desktop: Full width */}
        <div className="hidden md:flex flex-col w-full">
          <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <img 
              src="/src/assets/freeze w3.png" 
              alt="FREEZƎ Drink" 
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
              style={{ maxHeight: '100vh' }}
            />
          </div>
          <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <img 
              src="/src/assets/freeze web1.png" 
              alt="Regular Drink" 
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
              style={{ maxHeight: '100vh' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
