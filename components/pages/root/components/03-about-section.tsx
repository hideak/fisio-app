import { Activity, Bone, GraduationCap, Sparkles } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="sobre" className="landing-section bg-muted/30 py-12">
      <div className="landing-container">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Photo Column */}
          <div className="flex justify-center lg:col-span-4 order-2 lg:order-1">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">

              {/* Background badge decorative shape */}
              <div className="absolute -inset-2 rounded-3xl bg-primary/10 -rotate-2 -z-10" />

              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <Image
                  src="/images/profile-02.jpg"
                  alt="Dra. Shankefany Kenny Arita, fisioterapeuta domiciliar"
                  width={500}
                  height={700}
                  className="h-auto w-full object-cover object-center"
                />
                <div className="p-4 bg-card border-t border-border/80">
                  <p className="font-bold text-sm text-foreground">
                    Dra. Shankefany Kenny Arita
                  </p>
                  <p className="text-xs text-primary font-medium mt-0.5">
                    CREFITO 409624-F • Fisioterapeuta Domiciliar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text and Qualifications Column */}
          <div className="flex flex-col lg:col-span-8 order-1 lg:order-2">

            {/* Slide 02 Header Banner / Tag */}
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Olá! Tudo bem?<br />
              Que bom ter você por aqui!
            </h2>

            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Sou a <strong className="text-foreground">Dra. Shankefany Kenny Arita</strong>. Minha missão é cuidar da sua saúde e do seu bem-estar no conforto do seu lar.
              Sou graduada em Fisioterapia pela Unileste (Centro Universitário Católica do Leste de Minas Gerais), desde 2024, com experiência em reabilitação trauma-ortopédica, Pilates e Dry Needling.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Credential 1 */}
              <div className="landing-card flex flex-col bg-card/80 p-3.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <GraduationCap className="size-3.5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground">
                    Graduada em Fisioterapia
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Formação pelo Unileste (2024).
                </p>
              </div>

              {/* Credential 2 */}
              <div className="landing-card flex flex-col bg-card/80 p-3.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Bone className="size-3.5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground">
                    Reabilitação Trauma-Ortopédica
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tratamento de fraturas, lesões musculares e pós-operatórios.
                </p>
              </div>

              {/* Credential 3 */}
              <div className="landing-card flex flex-col bg-card/80 p-3.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Activity className="size-3.5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground">
                    Instrutora de Pilates
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fortalecimento do core, postura e mobilidade corporal.
                </p>
              </div>

              {/* Credential 4 */}
              <div className="landing-card flex flex-col bg-card/80 p-3.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Sparkles className="size-3.5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground">
                    Dry Needling
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Agulhamento a seco para alívio rápido de pontos de dor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
