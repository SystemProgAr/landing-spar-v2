import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "María Rodríguez",
    business: "Bodega Valle Escondido",
    role: "Propietaria",
    text: "Desde que SPAR rediseñó nuestra web, las reservas para las degustaciones se triplicaron. Lo mejor es que ahora duermo tranquila sabiendo que si algo falla, están ahí al instante.",
    rating: 5,
    result: "+300% en reservas online"
  },
  {
    name: "Carlos Mendoza",
    business: "Cabalgatas Los Pioneros",
    role: "Director",
    text: "No más problemas técnicos un domingo a la tarde. El soporte de SPAR es realmente 24/7. Y el marketing digital nos trajo exactamente el tipo de turistas que buscábamos: familias y grupos listos para reservar.",
    rating: 5,
    result: "Cero caídas en 8 meses"
  },
  {
    name: "Lucía Fernández",
    business: "Artesanías Andinas",
    role: "Emprendedora",
    text: "Invertí en publicidad antes y no vi resultados. Con SPAR, cada peso que gasto en marketing vuelve multiplicado. Mi tienda online ahora vende las 24 horas, incluso cuando duermo.",
    rating: 5,
    result: "ROI de 450%"
  },
  {
    name: "Roberto Silva",
    business: "Hotel Boutique Cordillera",
    role: "Gerente",
    text: "La landing page que nos crearon es una máquina de convertir. Los visitantes ahora reservan directamente sin llamar. Y el soporte técnico nos salvó en plena temporada alta cuando tuvimos un problema.",
    rating: 5,
    result: "+85% reservas directas"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-accent fill-accent" />
            <span className="text-sm font-bold text-foreground">Testimonios Reales</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Lo que dicen nuestros <br />
            <span className="text-primary">emprendedores de éxito</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            que confían en nosotros para hacer crecer sus negocios turísticos
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="p-8 md:p-12 bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 shadow-elegant">
                    <div className="flex items-start gap-4 mb-6">
                      <Quote className="w-12 h-12 text-primary/30 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                          ))}
                        </div>
                        <p className="text-lg md:text-xl leading-relaxed text-foreground mb-6">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-border">
                      <div>
                        <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                        <p className="text-primary font-semibold">{testimonial.business}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <div className="bg-gradient-wine text-primary-foreground px-6 py-3 rounded-full shadow-wine">
                        <p className="font-bold text-sm">{testimonial.result}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-12 bg-primary' 
                    : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">40+</p>
              <p className="text-sm text-muted-foreground">Emprendimientos turísticos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">99.9%</p>
              <p className="text-sm text-muted-foreground">Uptime garantizado</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Soporte técnico</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Satisfacción Mendoza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
