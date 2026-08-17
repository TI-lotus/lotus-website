import { Building2, Compass, Handshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import officeWarm from "@/assets/office-warm.jpg";

const values = [
  {
    icon: ShieldCheck,
    title: "Rigor técnico",
    text: "Cada entrega passa por revisão dupla: conformidade fiscal e consistência gerencial.",
  },
  {
    icon: Compass,
    title: "Clareza",
    text: "Relatórios em linguagem de negócio, sem jargão contábil, com o que importa em destaque.",
  },
  {
    icon: Handshake,
    title: "Proximidade",
    text: "Um contador responsável por cliente, com canal direto e resposta no mesmo dia útil.",
  },
  {
    icon: Sparkles,
    title: "Inovação",
    text: "Automação de rotinas, integrações bancárias e dashboards atualizados continuamente.",
  },
];

const timeline = [
  { year: "2008", text: "Nasce a Lotus, com foco em contabilidade para pequenas empresas do DF." },
  { year: "2014", text: "Estruturação da área de planejamento tributário e consultoria societária." },
  { year: "2019", text: "Digitalização completa dos processos e atendimento remoto em todo o Brasil." },
  { year: "2023", text: "Criação da frente de Business Intelligence e CFO as a Service." },
  { year: "Hoje", text: "Mais de 640 empresas acompanhadas por um time multidisciplinar." },
];

const expertise = [
  { icon: Building2, title: "Segmentos atendidos", text: "Serviços, tecnologia, saúde, indústria, comércio, construção e holdings familiares." },
  { icon: Users, title: "Time multidisciplinar", text: "Contadores, analistas fiscais, especialistas em folha e analistas de dados." },
];

export function AboutDetails() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nossa história"
          title="Quase duas décadas ao lado de quem empreende"
          description="Começamos como um escritório contábil tradicional e evoluímos para um parceiro de gestão financeira, unindo técnica, tecnologia e leitura de negócio."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <img
              src={officeWarm}
              alt="Escritório da Lotus em Águas Claras"
              width={1600}
              height={1067}
              loading="lazy"
              className="h-full w-full rounded-3xl object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            <ol className="grid gap-5">
              {timeline.map((item) => (
                <li key={item.year} className="flex gap-5">
                  <span className="font-display w-16 shrink-0 text-sm font-semibold text-bronze">
                    {item.year}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <div className="card-premium h-full p-7">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-bronze/12 text-bronze">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="h-full">
              <div className="soft-panel flex h-full items-start gap-4 rounded-2xl p-7">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-bronze/12 text-bronze">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
