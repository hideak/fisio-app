import { Heart, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/80 text-card-foreground">
      <div className="landing-container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">

          {/* Brand & Credential */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-base font-bold text-foreground block">
              Dra. Shankefany Kenny Arita
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Fisioterapia Domiciliar com cuidado humanizado e individualizado. Reabilitação trauma-ortopédica, Pilates e alívio da dor no seu lar.
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs font-semibold text-primary">
              <ShieldCheck className="size-3.5" />
              <span>CREFITO 409624-F</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Navegação
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre a Dra. Shankefany
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-primary transition-colors">
                  Como Funciona o Cuidado
                </a>
              </li>
              <li>
                <a href="#primeiro-encontro" className="hover:text-primary transition-colors">
                  Primeiro Encontro & Orientações
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-primary transition-colors">
                  Planos & Investimento
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-primary transition-colors">
                  Canais de Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Informações de Atendimento
            </p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>
                <strong className="text-foreground">WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/5531986959594?text=Ol%C3%A1%2C%20Dra.%20Shan!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20de%20fisioterapia%20domiciliar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  (31) 98695-9594
                </a>
              </p>
              <p>
                <strong className="text-foreground">E-mail:</strong> shankefany.kenny@gmail.com
              </p>
              <p>
                <strong className="text-foreground">Horários:</strong> Segunda a Sexta: 08h às 17h
              </p>
              <p>
                <strong className="text-foreground">Localidade:</strong> Indaiatuba - SP
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-10 border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Dra. Shankefany Kenny Arita. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            <span>Atendimento com dedicação e carinho</span>
            <Heart className="size-3 text-primary inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
