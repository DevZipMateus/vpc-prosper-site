import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Localização', id: 'location' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="bg-navy text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <a href="tel:21967076166" className="flex items-center gap-1 hover:text-gold transition-colors">
              <Phone size={12} className="sm:hidden" />
              <Phone size={14} className="hidden sm:block" />
              <span className="text-xs sm:text-sm">(21) 96707-6166</span>
            </a>
            <a href="mailto:grupovpcbrasil@gmail.com" className="flex items-center gap-1 hover:text-gold transition-colors">
              <Mail size={12} className="sm:hidden" />
              <Mail size={14} className="hidden sm:block" />
              <span className="text-xs sm:text-sm truncate">grupovpcbrasil@gmail.com</span>
            </a>
          </div>
          <div className="hidden lg:block text-gold font-medium text-sm">
            VPC Brasil: Construindo o amanhã, hoje.
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/4ee8bcbf-d9eb-4584-837a-f9a6059bdea8.png" 
              alt="Grupo VPC Brasil Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-navy hover:text-gold font-medium transition-colors duration-300 text-lg"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t">
            <ul className="py-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-6 py-3 text-navy hover:bg-secondary hover:text-gold transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="px-6 py-3">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="w-full bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  Solicitar Orçamento
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;