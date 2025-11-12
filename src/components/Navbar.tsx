
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-yrwen-dark-charcoal/80 backdrop-blur-lg' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            Yrwen Technology
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-yrwen-purple transition-colors">Sobre</a>
            <a href="#services" className="text-white hover:text-yrwen-purple transition-colors">Serviços</a>
            <a href="#benefits" className="text-white hover:text-yrwen-purple transition-colors">Vantagens</a>
            <a href="#testimonials" className="text-white hover:text-yrwen-purple transition-colors">Depoimentos</a>
            <a href="https://decoracoes.yrwentechnology.com.br" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yrwen-purple transition-colors">Decorações</a>
            <a href="http://ytech.yrwentechnology.com.br/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yrwen-purple transition-colors">Y-Tech Internet 5G</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-yrwen-purple to-yrwen-blue text-white hover:opacity-90 transition-opacity">
              Fale Conosco
            </a>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-yrwen-dark-charcoal/95 rounded-lg animate-fade-in-up">
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="#about" 
                className="text-white hover:text-yrwen-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-yrwen-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#benefits" 
                className="text-white hover:text-yrwen-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Vantagens
              </a>
              <a 
                href="#testimonials" 
                className="text-white hover:text-yrwen-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="https://decoracoes.yrwentechnology.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yrwen-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Decorações
              </a>
              <a 
                href="http://ytech.yrwentechnology.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yrwen-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Y-Tech Internet 5G
              </a>
              <a 
                href="#contact"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-yrwen-purple to-yrwen-blue text-white hover:opacity-90 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
