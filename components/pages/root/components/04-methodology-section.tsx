import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, HeartHandshake, Repeat2 } from "lucide-react";

export function MethodologySection() {
  return (
    <section id="como-funciona" className="landing-section py-14 md:py-20">
      <div className="landing-container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Como vai funcionar o nosso cuidado juntos?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Acompanhamento estruturado para você evoluir com segurança a cada sessão.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <Card className="landing-card relative flex flex-col overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="flex size-8 items-center justify-center rotate-45 rounded-md bg-primary text-primary-foreground font-extrabold shadow-xs">
                <span className="-rotate-45 text-xs">1</span>
              </div>
            </div>

            <CardHeader className="pt-6 pb-2">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                <ClipboardCheck className="size-5" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Passo 1
              </span>
              <CardTitle className="text-base sm:text-lg font-bold uppercase tracking-tight text-foreground mt-0.5">
                AVALIAÇÃO FUNCIONAL
              </CardTitle>
            </CardHeader>

            <CardContent className="pb-6">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Farei uma avaliação detalhada para entender exatamente as suas necessidades, e juntos, estruturarmos um plano de tratamento.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="landing-card relative flex flex-col overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="flex size-8 items-center justify-center rotate-45 rounded-md bg-primary text-primary-foreground font-extrabold shadow-xs">
                <span className="-rotate-45 text-xs">2</span>
              </div>
            </div>

            <CardHeader className="pt-6 pb-2">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                <HeartHandshake className="size-5" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Passo 2
              </span>
              <CardTitle className="text-base sm:text-lg font-bold uppercase tracking-tight text-foreground mt-0.5">
                UMA PARCERIA DE CUIDADO
              </CardTitle>
            </CardHeader>

            <CardContent className="pb-6">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A sua evolução é uma via de mão dupla! O meu empenho estará 100% com você, e o seu comprometimento e constância serão o combustível para alcançarmos os melhores resultados.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="landing-card relative flex flex-col overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="flex size-8 items-center justify-center rotate-45 rounded-md bg-primary text-primary-foreground font-extrabold shadow-xs">
                <span className="-rotate-45 text-xs">3</span>
              </div>
            </div>

            <CardHeader className="pt-6 pb-2">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                <Repeat2 className="size-5" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Passo 3
              </span>
              <CardTitle className="text-base sm:text-lg font-bold uppercase tracking-tight text-foreground mt-0.5">
                RITMO DOS ATENDIMENTOS
              </CardTitle>
            </CardHeader>

            <CardContent className="pb-6">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Para conquistarmos uma recuperação sólida, o ideal é estarmos juntos de 2 ou 3 vezes por semana. Além disso, deixarei algumas atividades quando necessário para você praticar nos dias em que não nos vermos.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
