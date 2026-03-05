import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dronVideo from "@/assets/dron-mendoza.mp4";
import sparLogo from "@/assets/spar-logo-new.png";

const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Full-width background video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={dronVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/80" />
      </div>

      {/* Top Navigation Bar - Logo Left, CTA Right */}
      <div className="relative z-10 w-full px-4 md:px-8 py-3 flex justify-between items-start">
        {/* Logo - Top Left */}
        <div className="animate-fade-in">
          <img 
            src={sparLogo} 
            alt="SPAR Logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl"
          />
        </div>

        {/* CTA - Top Right */}
        <div className="animate-fade-in text-right">
          <a href="#contact-form">
            <Button 
              size="lg" 
              variant="hero" 
              className="text-sm md:text-base px-4 md:px-6 py-2.5 shadow-wine"
            >
              Agendá tu Consulta Estratégica
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </a>
          <p className="text-xs text-foreground mt-1 font-semibold">
            Encuentro estratégico de 30 minutos.<br />Sin costo. Resultados con éxito.
          </p>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 md:px-8 pb-4">
        {/* Main Headline */}
        <div className="max-w-3xl animate-fade-in mb-2 text-left md:text-left">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight drop-shadow-2xl">
            <span className="text-black drop-shadow-lg">Cambia el estrés de la </span>
            <span className="text-primary drop-shadow-lg">'Falla Digital'</span>
            <span className="text-black drop-shadow-lg"> por la alegría de las </span>
            <span className="bg-gradient-wine bg-clip-text text-transparent drop-shadow-lg">'Reservas 24/7'</span>
          </h1>
          <p className="text-xs md:text-sm lg:text-base text-black font-semibold drop-shadow-lg mt-1">
            En SPAR, simplificamos la tecnología. Tu única misión es deslumbrar a tus clientes y ver cómo tu negocio despega.
          </p>
        </div>

        {/* Value Proposition Box */}
        <div className="bg-card/95 backdrop-blur-md p-3 md:p-4 rounded-xl border-2 border-primary/30 shadow-wine max-w-2xl animate-fade-in mb-3">
          <p className="text-xs md:text-sm leading-relaxed">
            Somos <span className="font-bold text-primary">SPAR</span>: El equipo de tecnología en Mendoza 
            que te devuelve la calma. Simplificamos cada problema digital para garantizarte{" "}
            <span className="font-semibold text-secondary">'cero interrupciones'</span>, 
            permitiendo que tu bodega o emprendimiento turístico se concentre solo en crear 
            experiencias inolvidables.
          </p>
        </div>

        {/* Service Cards - Uniform size with Primary-Dark-Yellow pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-2xl animate-fade-in mb-3">
          <div className="bg-primary p-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-left h-20 flex flex-col justify-center">
            <h3 className="font-black text-sm md:text-base mb-0.5 text-primary-foreground">Landing Page Vendedora</h3>
            <p className="text-xs text-primary-foreground/90">Diseño que convierte</p>
          </div>
          <div className="bg-foreground p-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-left h-20 flex flex-col justify-center">
            <h3 className="font-black text-sm md:text-base mb-0.5 text-background">Marketing Digital</h3>
            <p className="text-xs text-background/80">Turistas listos para reservar</p>
          </div>
          <div className="bg-accent p-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-left h-20 flex flex-col justify-center">
            <h3 className="font-black text-sm md:text-base mb-0.5 text-accent-foreground">Soporte Técnico PRO</h3>
            <p className="text-xs font-black text-accent-foreground">Paz mental garantizada</p>
          </div>
        </div>

        {/* Trust Badges - Centered */}
        <div className="max-w-2xl animate-fade-in text-center w-full">
          <p className="text-sm md:text-base font-black text-foreground mb-2 drop-shadow-lg">Confían en nosotros:</p>
          <div className="flex flex-wrap gap-2 items-center justify-center mb-2">
            <div className="bg-background/95 backdrop-blur-sm px-3 py-1 rounded-lg font-medium text-xs shadow-lg text-foreground border border-border/30">Bodega del Valle</div>
            <div className="bg-background/95 backdrop-blur-sm px-3 py-1 rounded-lg font-medium text-xs shadow-lg text-foreground border border-border/30">Cabalgatas Los Andes</div>
            <div className="bg-background/95 backdrop-blur-sm px-3 py-1 rounded-lg font-medium text-xs shadow-lg text-foreground border border-border/30">Artesanías Cuyo</div>
          </div>
          <div className="inline-block bg-primary/90 backdrop-blur-sm border-2 border-primary px-3 py-1.5 rounded-full shadow-wine">
            <span className="text-xs font-bold text-primary-foreground">
              ✓ Especialistas en la Experiencia Turística Digital
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
