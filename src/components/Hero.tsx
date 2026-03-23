import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dronVideo from "@/assets/dron-mendoza.mp4";
import sparLogo from "@/assets/spar-logo-new.png";

const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      
      {/* 🎥 VIDEO BACKGROUND OPTIMIZADO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        >
          <source src={dronVideo} type="video/mp4" />
        </video>

        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
      </div>

      {/* 🔝 NAVBAR */}
      <div className="relative z-10 w-full px-4 md:px-8 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="animate-fade-in flex items-center">
          <img
            src={sparLogo}
            alt="SPAR Logo"
            className="w-24 md:w-32 lg:w-40 h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* CTA */}
        <div className="animate-fade-in text-right">
          <button onClick={scrollToCTA}>
            <Button
              size="lg"
              variant="hero"
              className="text-sm md:text-base px-4 md:px-6 py-2.5 shadow-wine"
            >
              Agendá tu Consulta
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </button>

          <p className="text-xs text-white mt-1 font-semibold">
            30 min gratis • Sin compromiso
          </p>
        </div>
      </div>

      {/* 🎯 CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 md:px-8 pb-6">
        
        {/* TITULO */}
        <div className="max-w-3xl text-center md:text-left animate-fade-in mb-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-white">Cambiá el estrés de la </span>
            <span className="text-primary">'Falla Digital'</span>
            <span className="text-white"> por la alegría de las </span>
            <span className="bg-gradient-wine bg-clip-text text-transparent">
              'Reservas 24/7'
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white mt-2 font-medium">
            Simplificamos la tecnología para que solo te enfoques en hacer crecer tu negocio.
          </p>
        </div>

        {/* CAJA VALOR */}
        <div className="bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl border border-primary/30 shadow-lg max-w-2xl mb-4">
          <p className="text-xs md:text-sm leading-relaxed text-gray-800">
            Somos <span className="font-bold text-primary">SPAR</span>: tu equipo tecnológico.
            Eliminamos problemas digitales para que tengas{" "}
            <span className="font-semibold">'cero interrupciones'</span> y más reservas.
          </p>
        </div>

        {/* SERVICIOS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mb-4 w-full">
          
          <div className="bg-primary p-3 rounded-lg shadow-lg hover:scale-105 transition text-left">
            <h3 className="font-bold text-sm text-white">Landing Page</h3>
            <p className="text-xs text-white/90">Convierte visitas</p>
          </div>

          <div className="bg-black p-3 rounded-lg shadow-lg hover:scale-105 transition text-left">
            <h3 className="font-bold text-sm text-white">Marketing</h3>
            <p className="text-xs text-white/80">Más reservas</p>
          </div>

          <div className="bg-yellow-400 p-3 rounded-lg shadow-lg hover:scale-105 transition text-left">
            <h3 className="font-bold text-sm text-black">Soporte PRO</h3>
            <p className="text-xs font-bold text-black">Sin estrés</p>
          </div>

        </div>

        {/* CONFIANZA */}
        <div className="text-center w-full">
          <p className="text-sm font-bold text-white mb-2">Confían en nosotros:</p>

          <div className="flex flex-wrap gap-2 justify-center mb-3">
            <span className="bg-white px-3 py-1 rounded text-xs">Bodega del Valle</span>
            <span className="bg-white px-3 py-1 rounded text-xs">Cabalgatas Los Andes</span>
            <span className="bg-white px-3 py-1 rounded text-xs">Artesanías Cuyo</span>
          </div>

          <div className="inline-block bg-primary px-4 py-2 rounded-full">
            <span className="text-xs font-bold text-white">
              ✓ Especialistas en turismo digital
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
