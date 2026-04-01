import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dronVideo from "@/assets/dron-mendoza.mp4";
import sparLogo from "@/assets/spar-logo-new.png";

const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    
    <section className=" relative select-none relative min-h-[100dvh] w-full flex flex-col overflow-hidden">
      
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
  className="w-16 md:w-20 lg:w-24 h-auto object-contain shrink-0 drop-shadow-xl mb-2" 
/>

        {/* CTA */}
       <div className="text-right">
  <Button
          size="lg"
          onClick={scrollToCTA}
          className="bg-gradient-to-r from-[#722F37] to-[#4A1D23] hover:from-[#8B3A44] hover:to-[#5D242C] text-white text-base md:text-lg font-black uppercase tracking-tighter px-8 py-6 rounded-xl shadow-2xl hover:shadow-wine/40 transform hover:-translate-y-1 transition-all border border-white/10 group"
        >
          Agendá tu Consulta
          <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
        </Button>

        <p className="text-sm md:text-base text-white mt-3 font-black tracking-tight drop-shadow-md">
          30 min gratis <span className="text-white/60">•</span> Sin compromiso
        </p>

        </div>
      </div>

      {/* 🎯 CONTENIDO */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center w-full max-w-5xl mx-auto px-4 md:px-6 pb-2 md:pb-12">
        
   <div className="container mx-auto px-4">
    
    {/* 2. Quitamos cualquier margen superior del div del TITULO */}
    <div className="text-center mt-0 mb-2 max-w-4xl mx-auto px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
        <span className="text-white block mb-2">Tu Negocio Turístico Merece</span>
    
        <span className="inline-block bg-gray-200/90 px-5 py-2 rounded-xl shadow-xl text-primary my-2 font-black tracking-tight"> 
        'Reservas reales' 
      </span>

          <span className="text-white block mt-2">No problemas técnicos</span>
        </h1>


          <p className="text-xs sm:text-sm md:text-base text-white mt-2">
            Simplificamos la tecnología para que solo te enfoques en hacer crecer tu negocio.
          </p>
        </div>
</div>
        {/* CAJA VALOR */}
       <div className="mx-auto bg-white/80 backdrop-blur-md p-4 md:p-5 rounded-xl border border-white/20 shadow-lg max-w-2xl mb-6">
  <p className="text-sm md:text-base text-center font-bold text-foreground leading-relaxed">
    Somos <span className="font-black text-primary uppercase tracking-tight">SPAR</span>. 
    Eliminamos problemas digitales para que tengas 
    <span className="font-black text-wine italic"> 'cero interrupciones' </span> 
    y <span className="font-black underline decoration-primary/40">más reservas</span>.
  </p>
</div>

        {/* 🧱 SERVICIOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-2xl mb-4">
            <button
                onClick={() => {
                 document.getElementById("texto-landing")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                });
                }}
                className="bg-primary p-3 rounded-lg shadow-lg text-center cursor-pointer hover:scale-105 transition"
              >
                <h3 className="font-bold text-sm text-white">Landing Page</h3>
                <p className="text-xs font-bold text-white">Convierte el interés en acción</p>
              </button>

           <button
                onClick={() => {
                  document.getElementById("texto-marketing")?.scrollIntoView({
                   behavior: "smooth",
                   block: "center"
                });
                }}
                className="bg-gradient-elegant p-3 rounded-lg shadow-lg text-center cursor-pointer hover:scale-105 active:scale-95 transition w-full"
              >
                <h3 className="font-bold text-sm text-white">Marketing</h3>
                <p className="text-xs font-bold text-white">Asegura tu reserva.</p>
           </button>

          <button
            onClick={() => {
                  document.getElementById("texto-soporte")?.scrollIntoView({
                   behavior: "smooth",
                   block: "center"
                   });
                }}
                className="bg-green-800 p-3 rounded-lg shadow-lg text-center cursor-pointer hover:scale-105 active:scale-95 transition w-full"
              >
                <h3 className="font-bold text-sm text-white">Soporte PRO</h3>
                <p className="text-xs font-bold text-white">Soporte invisible, impacto real</p>
          </button>

        </div>

        {/* CONFIANZA */}
        <div className="text-center w-full">
          <p className="text-sm italic font-black font-bold text-white mb-2">Hacemos que tu web venda mientras dormis</p>

        </div>

      </div>
    </section>
  );
};

export default Hero;
