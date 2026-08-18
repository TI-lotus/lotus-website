import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "./primitives";

const plans = [
  {
    name: "Starter",
    price: "R$ 590",
    period: "/mês",
    description: "Ideal para autônomos e pequenas empresas.",
    features: [
      "Escrituração contábil mensal",
      "Apuração de impostos",
      "Obrigações acessórias",
      "Suporte por e-mail e WhatsApp",
      "Portal do cliente",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "R$ 1.290",
    period: "/mês",
    description: "Ideal para empresas em crescimento.",
    features: [
      "Tudo do plano Starter",
      "Planejamento tributário anual",
      "Gestão de folha de pagamento",
      "Relatórios gerenciais mensais",
      "Reunião estratégica trimestral",
      "Especialista dedicado",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Soluções sob medida para organizações maiores.",
    features: [
      "Tudo do plano Business",
      "CFO as a Service",
      "Painéis de business intelligence",
      "Orçamento e projeções financeiras",
      "Suporte a auditorias e due diligence",
      "Atendimento prioritário",
    ],
    highlight: false,
  },
];

const NAVY = "#070f32";
const GOLD = "#d2b58a";

export function Pricing() {
  return (
    <section id="planos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Planos"
          title="Planos claros, sem surpresas"
          description="Escolha o nível de acompanhamento que o seu momento exige — a estrutura acompanha o crescimento."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 100} className="h-full">
              <article
                className="card-premium relative flex h-full flex-col p-8 sm:p-9"
                style={
                  plan.highlight
                    ? { background: "#ffffff", boxShadow: `inset 0 0 0 1px ${GOLD}` }
                    : undefined
                }
              >
                {plan.highlight ? (
                  <span
                    className="absolute right-8 top-8 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em]"
                    style={{ background: GOLD, color: NAVY }}
                  >
                    Mais popular
                  </span>
                ) : null}

                <h3
                  className="font-display text-sm uppercase tracking-[0.2em]"
                  style={plan.highlight ? { color: NAVY } : undefined}
                  {...(plan.highlight ? {} : { className: "font-display text-sm uppercase tracking-[0.2em] text-bronze" })}
                >
                  {plan.name}
                </h3>
                <p
                  className="mt-5 font-display text-4xl font-semibold text-foreground"
                  style={plan.highlight ? { color: NAVY } : undefined}
                >
                  {plan.price}
                  <span
                    className="text-base font-normal text-muted-foreground"
                    style={plan.highlight ? { color: "#516989" } : undefined}
                  >
                    {plan.period}
                  </span>
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  style={plan.highlight ? { color: "#516989" } : undefined}
                >
                  {plan.description}
                </p>

                <ul className="mt-8 grid gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-foreground"
                      style={plan.highlight ? { color: NAVY } : undefined}
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-bronze"
                        style={plan.highlight ? { color: GOLD } : undefined}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/orcamento"
                  className="mt-9 inline-flex w-full items-center justify-center rounded-full bg-bronze px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                  style={plan.highlight ? { background: NAVY, color: "#ffffff" } : undefined}
                >
                  {plan.name === "Enterprise" ? "Falar com especialista" : "Começar agora"}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
