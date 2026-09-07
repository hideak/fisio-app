import { buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Check } from "lucide-react";

export function PricingSection() {
  return (
    <section id="planos" className="landing-section bg-muted/20 py-12">
      <div className="landing-container">

        {/* Title matching Slide 05 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Investimento no tratamento
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Escolha a melhor opção para a sua reabilitação e conte com atendimento contínuo, individualizado e sem sair de casa.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">

          {/* Card 1: Sessão Avulsa */}
          <Card className="flex flex-col justify-between border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
            <div>
              <CardHeader className="p-0 pb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Atendimento
                </span>
                <CardTitle className="text-2xl font-black tracking-tight text-foreground uppercase mt-1">
                  Por Sessão
                </CardTitle>
              </CardHeader>

              <div className="py-5 border-y border-border/60">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-muted-foreground">R$</span>
                  <span className="text-4xl font-extrabold tracking-tight text-foreground">150</span>
                  <span className="text-sm font-semibold text-muted-foreground">,00</span>
                  <span className="text-xs text-muted-foreground ml-1">/ sessão</span>
                </div>
              </div>

              <ul className="py-4 space-y-2 text-xs text-foreground/90">
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>50 minutos de atendimento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Avaliação clínica e funcional</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Atendimento 100% individual</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Equipamentos e materiais inclusos</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-border/60 text-center">
              <a
                href="https://wa.me/5531986959594?text=Ol%C3%A1%2C%20Dra.%20Shan!%20Estou%20interessado(a)%20em%20uma%20Sess%C3%A3o%20Avulsa%20de%20fisioterapia."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 py-1"
              >
                <span>Quero uma Sessão Avulsa</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </Card>

          {/* Card 2: Plano 8 Sessões (Featured) */}
          <Card className="relative flex flex-col justify-between border-2 border-primary bg-card p-6 shadow-lg lg:-translate-y-1.5">
            <div>
              <CardHeader className="p-0 pb-3 pt-1">
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                  Tratamento Focado • 4 Semanas
                </span>
                <CardTitle className="text-xl sm:text-2xl font-black tracking-tight text-foreground uppercase mt-0.5">
                  Plano de 8 Sessões
                </CardTitle>
                <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                  <Calendar className="size-3.5 text-primary" />
                  <span>2x por semana (durante 4 semanas)</span>
                </div>
              </CardHeader>

              <div className="py-4 border-y border-border/60 bg-primary/5 -mx-6 px-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-semibold text-muted-foreground">R$</span>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">140</span>
                  <span className="text-xs font-semibold text-muted-foreground">,00</span>
                  <span className="text-[11px] text-muted-foreground ml-1">/ sessão</span>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-foreground">Total do pacote:</span>
                  <span className="font-bold text-foreground">R$ 1.120,00</span>
                </div>
              </div>

              <ul className="py-4 space-y-2 text-xs text-foreground/90">
                <li className="flex items-center gap-2 font-medium">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span className="font-bold">Economia de R$ 80,00</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span className="font-bold">8 atendimentos programados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>50 minutos de atendimento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Avaliação clínica e funcional</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Atendimento 100% individual</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Equipamentos e materiais inclusos</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-border/60">
              <a
                href="https://wa.me/5531986959594?text=Ol%C3%A1%2C%20Dra.%20Shan!%20Estou%20interessado(a)%20no%20Plano%20de%208%20Sess%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "default", className: "w-full justify-center font-bold shadow-xs gap-1.5" })}
              >
                <span>Quero 8 Sessões</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </Card>

          {/* Card 3: Plano 10 Sessões */}
          <Card className="flex flex-col justify-between border border-border/80 bg-card p-5 sm:p-6 shadow-xs transition-all hover:border-primary/40">
            <div>
              <CardHeader className="p-0 pb-3">
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                  Melhor Custo-Benefício • 5 Semanas
                </span>
                <CardTitle className="text-xl sm:text-2xl font-black tracking-tight text-foreground uppercase mt-0.5">
                  Plano de 10 Sessões
                </CardTitle>
                <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                  <Calendar className="size-3.5 text-primary" />
                  <span>2x por semana (durante 5 semanas)</span>
                </div>
              </CardHeader>

              <div className="py-4 border-y border-border/60">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-semibold text-muted-foreground">R$</span>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">135</span>
                  <span className="text-xs font-semibold text-muted-foreground">,00</span>
                  <span className="text-[11px] text-muted-foreground ml-1">/ sessão</span>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-foreground">Total do pacote:</span>
                  <span className="font-bold text-foreground">R$ 1.350,00</span>
                </div>
              </div>

              <ul className="py-4 space-y-2 text-xs text-foreground/90">
                <li className="flex items-center gap-2 font-medium">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span className="font-bold">Economia de R$ 150,00</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span className="font-bold">10 atendimentos programados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>50 minutos de atendimento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Avaliação clínica e funcional</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Atendimento 100% individual</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Equipamentos e materiais inclusos</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-border/60 text-center">
              <a
                href="https://wa.me/5531986959594?text=Ol%C3%A1%2C%20Dra.%20Shan!%20Estou%20interessado(a)%20no%20Plano%20de%2010%20Sess%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 py-1"
              >
                <span>Quero 10 Sessões</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
