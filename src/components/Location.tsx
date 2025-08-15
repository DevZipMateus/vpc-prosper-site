import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Nossa Localização
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos estrategicamente localizados em Niterói para melhor atender toda a região metropolitana do Rio de Janeiro
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">Endereço</h3>
                    <p className="text-muted-foreground text-lg">
                      Rua Coronel Leoncio, 398<br />
                      Engenhoca - Niterói, RJ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">Telefone</h3>
                    <a 
                      href="tel:21967076166" 
                      className="text-muted-foreground text-lg hover:text-gold transition-colors"
                    >
                      (21) 96707-6166
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">E-mail</h3>
                    <a 
                      href="mailto:grupovpcbrasil@gmail.com" 
                      className="text-muted-foreground text-lg hover:text-gold transition-colors"
                    >
                      grupovpcbrasil@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">Horário de Atendimento</h3>
                    <div className="text-muted-foreground text-lg space-y-1">
                      <p>Segunda à Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p className="text-gold font-medium">Emergências 24h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-navy-blue flex items-center justify-center text-white relative">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Estamos Aqui</h3>
                    <p className="text-blue-light-soft">Engenhoca - Niterói, RJ</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-2 h-2 bg-blue-light rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-6 left-8 w-4 h-4 bg-gold/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-light/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </CardContent>
            </Card>

            {/* Service Area Note */}
            <div className="mt-6 bg-white rounded-lg p-6 border-l-4 border-gold">
              <h4 className="text-lg font-bold text-navy mb-2">Área de Atendimento</h4>
              <p className="text-muted-foreground">
                Atendemos toda a região metropolitana do Rio de Janeiro, incluindo Niterói, São Gonçalo, Rio de Janeiro e cidades adjacentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;