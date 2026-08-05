import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import { Reveal, SectionHeading } from "./primitives";

const articles = [
  {
    image: news1,
    category: "Tributário",
    title: "Reforma tributária: o que muda na rotina das empresas",
    text: "Um guia direto sobre prazos, transição de regimes e os pontos que exigem atenção do time financeiro.",
  },
  {
    image: news2,
    category: "Estratégia",
    title: "Planejamento financeiro para o próximo ciclo de crescimento",
    text: "Como estruturar orçamento, metas e indicadores antes de expandir operação ou equipe.",
  },
  {
    image: news3,
    category: "Business Intelligence",
    title: "Indicadores que todo gestor deveria acompanhar mensalmente",
    text: "Da margem de contribuição ao ciclo de caixa: os números que revelam a saúde real do negócio.",
  },
];

export function News() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    const value = email.trim();
    if (!value || value.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      toast.error("Informe um e-mail válido.");
      return;
    }
    toast.success("Inscrição confirmada. Obrigado!");
    setEmail("");
  };

  return (
    <section id="noticias" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Notícias"
          title="Conteúdo para decisões melhores"
          description="Análises objetivas sobre contabilidade, tributos, finanças e estratégia empresarial."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.title} delay={index * 100} className="h-full">
              <article className="card-premium group flex h-full flex-col overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    width={1024}
                    height={720}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow">{article.category}</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.text}
                  </p>
                  <a
                    href="#noticias"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-bronze transition-all duration-300 group-hover:gap-2.5"
                  >
                    Ler mais
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div
            className="mt-16 overflow-hidden rounded-[2rem] p-10 sm:p-14"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">Fique por dentro</h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75">
                  Receba insights sobre contabilidade, tributação, finanças e estratégia empresarial
                  diretamente no seu e-mail.
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="sr-only" htmlFor="newsletter-email">
                  Endereço de e-mail
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Endereço de e-mail"
                  className="w-full rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm text-white placeholder:text-white/55 backdrop-blur-md outline-none transition-colors focus:border-white/50"
                />
                <button type="submit" className="glass-cta rounded-full px-7 py-3.5 text-sm font-medium text-white">
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
