import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Contact } from "@/components/site/Contact";
import image from "@/assets/building.jpg";

const title = "Contato | Lotus Contabilidade em Águas Claras, Brasília";
const description =
  "Fale com a Lotus: QS 1, Torre 3, Sala 1706 — Águas Claras, Brasília — DF. Telefone (61) 98333-9432 e contabilidade@lotuscont.com.br.";

export const Route = createFileRoute("/contato")({
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
        eyebrow="Contato"
        title="Vamos conversar sobre a sua empresa"
        description="Atendimento presencial em Águas Claras e remoto para todo o Brasil."
        image={image}
      />
      <Contact />
    </SiteLayout>
  );
}
