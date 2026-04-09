import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  const phoneNumber = "5492616204767";
  const message = "Hola, tengo un negocio turístico y quiero más reservas";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // ðŸ‘‡ aparece despuÃ©s de hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-5 right-5 z-50
        flex items-center gap-3
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >

      {/* ðŸ’¬ TEXTO QUE CONVIERTE */}
      <div className="hidden md:block bg-white text-black text-sm px-3 py-2 rounded-lg shadow-md">
        ¿Quiero más reservas?
      </div>

      {/* ðŸŸ¢ BOTÃ“N */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center
          w-14 h-14
          rounded-full
          bg-[#25D366]
          hover:bg-[#20BA5A]
          text-white
          shadow-lg hover:shadow-xl
          transition-all duration-300
          hover:scale-110
        "
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};

export default WhatsAppButton;