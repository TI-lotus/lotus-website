import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import { Reveal } from "./primitives";
import { Check } from "lucide-react";

const pillars = [
  "Expertise contábil consolidada",
  "Tecnologia aplicada à rotina financeira",
  "Business intelligence para decisões",
];

export function About() {
  return (
    <section id="sobre" className="surface-soft py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Sobre nós</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.12] text-foreground sm:text-4xl md:text-[2.75rem]">
            Contabilidade desenhada para empresas modernas
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Nossa missão é transformar informação financeira em decisões estratégicas. Ao combinar
            expertise contábil, tecnologia e inteligência de negócios, ajudamos empreendedores a
            ganhar clareza, reduzir incertezas e focar em crescimento sustentável.
          </p>
          <ul className="mt-8 grid gap-3">
            {pillars.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary text-steel">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-5 grid-rows-6 gap-4 sm:gap-5">
            <img
              src={about1}
              alt="Consultores analisando relatórios financeiros"
              width={1024}
              height={1280}
              loading="lazy"
              className="col-span-3 row-span-6 h-full w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            <img
              src={about2}
              alt="Análise de indicadores em painel digital"
              width={1024}
              height={768}
              loading="lazy"
              className="col-span-2 row-span-3 h-full w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
            <div className="col-span-2 row-span-3 flex flex-col justify-center rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="font-display text-4xl font-semibold text-foreground">+18</p>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">
                anos apoiando decisões financeiras de empresas em crescimento.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
