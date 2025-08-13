const galleryImages = [
  {
    url: '/assets/freeze ig post 3.png',
    text: 'Sip the Chill, Feel the Thrill',
  },
  {
    url: '/assets/freeze ig post 4.png',
    text: 'Zero Sugar, Infinite Vibes',
  },
  {
    url: '/assets/freeze ig post 7.png',
    text: 'Refreshment, Redefined',
  },
  {
    url: '/assets/freeze ig post 8.png',
    text: 'Drink Different. Live Different.',
  },
  {
    url: '/assets/freeze ig post 9.png',
    text: 'Cooler Than Ever',
  },
  {
    url: '/assets/freeze ig post 10.png',
    text: 'Unleash the Freeze',
  },
  {
    url: '/assets/freeze ig post 11.png',
    text: 'Pure Mojito Magic',
  },
];

import React, { useRef, useEffect, useState } from 'react';

const About = ({ style }: { style: React.CSSProperties }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current || !imgRef.current) return;
      const textRect = textRef.current.getBoundingClientRect();
      const imgRect = imgRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // If either is in view, trigger animation
      if (
        (textRect.top < windowHeight - 100 && textRect.bottom > 100) ||
        (imgRect.top < windowHeight - 100 && imgRect.bottom > 100)
      ) {
        setInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section
        id="about"
        className="min-h-[70vh] flex flex-col justify-center items-center relative scroll-mt-20 px-0 py-20 bg-gradient-to-br from-green-950/80 via-black/80 to-emerald-950/80"
        style={style}
      >
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10 pointer-events-none"></div>
  <div className="relative z-10 w-full max-w-10xl mx-auto flex flex-col md:flex-row items-center gap-12 py-16 px-4">
          <div
            ref={textRef}
            className={`flex flex-col items-start max-w-2xl w-full transition-all duration-1000 ease-out  rounded-3xl shadow-2xl p-8 md:p-12
              ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
            style={{ boxShadow: '0 8px 40px 0 rgba(16,185,129,0.15)' }}
          >
            <h2 className="text-5xl sm:text-7xl font-extrabold mb-8 text-transparent bg-gradient-to-r from-green-300 via-green-400 to-emerald-300 bg-clip-text drop-shadow-[0_10px_30px_rgba(74,222,128,0.7)] animate-fade-in text-left" style={{
              textShadow: "0 4px 32px #4ade80, 0 1px 0 #fff, 0 8px 32px #4ade80, 0 0px 100px #4ade80"
            }}>OUR STORY</h2>
            <p className="text-lg sm:text-xl text-green-100 font-semibold leading-relaxed mb-6 text-left animate-fade-in delay-200" style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 2px 8px #134e4a55' }}>
              At FREEZƎ, we believe refreshment should be as guilt-free as it is delicious. Born in the vibrant city of Mohali, Punjab, our mission is simple — to offer a healthier, fresher way to enjoy your favorite drinks.
            </p>
            <p className="text-base sm:text-lg text-emerald-200 leading-relaxed text-left animate-fade-in delay-200" style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 2px 8px #134e4a33' }}>
              We proudly craft Sugar-Free and 0-Calorie Virgin Mojito beverages that deliver the same crisp, satisfying taste you love, without the sugar or unnecessary calories. Every bottle of FREEZƎ is made with care, using premium ingredients and a unique formulation that keeps the flavor bold, refreshing, and perfectly balanced.<br /><br />
              Our iconic FREEZƎ logo represents more than just chill — it’s a symbol of our promise to keep things fresh, different, and uncompromising on quality. Guided by our tagline, “Drink Different,” we’re here to inspire a shift toward better beverage choices, proving that healthy can also be exciting.<br /><br />
              From local shelves to your hands, our goal is to make FREEZƎ your go-to drink for every occasion — whether it’s a sunny afternoon, a festive gathering, or simply a moment of pure refreshment.<br /><br />
              So here’s to a cooler, lighter, and healthier way to quench your thirst. Here’s to FREEZƎ — the drink that changes the game.
            </p>
          </div>
          <div
            ref={imgRef}
            className={`flex justify-center items-center w-full h-full transition-all duration-1000 ease-out
              ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
          >
            <img
              src="/assets/freeze ig post 11.png"
              alt="Freeze Story Visual"
              className="w-full h-full object-cover object-center rounded-3xl shadow-2xl"
              style={{ minHeight: '350px', minWidth: '300px', maxHeight: '880px', maxWidth: '100%' }}
            />
          </div>
        </div>

      </section>

    {/* Gallery Section */}
    <section className="relative w-full bg-black/40 py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-green-200 text-center mb-12 animate-fade-in">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className={`relative group rounded-3xl overflow-hidden shadow-2xl border-2 border-green-400/30 bg-gradient-to-br from-green-900 via-emerald-900 to-black cursor-pointer transition-transform duration-500 ${
              idx % 3 === 0 ? 'hover:scale-105' : idx % 3 === 1 ? 'hover:rotate-2 hover:scale-110' : 'hover:-rotate-2 hover:scale-110'
            }`}
            style={{ minHeight: 220 }}
          >
            <img
              src={img.url}
              alt={img.text}
              className={`w-full h-56 object-cover object-center transition-all duration-700 group-hover:blur-sm group-hover:scale-110 ${
                idx % 4 === 0 ? 'group-hover:grayscale' : idx % 4 === 1 ? 'group-hover:brightness-75' : idx % 4 === 2 ? 'group-hover:contrast-125' : 'group-hover:saturate-200'
              }`}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60">
              <span className="text-2xl font-bold text-green-200 drop-shadow-lg animate-fade-in text-center px-4">{img.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>

);
}

export default About;
