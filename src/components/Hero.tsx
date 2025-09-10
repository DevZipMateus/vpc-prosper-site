import React from 'react';
import { ArrowRight, Shield, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-28 md:pt-24 lg:pt-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-light/20 rotate-45 animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gold/30 rotate-45 animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-blue-light/15 rounded-full animate-float" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up">
            <span className="block mb-1 sm:mb-2">Grupo</span>
            <span className="text-gradient-gold block mb-1 sm:mb-2">VPC Brasil</span>
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-blue-light-soft">
              Construindo o amanhã, hoje.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-light-soft animate-fade-in leading-relaxed px-4 sm:px-0">
            Soluções integradas em infraestrutura que oferecem <strong>Visão</strong>, <strong>Proteção</strong> e <strong>Conforto</strong> para o seu negócio
          </p>

          {/* VPC Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 animate-slide-up px-4 sm:px-0" style={{
          animationDelay: '0.3s'
        }}>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 hover-lift">
              <Eye className="w-8 h-8 sm:w-12 sm:h-12 text-gold mx-auto mb-2 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gold">Visão</h3>
              <p className="text-blue-light-soft text-sm sm:text-base">Soluções inovadoras para o futuro do seu negócio</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 hover-lift">
              <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-gold mx-auto mb-2 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gold">Proteção</h3>
              <p className="text-blue-light-soft text-sm sm:text-base">Segurança e continuidade operacional garantidas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 hover-lift">
              <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-gold mx-auto mb-2 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gold">Conforto</h3>
              <p className="text-blue-light-soft text-sm sm:text-base">Ambientes otimizados para produtividade</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4 sm:px-0" style={{
          animationDelay: '0.6s'
        }}>
            <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300">
              Nossos Serviços
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-white hover:text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 bg-transparent">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;