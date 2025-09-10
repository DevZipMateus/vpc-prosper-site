import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <img 
              src="/lovable-uploads/4ee8bcbf-d9eb-4584-837a-f9a6059bdea8.png" 
              alt="Grupo VPC Brasil Logo" 
              className="h-12 sm:h-16 w-auto brightness-0 invert mx-auto sm:mx-0"
            />
            <p className="text-blue-light-soft leading-relaxed text-sm sm:text-base">
              Soluções integradas em infraestrutura que oferecem Visão, Proteção e Conforto para o seu negócio.
            </p>
            <div className="text-gold font-medium text-sm sm:text-base">
              VPC Brasil: Construindo o amanhã, hoje.
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gold">Navegação</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-blue-light-soft hover:text-gold transition-colors text-sm sm:text-base"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-blue-light-soft hover:text-gold transition-colors text-sm sm:text-base"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-blue-light-soft hover:text-gold transition-colors text-sm sm:text-base"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('location')}
                  className="text-blue-light-soft hover:text-gold transition-colors text-sm sm:text-base"
                >
                  Localização
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-light-soft hover:text-gold transition-colors text-sm sm:text-base"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gold">Serviços</h3>
            <ul className="space-y-1 sm:space-y-2 text-blue-light-soft text-sm sm:text-base">
              <li>Refrigeração</li>
              <li>Climatização</li>
              <li>CFTV e Segurança</li>
              <li>Elétrica Industrial</li>
              <li>Manutenção</li>
              <li>SPDA</li>
              <li>Manutenção Predial</li>
              <li>Arquitetura e Obras</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gold">Contato</h3>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="tel:21967076166" 
                className="flex items-center justify-center sm:justify-start space-x-2 text-blue-light-soft hover:text-gold transition-colors text-sm sm:text-base"
              >
                <Phone size={14} className="sm:hidden" />
                <Phone size={16} className="hidden sm:block" />
                <span>(21) 96707-6166</span>
              </a>
              <a 
                href="mailto:grupovpcbrasil@gmail.com" 
                className="flex items-center justify-center sm:justify-start space-x-2 text-blue-light-soft hover:text-gold transition-colors text-sm sm:text-base break-all sm:break-normal"
              >
                <Mail size={14} className="sm:hidden flex-shrink-0" />
                <Mail size={16} className="hidden sm:block flex-shrink-0" />
                <span>grupovpcbrasil@gmail.com</span>
              </a>
              <div className="flex items-start justify-center sm:justify-start space-x-2 text-blue-light-soft text-sm sm:text-base">
                <MapPin size={14} className="mt-1 flex-shrink-0 sm:hidden" />
                <MapPin size={16} className="mt-1 flex-shrink-0 hidden sm:block" />
                <span className="text-center sm:text-left">
                  Rua Coronel Leoncio, 398<br />
                  Engenhoca - Niterói, RJ
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-blue-light-soft text-sm sm:text-base">
                <Clock size={14} className="sm:hidden flex-shrink-0" />
                <Clock size={16} className="hidden sm:block flex-shrink-0" />
                <span>Seg-Sex: 8h-18h | Emergências 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
            <p className="text-blue-light-soft text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Grupo VPC Brasil. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToTop}
                className="text-blue-light-soft hover:text-gold transition-colors text-xs sm:text-sm"
              >
                Voltar ao topo
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;