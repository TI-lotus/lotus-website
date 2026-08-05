import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Pricing } from "@/components/site/Pricing";
import image from "@/assets/news-2.jpg";

const title = "Planos e preços | Lotus Contabilidade";
const description =
  "Planos Starter, Business e Enterprise: escolha o nível de acompanhamento contábil e financeiro que a sua empresa precisa.";

export const Route = createFileRoute("/planos")({
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
        eyebrow="Planos"
        title="Planos claros, sem surpresas"
        description="A estrutura de atendimento acompanha o crescimento da sua empresa."
        image={image}
      />
      <Pricing />
    </SiteLayout>
  );
}
