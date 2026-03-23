import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dronVideo from "@/assets/dron-mendoza.mp4";
import sparLogo from "@/assets/spar-logo-new.png";

const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden">
      
      {/* 🎥 VIDEO BACKGROUND */}
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 🔝 NAVBAR */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <img
          src={sparLogo}
          alt="SPAR Logo"
          className="w-24 md:w-32 lg:w-40 h-auto object-contain shrink-0 drop-shadow-2xl"
        />

        {/* CTA */}
        <div className="text-right">
          <button onClick={scrollToCTA}>
            <Button
              size="lg"
              variant="hero"
              className="text-sm md:text-base px-4 md:px-6 py-2.5"
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

      {/* 🎯 CONTENIDO */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center w-full max-w-5xl mx-auto px-4 md:px-6 pb-2 md:pb-4">
        
        {/* TITULO */}
        <div className="text-center md:text-left mb-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-white">Cambiá el estrés de la </span>
            <span className="bg-gray-300 p-0.2 rounded-lg shadow-lg text-primary">'Falla Digital'</span>
            <span className="text-white"> por la alegría de las </span>
            <span className="bg-gray-300 p-0.2 rounded-lg shadow-lg  text-primary">
              'Reservas 24/7'
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white mt-2">
            Simplificamos la tecnología para que solo te enfoques en hacer crecer tu negocio.
          </p>
        </div>

        {/* CAJA VALOR */}
        <div className="bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl border border-primary/30 shadow-lg max-w-2xl mb-4">
          <p className="text-xs md:text-sm text-gray-800">
            Somos <span className="font-bold text-primary">SPAR</span>. Eliminamos problemas digitales 
            para que tengas <span className="font-semibold">'cero interrupciones'</span> y más reservas.
          </p>
        </div>

        {/* 🧱 SERVICIOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-2xl mb-4">
          
          <div className="bg-primary p-3 rounded-lg shadow-lg text-center">
            <h3 className="font-bold text-sm text-white">Landing Page</h3>
            <p className="text-xs font-bold text-white">Convierte visitas</p>
          </div>

          <div className="bg-gradient-elegant p-3 rounded-lg shadow-lg text-center">
            <h3 className="font-bold text-sm text-white">Marketing</h3>
            <p className="text-xs font-bold text-white">Más reservas</p>
          </div>

          <div className="bg-green-800 p-3 rounded-lg shadow-lg text-center">
            <h3 className="font-bold text-sm text-white">Soporte PRO</h3>
            <p className="text-xs font-bold text-white">Sin estrés</p>
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
