import { MessageCircle } from "lucide-react";

export function WhatsApp() {
  return (
    <aside aria-label="Contato rápido via WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip text visible on hover */}
      <span className="hidden sm:inline-block mr-3 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale com a Dra. Shan
      </span>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/5531986959594?text=Ol%C3%A1%2C%20Dra.%20Shan!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Soft pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />
        <MessageCircle className="size-7 fill-current" />
      </a>
    </aside>
  );
}
