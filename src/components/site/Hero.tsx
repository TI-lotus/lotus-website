import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.18, 120));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden">
      <img
        src={heroImage}
        alt="Profissionais colaborando em um escritório moderno"
        width={1920}
        height={1200}
        className="absolute inset-0 h-[115%] w-full object-cover"
        style={{ transform: `translate3d(0, -${offset}px, 0)` }}
      />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pb-24 pt-36 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs tracking-[0.18em] text-white/85 uppercase backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Contabilidade + Inteligência de Negócios
          </span>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.06] text-white sm:text-6xl lg:text-7xl">
            Transformando números em decisões
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Ajudamos empresas a transformar contabilidade, informação financeira e planejamento
            estratégico em decisões de negócio seguras — com clareza, tecnologia e acompanhamento
            especializado.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#orcamento"
              className="glass-cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white"
            >
              Consultoria gratuita
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicos"
              className="glass-cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white"
              style={{ background: "color-mix(in oklab, white 8%, transparent)" }}
            >
              Explorar serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
