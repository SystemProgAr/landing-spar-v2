import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import sparLogo from "@/assets/spar-logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-1"> {/* Reducido de py-16 a 10 */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-2"> {/* Reducido mb-12 a 8 */}
          
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src={sparLogo} 
              alt="SPAR" 
              className="w-24 h-24 mb-3 object-contain" // Achicado de 40 a 24
            />
            <p className="text-secondary-foreground font-medium mb-4 max-w-sm text-sm leading-snug">
              Soluciones tecnológicas para turismo. Convertimos desafíos en crecimiento real.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black mb-3 text-sm uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-foreground font-bold text-sm hover:underline transition-all">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-secondary-foreground font-bold text-sm hover:underline transition-all">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact-form" className="text-secondary-foreground font-bold text-sm hover:underline transition-all">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black mb-3 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-secondary-foreground font-bold text-xs">Mendoza, Argentina</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-secondary-foreground font-bold text-xs">+54 9 2616204767</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-secondary-foreground font-bold text-xs">systemprogar@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Más compacta */}
        <div>
          <div>
            <p >
              © {new Date().getFullYear()} SPAR.
            </p>
            <p >
            Hecho con ❤️ en Mendoza • Experiencia local, destino global.
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;