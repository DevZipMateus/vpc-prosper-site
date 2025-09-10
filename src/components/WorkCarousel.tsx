import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const WorkCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const workImages = [
    {
      src: "/lovable-uploads/238a4a19-a8d7-4295-87ca-c41f27261bef.png",
      alt: "Projeto técnico em desenvolvimento"
    },
    {
      src: "/lovable-uploads/c0c1c3dc-e26c-4f1c-9cd7-deb1e2c157d9.png",
      alt: "Instalação de equipamentos de climatização"
    },
    {
      src: "/lovable-uploads/eeff42ab-2b6c-4865-9ad3-70f841217176.png",
      alt: "Trabalho em sistemas elétricos"
    },
    {
      src: "/lovable-uploads/90726b1c-014d-42d1-8e3d-ef6e10319a61.png",
      alt: "Manutenção de equipamentos industriais"
    },
    {
      src: "/lovable-uploads/a9ff7ea3-d1ce-4bef-af40-94fbcbcd8547.png",
      alt: "Medições e testes elétricos"
    },
    {
      src: "/lovable-uploads/162ca1df-025e-463d-b45e-9f7dcf7a8ded.png",
      alt: "Instalação de sistemas de climatização"
    },
    {
      src: "/lovable-uploads/98e8753b-3222-462d-8203-c35a1f23ee72.png",
      alt: "Manutenção de quadros elétricos"
    },
    {
      src: "/lovable-uploads/617fc803-de96-4633-afe1-4e02a78354da.png",
      alt: "Trabalho especializado em equipamentos"
    },
    {
      src: "/lovable-uploads/b8077ec3-7e19-49de-88c9-b1d9348f7a39.png",
      alt: "Operação de sistemas industriais"
    },
    {
      src: "/lovable-uploads/11b50531-b388-4e37-a36e-a281b8e78480.png",
      alt: "Manutenção de sistemas HVAC"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-play functionality - change slide every 3 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    // Update current slide index
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Nosso Trabalho em Ação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja nossa equipe especializada executando projetos de infraestrutura com excelência e dedicação
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {workImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {workImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === current ? 'bg-gold' : 'bg-gray-300'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;