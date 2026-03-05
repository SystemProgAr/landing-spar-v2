import { AlertCircle, TrendingDown, Clock, BarChart3, Frown } from "lucide-react";

const problemPoints = [
  {
    icon: AlertCircle,
    title: "Web Caída en Temporada Alta",
    description: "Tu sitio web se cae justo cuando más reservas necesitas. Pierdes ventas y credibilidad.",
    color: "text-destructive"
  },
  {
    icon: TrendingDown,
    title: "Inversión en Marketing que no genera Reservas",
    description: "Gastas en publicidad pero los clicks no se convierten en clientes reales.",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Soporte Lento o Inexistente",
    description: "Cuando algo falla, nadie responde. Tu negocio está parado y nadie te ayuda.",
    color: "text-secondary"
  },
  {
    icon: BarChart3,
    title: "Diseños Web que solo dan 'Me Gusta', pero no 'Reservas'",
    description: "Tu web es bonita pero no vende. Los visitantes miran y se van sin reservar.",
    color: "text-accent"
  }
];

const Problem = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-destructive/10 px-4 py-2 rounded-full mb-6">
            <Frown className="w-5 h-5 text-destructive" />
            <span className="text-sm font-semibold text-destructive">El Dolor de los Emprendedores</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Te suena familiar? <br />
            <span className="text-primary">Problemas que no deberían detener tu negocio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada día sin solución es dinero perdido, reputación dañada y oportunidades que se esfuman. 
            <span className="font-bold text-foreground"> No tiene que ser así.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problemPoints.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="group bg-card p-8 rounded-xl border-2 border-border hover:border-primary/50 shadow-sm hover:shadow-wine transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${problem.color} bg-current/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Emphasis */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-gradient-wine p-8 rounded-2xl shadow-wine text-primary-foreground">
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              💸 Cada problema tecnológico te cuesta reservas, tiempo y dinero. 
              <br />
              <span className="text-accent">La pregunta no es si puedes resolverlo, sino cuánto más vas a perder esperando.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
