import React from 'react';
import { Menu, Facebook, Linkedin, Instagram, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    navigate('/');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('vision')} className="text-gray-700 hover:text-primary">
              Vision
            </button>
            <button onClick={() => scrollToSection('milestones')} className="text-gray-700 hover:text-primary">
              Meilensteine
            </button>
            <button onClick={() => scrollToSection('program')} className="text-gray-700 hover:text-primary">
              Wahlprogramm
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary">
              Über mich
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary">
              Kontakt
            </button>

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
            <button
              onClick={() => scrollToSection('vision')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection('milestones')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
            >
              Meilensteine
            </button>
            <button
              onClick={() => scrollToSection('program')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
            >
              Wahlprogramm
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
