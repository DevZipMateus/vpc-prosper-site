import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const WorkCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

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
    },
    {
      src: "/lovable-uploads/59a0dcd1-ccba-4df2-8058-8923569381f4.png",
      alt: "Projeto de ambiente climatizado e confortável"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-play functionality - change slide every 3 seconds (continues even on hover)
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  const handleImageClick = (image: {src: string, alt: string}) => {
    setSelectedImage(image);
  };

  return (
    <>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 sm:mb-6">
            Nosso Trabalho em Ação
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Veja nossa equipe especializada executando projetos de infraestrutura com excelência e dedicação
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {workImages.map((image, index) => (
                <CarouselItem key={index} className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onClick={() => handleImageClick(image)}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        </div>
      </section>

      {/* Modal for expanded image */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WorkCarousel;