import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { QuoteForm } from "@/components/site/QuoteForm";
import image from "@/assets/news-3.jpg";

const title = "Solicitar orçamento | Lotus Contabilidade";
const description =
  "Conte sobre a sua empresa e receba uma proposta contábil personalizada da Lotus em até 1 dia útil.";

export const Route = createFileRoute("/orcamento")({
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
        eyebrow="Orçamento"
        title="Solicite um orçamento personalizado"
        description="Montamos uma proposta alinhada ao porte, ao segmento e ao momento da sua empresa."
        image={image}
      />
      <QuoteForm />
    </SiteLayout>
  );
}
