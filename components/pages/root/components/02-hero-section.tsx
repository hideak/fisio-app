import { buttonVariants } from "@/components/ui/button";
import { Award, CalendarCheck, Heart, Home, MessageSquare } from "lucide-react";

export function HeroSection() {
  return (
    <section className="landing-section relative overflow-hidden py-12">
      {/* Decorative background gradients using primary brand hue */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 -z-10 size-[360px] rounded-full bg-primary/5 blur-3xl" />

      <div className="landing-container">
        <div className="flex justify-center">

          {/* Left Column: Copy & CTAs */}
          <div className="flex max-w-3xl flex-col items-center text-center lg:items-start lg:text-left">

            {/* Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:leading-[1.15]">
              Fisioterapia especializada no{" "}
              <span className="text-primary underline decoration-primary/30 underline-offset-4">
                conforto do seu lar
              </span>.
            </h1>

            {/* Subheading */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Atendimento domiciliar personalizado para alívio de dores, reabilitação física e recuperação de movimentos.
            </p>

            {/* Single clean CTA */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="/contato"
                className={buttonVariants({ size: "lg", className: "font-semibold gap-2 shadow-xs" })}
              >
                <MessageSquare className="size-4" />
                <span>Agendar Avaliação</span>
              </a>
              <a
                href="#planos"
                className={buttonVariants({ variant: "secondary", size: "lg", className: "font-semibold gap-2 shadow-xs" })}
              >
                <Heart className="size-4" />
                <span>Ver Planos</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-10 grid w-full grid-cols-1 gap-4 border-t border-border/60 pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="rounded-lg bg-muted p-2 text-primary">
                  <Home className="size-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-foreground">100% no seu Lar</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="rounded-lg bg-muted p-2 text-primary">
                  <Award className="size-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-foreground">Atendimento humanizado</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="rounded-lg bg-muted p-2 text-primary">
                  <CalendarCheck className="size-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-foreground">Planos Individualizados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
