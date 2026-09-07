import { Armchair, Home, ShieldCheck, UserCheck } from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="landing-section bg-muted/20 py-12">
      <div className="landing-container">

        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Vantagens do Atendimento em Casa
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
            Comodidade, segurança e dedicação exclusiva para a sua recuperação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="landing-card flex flex-col border-border/70 bg-card/60 p-5 hover:bg-card">
            <div className="landing-icon mb-3">
              <Home className="size-5" />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-1.5">
              Sem Deslocamento
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sem estresse de trânsito, filas ou tempo perdido no trajeto.
            </p>
          </div>

          {/* Card 2 */}
          <div className="landing-card flex flex-col border-border/70 bg-card/60 p-5 hover:bg-card">
            <div className="landing-icon mb-3">
              <UserCheck className="size-5" />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-1.5">
              Atenção Exclusiva
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Acompanhamento 1 a 1 durante 100% do tempo da sua sessão.
            </p>
          </div>

          {/* Card 3 */}
          <div className="landing-card flex flex-col border-border/70 bg-card/60 p-5 hover:bg-card">
            <div className="landing-icon mb-3">
              <Armchair className="size-5" />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-1.5">
              No seu Espaço
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Exercícios adaptados à sua rotina, espaço e necessidades reais.
            </p>
          </div>

          {/* Card 4 */}
          <div className="landing-card flex flex-col border-border/70 bg-card/60 p-5">
            <div className="landing-icon mb-3">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-1.5">
              Segurança e Conforto
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ideal para idosos, recuperação pós-cirúrgica e dores agudas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
