import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import sparLogo from "@/assets/spar-logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src={sparLogo} 
              alt="SPAR - Soluciones tecnológicas en Mendoza" 
              className="w-32 h-32 md:w-40 md:h-40 mb-4 object-contain"
            />
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Soluciones tecnológicas diseñadas para emprendimientos turísticos. Convertimos tus desafíos digitales en oportunidades de crecimiento.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact-form" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-accent" />
                <span className="text-secondary-foreground/80 text-sm">
                  Mendoza, Argentina
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1 text-accent" />
                <span className="text-secondary-foreground/80 text-sm">
                  +54 261 6973276
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1 text-accent" />
                <span className="text-secondary-foreground/80 text-sm">
                  systemprogar@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} SPAR. Todos los derechos reservados.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              Hecho con <span className="text-accent">❤️</span> en Mendoza para conectar tu mundo, desde nuestra experiencia local hasta el destino global
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
