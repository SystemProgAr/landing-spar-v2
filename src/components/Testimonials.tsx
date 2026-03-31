import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "María Rodríguez",
    business: "Bodega Valle Escondido",
    role: "Propietaria",
    text: "Había días en los que no teníamos reservas y dependíamos solo de Instagram. Era frustrante ver que la gente preguntaba pero no concretaba. Con SPAR cambiamos eso: hoy tenemos reservas constantes y la web trabaja por nosotros todos los días.",
    rating: 5,
    result: "Reservas constantes"
  },
  {
    name: "Carlos Mendoza",
    business: "Cabalgatas Los Pioneros",
    role: "Director",
    text: "La gente entraba a la web pero no reservaba. Perdíamos oportunidades todos los fines de semana. SPAR nos ayudó a transformar eso en clientes reales y ahora tenemos salidas completas con mucha más previsión.",
    rating: 5,
    result: "Salidas completas cada semana"
  },
  {
    name: "Lucía Fernández",
    business: "Artesanías Andinas",
    role: "Emprendedora",
    text: "Invertía en publicidad pero no sabía si funcionaba. Sentía que tiraba dinero. Con SPAR empezamos a ver resultados reales: ahora cada campaña trae clientes que compran y la tienda vende incluso cuando estoy desconectada.",
    rating: 5,
    result: "Ventas todos los días"
  },
  {
    name: "Roberto Silva",
    business: "Hotel Boutique Cordillera",
    role: "Gerente",
    text: "Nuestra web era lenta y los clientes abandonaban antes de reservar. En temporada alta era desesperante. SPAR optimizó todo y hoy recibimos reservas directas sin depender tanto de plataformas externas.",
    rating: 5,
    result: "Más reservas directas"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 🔥 AUTO PLAY LENTO (9 segundos)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-10 lg:py-22 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lo que está pasando en <br />
            <span className="text-primary">
              negocios turísticos como el tuyo
            </span>
          </h2>

          <p className="text-muted-foreground">
            Empresas que pasaron de no generar reservas…
            <span className="font-bold text-foreground">
              {" "}a tener clientes todos los días
            </span>
          </p>
        </div>

        {/* 🔥 CARRUSEL PRO */}
        <div 
          className="max-w-5xl mx-auto relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={() => setIsAutoPlaying(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">

                  <Card className="p-6 md:p-10 bg-card border-2 border-border shadow-lg">
                    
                    <div className="flex items-start gap-4 mb-6">
                      <Quote className="w-10 h-10 text-primary/30 flex-shrink-0" />

                      <div>
                        <div className="flex gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>

                        <p className="text-base md:text-lg leading-relaxed mb-6">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t">
                      
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-primary text-sm font-semibold">
                          {testimonial.business}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>

                      <div className="bg-primary text-white px-4 py-2 rounded-full">
                        <p className="text-xs font-bold text-center">
                          {testimonial.result}
                        </p>
                      </div>

                    </div>
                  </Card>

                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-10 bg-primary"
                    : "w-3 bg-gray-300"
              }`}
              />
            ))}
          </div>
        </div>

    </div>
    </section>
  );
};

export default Testimonials;
