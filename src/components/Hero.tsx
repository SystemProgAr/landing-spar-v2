
import { Button } from "@/components/ui/button";
import { ArrowRight, Frown } from "lucide-react";
import dronVideo from "@/assets/dron-mendoza.mp4";
import sparLogo from "@/assets/spar-logo-new.png";

const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden select-none">
      
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

        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 🔝 NAVBAR */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        
        <img 
          src={sparLogo} 
          alt="SPAR Logo" 
          className="w-16 md:w-20 lg:w-24 h-auto object-contain drop-shadow-xl"
        />

        <div className="text-right">
          <Button
            size="lg"
            onClick={scrollToCTA}
            className="bg-gradient-to-r from-[#722F37] to-[#4A1D23] hover:from-[#8B3A44] hover:to-[#5D242C] text-white text-base md:text-lg font-black uppercase px-8 py-6 rounded-xl shadow-2xl transition-all"
          >
            Agendá tu Consulta
            <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
          </Button>

          <p className="text-sm text-white mt-2 font-semibold">
            30 min gratis <span className="text-white/60">•</span> Sin compromiso
          </p>
        </div>
      </div>

      {/* 🎯 CONTENIDO */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center max-w-3xl mx-auto px-4">

        {/* TITULAR */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          Si tu web turística no vende,
          <br />
          estás perdiendo reservas todos los días
        </h1>

        {/* SUBTITULO */}
        <p className="text-base md:text-lg text-white/90 mb-6">
          Creamos webs que convierten visitas en clientes sin que tengas que preocuparte por la tecnología.
        </p>

        {/* BADGE */}
            <button
                onClick={() => {
                  document.getElementById("servicios")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                }}
                className="inline-flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full mb-6 border border-white/10 backdrop-blur-sm hover:scale-105 transition cursor-pointer"
              >
                <Frown className="w-4 h-4 text-red-400" />
                
                <span className="text-sm font-bold text-red-400">
                  ¿No sabés por dónde empezar?
                </span>

                <span className="text-sm font-bold text-emerald-400">
                  Nosotros lo hacemos por vos
                </span>
        </button>

        {/* CTA PRINCIPAL */}
        <div className="flex justify-center">
          <button
            onClick={scrollToCTA}
            className="bg-primary px-8 py-4 rounded-xl text-white font-bold text-lg shadow-xl hover:scale-105 transition"
          >
            Quiero más reservas
          </button>
        </div>

        {/* REFUERZO */}
        <p className="text-sm text-white/70 mt-4">
          Sin tecnicismos · Sin complicaciones
        </p>

      </div>
    </section>
  );
};

export default Hero;