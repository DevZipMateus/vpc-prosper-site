import React, { useState } from 'react';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp message template
    const whatsappMessage = `Olá! Vim através do site do Grupo VPC Brasil.

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Serviço de Interesse:* ${formData.service}
*Mensagem:* ${formData.message}

Gostaria de solicitar um orçamento.`;

    const whatsappURL = `https://wa.me/5521967076166?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');

    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Refrigeração',
    'Climatização (Ar Condicionado)',
    'CFTV e Segurança',
    'Elétrica Industrial',
    'Manutenção de Máquinas',
    'SPDA (Para-raios)',
    'Manutenção Predial',
    'Arquitetura e Obras',
    'Outros'
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para oferecer a solução ideal para o seu negócio. Solicite seu orçamento gratuito!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-navy flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-gold" />
                Solicitar Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(21) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-navy mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva sua necessidade ou dúvida..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  variant="outline"
                  className="w-full bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold py-3 text-lg transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-navy-blue text-white hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gold">
                  Fale Conosco Diretamente
                </h3>
                
                <div className="space-y-6">
                  <a 
                    href="tel:21967076166"
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <p className="text-blue-light-soft text-sm">Telefone</p>
                      <p className="text-lg font-semibold">(21) 96707-6166</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:grupovpcbrasil@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <p className="text-blue-light-soft text-sm">E-mail</p>
                      <p className="text-lg font-semibold">grupovpcbrasil@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/5521967076166"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gold/20 rounded-lg hover:bg-gold/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <p className="text-blue-light-soft text-sm">WhatsApp</p>
                      <p className="text-lg font-semibold text-gold">Atendimento 24h</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-navy mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda à Sexta:</span>
                    <span className="font-medium">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-medium">8h às 12h</span>
                  </div>
                  <div className="flex justify-between text-gold">
                    <span>Emergências:</span>
                    <span className="font-bold">24h</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Guarantee */}
            <Card className="bg-muted hover-lift">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-navy mb-4">Nossa Garantia</h3>
                <p className="text-muted-foreground">
                  Resposta em até <strong className="text-navy">2 horas</strong> para solicitações de orçamento e <strong className="text-navy">atendimento 24h</strong> para emergências.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;