import { Laptop, Target, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Laptop,
    title: "Web & Landing",
    focus: "Diseño que vende",
    benefit: "Tu mejor vendedor 24/7. Optimizada para convertir visitas en reservas.",
    features: ["Diseño Pro", "Alta conversión", "Carga ultra rápida", "Pagos integrados"],
    gradient: "bg-gradient-wine",
    shadow: "shadow-wine"
  },
  {
    icon: Target,
    title: "Marketing Turístico",
    focus: "Tráfico de calidad",
    benefit: "Inversión inteligente: atraemos turistas listos para reservar en Mendoza.",
    features: ["SEO Local", "Google & Meta Ads", "Estrategia 360°", "Reportes claros"],
    gradient: "bg-gradient-elegant",
    shadow: "shadow-elegant"
  },
  {
    icon: Shield,
    title: "Soporte Proactivo",
    focus: "Paz mental",
    benefit: "Monitoreo 24/7. Resolvemos problemas antes de que afecten tu negocio.",
    features: ["Cero caídas", "Backups diarios", "Seguridad blindada", "Respuesta VIP"],
    gradient: "bg-green-800", // Puedes usar bg-gradient-to-br from-green-700 to-green-900
    shadow: "shadow-glow"
  }
];

const Services = () => {
  const scrollToCTA = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-2 md:py-4 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header más compacto */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Soluciones</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hechas para <span className="bg-gradient-wine bg-clip-text text-transparent">Vender Experiencias</span>
          </h2>
        </div>

        {/* Grid de 3 columnas: Cards verticales y pequeñas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`group flex flex-col bg-card rounded-2xl overflow-hidden border border-border/50 ${service.shadow} hover:-translate-y-2 transition-all duration-300`}
              >
                {/* Cabecera de la Card (Color) */}
                <div className={`${service.gradient} p-6 text-primary-foreground flex flex-col items-center text-center`}>
                  <Icon className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                  <span className="text-[10px] mt-2 uppercase font-bold bg-white/20 px-2 py-1 rounded-md">
                    {service.focus}
                  </span>
                </div>

                {/* Cuerpo de la Card */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm font-medium mb-4 text-foreground/80 leading-snug">
                    {service.benefit}
                  </p>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                  variant="outline" 
                  size="sm" // Cambiado de sm a md para que el botón sea más alto
                  className="w-full group/btn hover:bg-primary hover:text-white transition-all text-sm md:text-base font-black uppercase tracking-tight border-2" 
                  onClick={scrollToCTA}
                >
                  Saber más
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA minimalista */}
        <div className="mt-4 text-center">
          <p className="text-lg md:text-xl font-extrabold text-foreground mb-6">
              ¿No sabes por dónde empezar?
          </p>
          <Button 
            size="lg" 
            onClick={scrollToCTA}
            className=" rounded-full px-12 shadow-lg hover:shadow-primary/30 transition-all"
          >
            ¿Hablamos?
          </Button>
        </div>
    </div>
    </section>
  );
};

export default Services;
