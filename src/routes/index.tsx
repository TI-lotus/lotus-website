import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Reveal } from "@/components/site/primitives";

const title = "Lotus Contabilidade | Transformando números em decisões";
const description =
  "Contabilidade, planejamento tributário e inteligência de negócios em Águas Claras, Brasília. Solicite uma consultoria gratuita.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout overlay>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div
              className="rounded-[2rem] px-8 py-12 sm:px-14 sm:py-16"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              <h2 className="max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
                Pronto para decidir com números claros?
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                Conheça nossos planos, veja depoimentos de clientes ou solicite um orçamento
                personalizado para a sua empresa.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center rounded-full bg-sand px-7 py-3.5 text-sm font-medium text-[#3a3125] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Solicitar orçamento
                </Link>
                <Link
                  to="/planos"
                  className="glass-cta inline-flex items-center rounded-full px-7 py-3.5 text-sm font-medium text-white"
                >
                  Ver planos
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
