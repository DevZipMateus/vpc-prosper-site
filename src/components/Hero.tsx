import React from 'react';
import { ArrowRight, Shield, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-light/20 rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gold/30 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-blue-light/15 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block mb-2">Grupo</span>
            <span className="text-gradient-gold block mb-2">VPC Brasil</span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-blue-light-soft">
              Construindo o amanhã, hoje.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-light-soft animate-fade-in leading-relaxed">
            Soluções integradas em infraestrutura que oferecem <strong>Visão</strong>, <strong>Proteção</strong> e <strong>Conforto</strong> para o seu negócio
          </p>

          {/* VPC Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover-lift">
              <Eye className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gold">Visão</h3>
              <p className="text-blue-light-soft">Soluções inovadoras para o futuro do seu negócio</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover-lift">
              <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gold">Proteção</h3>
              <p className="text-blue-light-soft">Segurança e continuidade operacional garantidas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover-lift">
              <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gold">Conforto</h3>
              <p className="text-blue-light-soft">Ambientes otimizados para produtividade</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection('services')}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
            >
              Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-lg text-lg transition-all duration-300"
            >
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
    </section>
  );
};

export default Hero;