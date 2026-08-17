import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { News } from "@/components/site/News";
import image from "@/assets/news-1.jpg";

const title = "Notícias e conteúdo | Lotus Contabilidade";
const description =
  "Análises objetivas sobre contabilidade, tributos, finanças e estratégia empresarial, com newsletter mensal.";

export const Route = createFileRoute("/noticias/")({
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
        eyebrow="Notícias"
        title="Conteúdo para decisões melhores"
        description="Acompanhe mudanças tributárias, boas práticas financeiras e leitura de indicadores."
        image={image}
      />
      <News />
    </SiteLayout>
  );
}
