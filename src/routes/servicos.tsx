import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Services } from "@/components/site/Services";
import building from "@/assets/about-2.jpg";

const title = "Serviços | Lotus Contabilidade";
const description =
  "Contabilidade empresarial, planejamento tributário, folha de pagamento, consultoria financeira, BI e CFO as a Service.";

export const Route = createFileRoute("/servicos")({
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
        eyebrow="Serviços"
        title="Soluções completas para a gestão financeira"
        description="Do compliance contábil à direção financeira estratégica, com um time dedicado ao seu contexto."
        image={building}
      />
      <Services />
    </SiteLayout>
  );
}
