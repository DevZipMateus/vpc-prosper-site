import React from 'react';
import { Target, Award, Users, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  return <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Sobre o Grupo VPC Brasil
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa jornada começou com a compreensão das necessidades do empresariado moderno, oferecendo mais que serviços: oferecendo tranquilidade.
          </p>
        </div>

        {/* Company Story */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-navy mb-4">Nossa História</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A jornada do Grupo VPC Brasil começou com a profunda compreensão das necessidades do empresariado moderno. Em um mundo onde a agilidade é crucial e a infraestrutura é a espinha dorsal de qualquer operação, percebemos que faltava um parceiro que oferecesse mais do que apenas serviços: oferecesse tranquilidade e uma base sólida para o crescimento.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Foi assim que as iniciais VPC ganharam vida, representando os pilares que nos sustentam: <strong className="text-navy">Visão</strong>, <strong className="text-navy">Proteção</strong> e <strong className="text-navy">Conforto</strong>.
              </p>
            </div>
            <div className="bg-gradient-navy-blue rounded-lg p-8 text-white">
              <blockquote className="text-2xl font-medium mb-4 bg-gray-950 rounded-xl">
                "VPC Brasil: Construindo o amanhã, hoje."
              </blockquote>
              <p className="text-blue-light-soft text-zinc-950">
                Nossa missão é garantir que, com Visão, Proteção e Conforto, seus negócios prosperem sem dores de cabeça, liberando você para focar no que faz de melhor.
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover-lift">
            <CardContent className="p-8">
              <Target className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-4">Missão</h3>
              <p className="text-muted-foreground">
                Ser o parceiro essencial de empresários brasileiros, proporcionando tranquilidade e eficiência em sua gestão operacional através de soluções integradas.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift">
            <CardContent className="p-8">
              <Award className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-4">Visão</h3>
              <p className="text-muted-foreground">
                Ser reconhecido nacionalmente como a referência em soluções integradas de manutenção e infraestrutura, simplificando o dia a dia dos empresários.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift">
            <CardContent className="p-8">
              <Users className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-4">Valores</h3>
              <p className="text-muted-foreground">
                Parceria estratégica, excelência operacional, confiabilidade, inovação contínua e comprometimento com o sucesso do cliente.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* VPC Pillars Detailed */}
        <div className="bg-white rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-navy text-center mb-12">Os Pilares VPC</h3>
          
          <div className="space-y-12">
            {/* Visão */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-navy">V</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-navy mb-4">Visão</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Nossa Visão vai além do presente. Estamos sempre à frente, buscando e desenvolvendo novas soluções que otimizem o dia a dia dos empresários. Através da implementação de tecnologias de ponta em refrigeração, climatização e consultoria em eficiência energética, nosso olhar está sempre focado no futuro.
                </p>
              </div>
            </div>

            {/* Proteção */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-navy">P</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-navy mb-4">Proteção</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A Proteção é nossa promessa de segurança e continuidade. Oferecemos um leque completo de serviços de manutenção preventiva - de sistemas de refrigeração e climatização a CFTV, elétrica e hidráulica. Nossa equipe atua de forma proativa, identificando e corrigindo falhas antes que se tornem problemas.
                </p>
              </div>
            </div>

            {/* Conforto */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-navy">C</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-navy mb-4">Conforto</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  O Conforto é o resultado tangível da nossa dedicação. Acreditamos que um ambiente bem planejado e funcional é fundamental para o sucesso. Através de projetos arquitetônicos, obras, reformas e sistemas de climatização, criamos espaços onde a produtividade floresce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;