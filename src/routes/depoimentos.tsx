import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Testimonials } from "@/components/site/Testimonials";
import image from "@/assets/about-1.jpg";

const title = "Depoimentos de clientes | Lotus Contabilidade";
const description =
  "Empresas que decidem com base em dados contam como a Lotus apoia crescimento, conformidade e previsibilidade financeira.";

export const Route = createFileRoute("/depoimentos")({
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
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Depoimentos"
        title="A confiança de empresas que valorizam crescimento"
        description="Resultados relatados por clientes que acompanham de perto os próprios números."
        image={image}
      />
      <Testimonials />
    </SiteLayout>
  );
}
