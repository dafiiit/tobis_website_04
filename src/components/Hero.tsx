import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Parallax-Effekt für die Lilie, sanft und subtil
  const parallaxOffset = Math.min(scrollPosition * 0.15, 60);
  const parallaxRight = 120 - Math.min(scrollPosition * 0.1, 40); // Start bei 120px, bewegt sich max. 40px nach links

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(to top, #4269FD22 0%, #4269FD11 60%, transparent 100%)',
      }}
    >
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://asc-images.forward-publishing.io/2024/05/30/94423ee3-65c3-4629-9f0a-36af8390a805.jpeg?rect=0%2C50%2C3195%2C2130&w=1024&auto=compress%2Cformat"
          alt="Tobias"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'brightness(0.92)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4269FD44] to-transparent" />
      </div>

      {/* Lilie mit Parallax-Scroll, kein Springen */}
      <div
        className="absolute hidden md:block"
        style={{
          width: '200px',
          height: '200px',
          bottom: `${parallaxOffset}px`,
          right: `${parallaxRight}px`,
          transform: 'scale(4)',
          zIndex: 2,
          opacity: 0.5,
          transition: 'bottom 0.2s cubic-bezier(0.23, 1, 0.32, 1), right 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <img
          src="/warburg_lilie.svg"
          alt="Wappen"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Card mit Text und Buttons */}
      <div className="relative z-10 w-full max-w-2xl flex justify-center">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 animate-fade-in-up mt-64">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-5 text-center">
            Tobias Scherf
          </h1>
          <p className="text-gray-700 text-lg md:text-2xl mb-8 text-center">
            Unser Bürgermeister für Warburg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('vision')}
              className="inline-block px-8 py-3 bg-blue-700 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition-colors text-center"
            >
              Meine Vision
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-block px-8 py-3 bg-white text-blue-900 rounded-full font-semibold shadow hover:bg-gray-100 transition-colors border border-blue-700 text-center"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
      {/* Animationen */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </section>
  );
}