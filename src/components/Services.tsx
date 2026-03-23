import { Laptop, Target, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Laptop,
    title: "Landing Page & Desarrollo Web",
    focus: "Diseño que vende",
    benefit: "Convertimos tu web en tu mejor vendedor, optimizada para móviles y reservas directas.",
    features: [
      "Diseño responsive que se ve perfecto en cualquier dispositivo",
      "Optimización para conversión y reservas directas",
      "Carga ultra rápida para no perder visitantes",
      "Integración con sistemas de pago y reservas"
    ],
    gradient: "bg-gradient-wine",
    shadow: "shadow-wine"
  },
  {
    icon: Target,
    title: "Marketing Digital para Turismo",
    focus: "Turistas listos",
    benefit: "Marketing sin Desperdicio: Inversión digital que garantiza visitas con alta intención de consumir: ya sea una reserva, una cata o la compra de tu producto.",
    features: [
      "Campañas enfocadas en turistas que buscan experiencias en Mendoza",
      "SEO local para aparecer primero cuando buscan en Google",
      "Publicidad efectiva en redes sociales y Google Ads",
      "Análisis de resultados y optimización constante"
    ],
    gradient: "bg-gradient-elegant",
    shadow: "shadow-elegant"
  },
  {
    icon: Shield,
    title: "Soporte Técnico & Mantenimiento Proactivo",
    focus: "Paz mental",
    benefit: "Paz Total: El monitoreo 24/7 y las copias automáticas son solo el inicio. Hay un equipo de calidad validando cada detalle para que tu tranquilidad sea absoluta.",
    features: [
      "Monitoreo 24/7 para detectar problemas antes que sucedan",
      "Copias de seguridad automáticas diarias",
      "Actualizaciones de seguridad y rendimiento",
      "Respuesta rápida cuando nos necesitas"
    ],
    gradient: "bg-green-800",
    shadow: "shadow-glow"
  }
];

const Services = () => {
  const scrollToCTA = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-bold text-primary">Soluciones a Medida</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            SPAR: Soluciones Tecnológicas <br />
            <span className="bg-gradient-wine bg-clip-text text-transparent">Hechas para Vender Experiencias</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No vendemos tecnología por venderla. Cada solución está diseñada para un solo objetivo: 
            <span className="font-bold text-foreground"> que vendas más y duermas tranquilo</span>.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`group rounded-2xl overflow-hidden ${service.shadow} hover:scale-[1.02] transition-all duration-500 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Left side - Icon and Title */}
                  <div className={`md:col-span-2 ${service.gradient} p-8 md:p-12 text-primary-foreground flex flex-col justify-center`}>
                    <Icon className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <span className="text-sm font-semibold">🎯 {service.focus}</span>
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="md:col-span-3 bg-card p-8 md:p-12 border-2 border-border/50">
                    <p className="text-lg font-semibold mb-6 text-foreground leading-relaxed">
                      {service.benefit}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="outline" 
                      className="group/btn border-2 hover:border-primary"
                      onClick={scrollToCTA}
                    >
                      Consultar sobre este servicio
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

{/* Bottom CTA */}
<div className="mt-12 sm:mt-16 md:mt-20 text-center px-4 sm:px-6 flex flex-col items-center">
  
  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-5 sm:mb-6 md:mb-8 leading-relaxed max-w-xl">
    ¿No estás seguro de qué necesitas? No te preocupes.
  </p>

    <Button 
      size="xl" 
      variant="cta"
      onClick={scrollToCTA}
      className="text-sm sm:text-base md:text-lg px-6 md:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 group"
    >
      <span className="block sm:inline">
        Hablemos de tu caso
      </span>
      <span className="block sm:inline">
        específico
      </span>

      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
    </Button>

  </div>
      </div>
      
    </section>
  );
};

export default Services;
