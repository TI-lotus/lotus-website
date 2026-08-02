import { Quote } from "lucide-react";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";
import person3 from "@/assets/person-3.jpg";
import { Reveal, SectionHeading } from "./primitives";

const testimonials = [
  {
    name: "Marina Duarte",
    role: "Diretora Financeira, Vértice Indústria",
    image: person1,
    text: "A leitura mensal dos indicadores mudou a forma como decidimos preço e investimento. Ganhamos previsibilidade e reduzimos 14% do custo tributário em um ano.",
  },
  {
    name: "Rafael Menezes",
    role: "Fundador, Norvia Tech",
    image: person2,
    text: "Respostas rápidas e orientação clara em cada etapa da nossa expansão. É um time que entende o negócio, não apenas as obrigações contábeis.",
  },
  {
    name: "Paulo Ferreira",
    role: "CEO, Grupo Andrade Serviços",
    image: person3,
    text: "A estruturação do fluxo de caixa e os relatórios gerenciais nos deram base para abrir duas novas unidades com segurança. Parceria estratégica de verdade.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="surface-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="A confiança de empresas que valorizam crescimento"
          description="Resultados relatados por clientes que acompanham de perto os próprios números."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 100} className="h-full">
              <article className="card-premium flex h-full flex-col p-8">
                <Quote className="h-7 w-7 text-steel/60" />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground">{item.text}</p>
                <div className="mt-7 flex min-w-0 items-center gap-4 border-t border-border pt-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={640}
                    height={640}
                    loading="lazy"
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
