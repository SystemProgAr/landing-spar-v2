import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const FinalCTA = () => {
  const { toast } = useToast();
  const form = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE,
      import.meta.env.VITE_EMAIL_TEMPLATE,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC
    )
    .then(() => {
      toast({
        title: "¡Listo! 🚀",
        description: "Te contactamos en menos de 24 hs para ayudarte a generar más reservas.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: ""
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error al enviar ❌");
    });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-form" className="py-7 lg:py-17 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* 🔥 TITULO QUE VENDE */}
        <div className="max-w-2xl mx-auto text-center mb-5">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Empezá a generar más reservas en tu negocio turístico
          </h2>

          <p className="text-muted-foreground text-sm md:text-lg">
            Si tu web no está convirtiendo, estás perdiendo clientes todos los días.
            Te mostramos cómo solucionarlo.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-card p-8 rounded-2xl shadow-elegant border-2 border-border">

            {/* 🧠 MINI HEADER */}
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">
                Pedí tu diagnóstico gratuito
              </h3>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">

              <Input name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required className="h-12" />

              <Input name="email" type="email" placeholder="Tu email" value={formData.email} onChange={handleChange} required className="h-12" />

              <Input name="phone" type="tel" placeholder="Tu WhatsApp" value={formData.phone} onChange={handleChange} required className="h-12" />

              <Input name="business" placeholder="Nombre de tu negocio turístico" value={formData.business} onChange={handleChange} required className="h-12" />

              {/* 🔥 MENSAJE SIMPLE (NO FRICCIÓN) */}
              <Textarea 
                name="message"
                placeholder="Contanos brevemente qué está pasando (ej: no llegan consultas, la web no convierte, etc.)"
                value={formData.message}
                onChange={handleChange}
                rows={3}
              />

              {/* 💣 BOTÓN QUE VENDE */}
             <Button 
                
                  type="submit" 
                  size="xl" 
                  variant="hero" 
                  className="w-full flex items-center justify-center gap-2 font-semibold text-center px-4 py-3 text-sm sm:text-base md:text-lg leading-tight"
                >
                  Quiero más reservas ahora
                  <ArrowRight className="w-5 h-5 shrink-0" />
            </Button>
              

              {/* 🔒 CONFIANZA */}
          <p className="text-sm md:text-base text-center text-muted-foreground font-bold uppercase tracking-wide">
              Diagnóstico gratuito • Sin compromiso
          </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;