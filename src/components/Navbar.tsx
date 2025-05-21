
import React, { useState, useEffect } from 'react';
import { Bird, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Bird className="h-8 w-8 text-secondary" />
            <span className="ml-2 text-white font-poppins font-bold text-xl">Urutau Security</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-secondary transition-colors font-medium">Sobre</button>
              <button onClick={() => scrollToSection('technologies')} className="text-white hover:text-secondary transition-colors font-medium">Tecnologias</button>
              <button onClick={() => scrollToSection('cmd-simulation')} className="text-white hover:text-secondary transition-colors font-medium">Terminal</button>
              <button onClick={() => scrollToSection('objective')} className="text-white hover:text-secondary transition-colors font-medium">Objetivo</button>
              <button onClick={() => scrollToSection('disclaimer')} className="text-white hover:text-secondary transition-colors font-medium">Aviso Legal</button>
              <button onClick={() => scrollToSection('author')} className="text-white hover:text-secondary transition-colors font-medium">Autor</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-background/95 backdrop-blur-md md:hidden py-4 px-2">
          <div className="flex flex-col space-y-4 px-4">
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-secondary py-2 text-center">Sobre</button>
            <button onClick={() => scrollToSection('technologies')} className="text-white hover:text-secondary py-2 text-center">Tecnologias</button>
            <button onClick={() => scrollToSection('cmd-simulation')} className="text-white hover:text-secondary py-2 text-center">Terminal</button>
            <button onClick={() => scrollToSection('objective')} className="text-white hover:text-secondary py-2 text-center">Objetivo</button>
            <button onClick={() => scrollToSection('disclaimer')} className="text-white hover:text-secondary py-2 text-center">Aviso Legal</button>
            <button onClick={() => scrollToSection('author')} className="text-white hover:text-secondary py-2 text-center">Autor</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
