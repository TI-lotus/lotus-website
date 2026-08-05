import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Calculator,
  LineChart,
  Receipt,
  Users,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "./primitives";

const services = [
  {
    icon: Calculator,
    title: "Contabilidade empresarial",
    text: "Escrituração completa, demonstrações confiáveis e obrigações em dia, com rotina organizada e previsível.",
  },
  {
    icon: Receipt,
    title: "Planejamento tributário",
    text: "Análise de regimes e cenários para reduzir carga fiscal dentro da legalidade e com segurança técnica.",
  },
  {
    icon: LineChart,
    title: "Consultoria financeira",
    text: "Estrutura de fluxo de caixa, margens e indicadores para sustentar decisões de investimento e preço.",
  },
  {
    icon: Users,
    title: "Gestão de folha de pagamento",
    text: "Admissões, encargos e obrigações trabalhistas conduzidos com precisão e total conformidade.",
  },
  {
    icon: BarChart3,
    title: "Relatórios de business intelligence",
    text: "Painéis e relatórios gerenciais que traduzem dados contábeis em leitura clara do negócio.",
  },
  {
    icon: Briefcase,
    title: "CFO as a Service",
    text: "Direção financeira sob demanda para orçamento, projeções e acompanhamento de metas.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções completas para a gestão financeira"
          description="Do compliance contábil à direção financeira estratégica, com um time dedicado ao seu contexto."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <article className="card-premium surface-soft group h-full p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-bronze/12 text-bronze transition-colors duration-300 group-hover:bg-bronze group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                <Link
                  to="/orcamento"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-bronze transition-all duration-300 group-hover:gap-2.5"
                >
                  Saiba mais
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
