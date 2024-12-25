import React from 'react';
import { Menu, Facebook, Linkedin, Instagram, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary">
              Über mich
            </a>
            <a href="#vision" className="text-gray-700 hover:text-primary">
              Vision
            </a>
            <a href="#program" className="text-gray-700 hover:text-primary">
              Programm
            </a>
            <a href="#news" className="text-gray-700 hover:text-primary">
              Aktuelles
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary">
              Kontakt
            </a>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/BuergermeisterHansestadtWarburg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/tobias-scherf-0a311986/?originalSubdomain=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/tobischerf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Über mich
            </a>
            <a
              href="#vision"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Vision
            </a>
            <a
              href="#program"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Programm
            </a>
            <a
              href="#news"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Aktuelles
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
