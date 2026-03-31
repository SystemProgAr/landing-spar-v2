import { AlertCircle, TrendingDown, Clock, BarChart3, Frown } from "lucide-react";

const problemPoints = [
  {
    icon: AlertCircle,
    title: "Web Caída",
    description: "Pierdes ventas y credibilidad en temporada alta.",
    color: "text-destructive"
  },
  {
    icon: TrendingDown,
    title: "Marketing Estancado",
    description: "Muchos clics, pero cero reservas reales.",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Soporte Lento",
    description: "Si algo falla, nadie responde. Negocio parado.",
    color: "text-secondary"
  },
  {
    icon: BarChart3,
    title: "Web que no Vende",
    description: "Tu sitio es bonito, pero no convierte visitas.",
    color: "text-accent"
  }
];

const Problem = () => {
  return (
    <section className="py-9 bg-muted/20">
      <div className="container mx-auto px-2 text-center">
        
        {/* Badge superior compacto */}
        <div className="inline-flex items-center gap-2 bg-destructive/10 px-3 py-1 rounded-full mb-3 border border-destructive/20">
          <Frown className="w-4 h-4 text-destructive" />
          <span className="text-xs font-bold uppercase tracking-wider text-destructive">El costo de esperar</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          ¿Te suena familiar?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-base">
          Cada minuto sin solución es dinero perdido y reputación dañada.
        </p>

        {/* Grid Ajustado: 1 col móvil, 2 tablet, 4 escritorio para cards pequeñas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {problemPoints.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="group bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${problem.color} bg-current/10 mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Banner de énfasis más sutil y elegante */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-destructive/5 to-primary/5 p-6 rounded-xl border border-primary/10">
            <p className="text-lg font-medium italic text-foreground/80">
              "La pregunta no es si puedes resolverlo, sino cuánto más vas a perder esperando."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
