import React from 'react';
import { 
  Snowflake, 
  Wind, 
  Shield, 
  Zap, 
  Wrench, 
  FileText,
  Building,
  Settings
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Refrigeração",
      description: "Sistemas completos de refrigeração para geladeiras, balcões refrigerados, câmaras de resfriamento e congelamento.",
      features: ["Geladeiras comerciais", "Balcões refrigerados", "Câmaras de resfriamento", "Sistemas de congelamento"]
    },
    {
      icon: Wind,
      title: "Climatização",
      description: "Soluções em ar condicionado com tecnologia avançada para máximo conforto e eficiência energética.",
      features: ["Piso teto", "VRF", "Splitão", "ACJ", "Split", "Multi Split"]
    },
    {
      icon: Shield,
      title: "CFTV e Segurança",
      description: "Sistemas de segurança completos para proteção total do seu estabelecimento.",
      features: ["Câmeras de segurança", "Sistemas de alarme", "Portões automáticos", "Sinaleiras"]
    },
    {
      icon: Zap,
      title: "Elétrica Industrial",
      description: "Projetos elétricos comerciais e industriais com força, controle e automação.",
      features: ["Elétrica comercial", "Elétrica industrial", "Força e controle", "Automação industrial"]
    },
    {
      icon: Wrench,
      title: "Manutenção",
      description: "Manutenção preventiva e corretiva de máquinas comerciais e industriais.",
      features: ["Máquinas comerciais", "Equipamentos industriais", "Manutenção preventiva", "Manutenção corretiva"]
    },
    {
      icon: FileText,
      title: "SPDA",
      description: "Instalação e laudos técnicos do Sistema de Proteção contra Descargas Atmosféricas.",
      features: ["Instalação SPDA", "Laudos técnicos", "Inspeções", "Manutenção preventiva"]
    },
    {
      icon: Settings,
      title: "Manutenção Predial",
      description: "Serviços completos de manutenção predial para manter sua infraestrutura funcionando perfeitamente.",
      features: ["Manutenção preventiva", "Reparos gerais", "Conservação predial", "Serviços especializados"]
    },
    {
      icon: Building,
      title: "Arquitetura e Obras",
      description: "Projetos arquitetônicos completos, design de interiores, gestão e execução de obras.",
      features: ["Projetos arquitetônicos", "Design de interiores", "Gestão de obras", "Execução completa"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 sm:mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções integradas e completas para todas as necessidades de infraestrutura do seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-lift transition-all duration-300 border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-navy" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-navy">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-navy-blue rounded-lg p-6 sm:p-8 md:p-12 text-center text-white mx-4 sm:mx-0">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Precisa de uma solução personalizada?
          </h3>
          <p className="text-lg sm:text-xl text-blue-light-soft mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe de especialistas está pronta para desenvolver a solução ideal para o seu negócio
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 inline-flex items-center"
          >
            Solicitar Consulta Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;