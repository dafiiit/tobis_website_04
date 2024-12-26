import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset = Math.min(scrollPosition * 0.2, 100); // Begrenzt die Bewegung auf 50px

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://asc-images.forward-publishing.io/2024/05/30/94423ee3-65c3-4629-9f0a-36af8390a805.jpeg?rect=0%2C50%2C3195%2C2130&w=1024&auto=compress%2Cformat"
          alt="City Hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4269FD]/95 to-[#4269FD]/10" />
      </div>

      <div
        className="absolute opacity-50"
        style={{
          width: '200px', // Ursprüngliche Größe des Wappens
          height: '200px',
          bottom: `${parallaxOffset}px`,
          right: '10px',
          transform: 'scale(4)', // Vergrößert das Wappen um das Vierfache
        }}
      >
        <img
          src="src/data/warburg_lilie.svg"
          alt="Wappen"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 md:p-12 max-w-4xl mt-40">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
            Tobias Scherf
          </h1>
          <p className="text-xl md:text-2xl text-white font-light mb-8 text-center">
            Unser Bürgermeister für alle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#vision"
              className="inline-block px-8 py-3 btn-secondary text-white rounded-full hover:btn-secondary:hover transition-colors"
            >
              Meine Vision
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-blue-900 rounded-full hover:bg-gray-100 transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
