import { PackageCheck, Shirt, Sparkles } from "lucide-react";

export function PreparationSection() {
  return (
    <section id="primeiro-encontro" className="landing-section bg-background py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Banner from Slide 04 */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mt-3">
            Nosso Primeiro Encontro
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            Dois passos simples para a sua primeira sessão domiciliar:
          </p>
        </div>

        {/* 2 Main Preparation Cards matching Slide 04 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

          {/* Card 1: Clothing */}
          <div className="flex flex-col rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <Shirt className="size-5" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                Roupas Leves e Confortáveis
              </h3>
            </div>
            <p className="text-sm text-foreground/90 font-medium leading-relaxed border-l-2 border-primary pl-3 my-1">
              Vista uma roupa leve e confortável, que te dê liberdade para se movimentar sem preocupações.
            </p>
          </div>

          {/* Card 2: Space */}
          <div className="flex flex-col rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <Sparkles className="size-5" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                Espaço Limpo e Tranquilo
              </h3>
            </div>
            <p className="text-sm text-foreground/90 font-medium leading-relaxed border-l-2 border-primary pl-3 my-1">
              Escolha um cantinho bem limpo, tranquilo e organizado da casa.
            </p>
          </div>

        </div>

        {/* Reassurance Highlight */}
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
            <PackageCheck className="size-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground">
              Materiais 100% inclusos
            </h4>
            <p className="text-xs text-muted-foreground">
              Levo todos os aparelhos, faixas e recursos terapêuticos necessários até a sua casa.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
