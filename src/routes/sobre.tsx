import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import building from "@/assets/office-warm.jpg";

const title = "Sobre a Lotus | Contabilidade e inteligência de negócios";
const description =
  "Conheça a Lotus Contabilidade: expertise contábil, tecnologia e business intelligence para empresas em Brasília e todo o Brasil.";

export const Route = createFileRoute("/sobre")({
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
        eyebrow="Sobre nós"
        title="Contabilidade desenhada para empresas modernas"
        description="Expertise técnica, tecnologia aplicada e proximidade real com cada cliente."
        image={building}
      />
      <About />
      <WhyUs />
    </SiteLayout>
  );
}
