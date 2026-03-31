import { Search, Settings, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Entendemos tu negocio",
    description:
      "Analizamos cómo estás vendiendo hoy y detectamos por qué no estás generando las reservas que podrías."
  },
  {
    icon: Settings,
    title: "Ordenamos todo para que funcione",
    description:
      "Ajustamos tu web y tu mensaje para que el cliente entienda rápido, confíe y tome acción."
  },
  {
    icon: MessageCircle,
    title: "Empezás a recibir consultas reales",
    description:
      "Activamos los canales para que personas interesadas te escriban y puedas cerrar más ventas."
  }
];

const Process = () => {
  return (
      <section className="py-2 lg:py-3 bg-background">
      <div className="container mx-auto px-4">

        {/* TITULO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Cómo hacemos que tu negocio
            <span className="text-primary"> venda más</span>
          </h2>

          <p className="text-muted-foreground">
            Un proceso simple, claro y pensado para resultados reales
          </p>
        </div>

        {/* PASOS */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-lg border text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* CIERRE */}
        <div className="text-center mt-12">
          <p className="font-semibold">
            No se trata de tener más visitas.
          </p>
          <p className="text-primary font-bold text-lg">
            Se trata de convertirlas en clientes.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Process;