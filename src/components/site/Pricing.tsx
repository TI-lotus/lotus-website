import { Check } from "lucide-react";
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
                className={`card-premium relative flex h-full flex-col p-8 sm:p-9 ${
                  plan.highlight ? "lg:-mt-4 lg:mb-4" : ""
                }`}
                style={
                  plan.highlight
                    ? {
                        backgroundImage: "var(--gradient-accent)",
                        borderColor: "transparent",
                      }
                    : undefined
                }
              >
                {plan.highlight ? (
                  <span className="absolute right-8 top-8 rounded-full bg-white/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    Mais popular
                  </span>
                ) : null}

                <h3
                  className={`font-display text-sm uppercase tracking-[0.2em] ${
                    plan.highlight ? "text-white/70" : "text-bronze"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-5 font-display text-4xl font-semibold ${
                    plan.highlight ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.price}
                  <span
                    className={`text-base font-normal ${
                      plan.highlight ? "text-white/60" : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </span>
                </p>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    plan.highlight ? "text-white/75" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="mt-8 grid gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        plan.highlight ? "text-white/85" : "text-foreground"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.highlight ? "text-white" : "text-bronze"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#orcamento"
                  className={`mt-9 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "glass-cta text-white"
                      : "bg-bronze text-white hover:opacity-90"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Falar com especialista" : "Começar agora"}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
