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
        title: "¡Solicitud enviada con éxito!",
        description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
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
    <section id="contact-form" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="bg-card p-8 rounded-2xl shadow-elegant border-2 border-border">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Agendá tu Consulta</h3>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">

              <Input name="name" placeholder="Tu nombre completo" value={formData.name} onChange={handleChange} required className="h-12" />

              <Input name="email" type="email" placeholder="Tu email" value={formData.email} onChange={handleChange} required className="h-12" />

              <Input name="phone" type="tel" placeholder="Tu teléfono" value={formData.phone} onChange={handleChange} required className="h-12" />

              <Input name="business" placeholder="Nombre de tu negocio" value={formData.business} onChange={handleChange} required className="h-12" />

              <Textarea name="message" placeholder="Te escribo porque SUCAR VIAJES me habló muy bien de tu trabajo. Tenemos una agencia de viajes y, la verdad, la web nos está volviendo locos.

Estamos en plena temporada y la página se cuelga justo cuando la gente va a pagar o tarda mil años en cargar los hoteles. Al final, los clientes se cansan y se van a otra parte, y estamos perdiendo ventas todos los días por esto.

Queríamos ver si nos puedes dar una mano para arreglar estos fallos y que la web vuele. No queremos parches, sino que funcione bien de una vez por todas...." value={formData.message} onChange={handleChange} rows={4} />

              <Button type="submit" size="xl" variant="hero" className="w-full flex items-center justify-center gap-2">
                Agendá tu Consulta
                <ArrowRight className="w-5 h-5" />
              </Button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;