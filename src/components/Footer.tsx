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
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/4ee8bcbf-d9eb-4584-837a-f9a6059bdea8.png" 
              alt="Grupo VPC Brasil Logo" 
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-blue-light-soft leading-relaxed">
              Soluções integradas em infraestrutura que oferecem Visão, Proteção e Conforto para o seu negócio.
            </p>
            <div className="text-gold font-medium">
              VPC Brasil: Construindo o amanhã, hoje.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-blue-light-soft hover:text-gold transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-blue-light-soft hover:text-gold transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-blue-light-soft hover:text-gold transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('location')}
                  className="text-blue-light-soft hover:text-gold transition-colors"
                >
                  Localização
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-light-soft hover:text-gold transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Serviços</h3>
            <ul className="space-y-2 text-blue-light-soft">
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
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Contato</h3>
            <div className="space-y-3">
              <a 
                href="tel:21967076166" 
                className="flex items-center space-x-2 text-blue-light-soft hover:text-gold transition-colors"
              >
                <Phone size={16} />
                <span>(21) 96707-6166</span>
              </a>
              <a 
                href="mailto:grupovpcbrasil@gmail.com" 
                className="flex items-center space-x-2 text-blue-light-soft hover:text-gold transition-colors"
              >
                <Mail size={16} />
                <span>grupovpcbrasil@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-blue-light-soft">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Rua Coronel Leoncio, 398<br />
                  Engenhoca - Niterói, RJ
                </span>
              </div>
              <div className="flex items-center space-x-2 text-blue-light-soft">
                <Clock size={16} />
                <span>Seg-Sex: 8h-18h | Emergências 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-light-soft text-sm">
              © {currentYear} Grupo VPC Brasil. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button
                onClick={scrollToTop}
                className="text-blue-light-soft hover:text-gold transition-colors text-sm"
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