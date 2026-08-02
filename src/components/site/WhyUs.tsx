import { useEffect, useRef, useState } from "react";
import { Cpu, HeartHandshake, MessageSquare, Target, UserCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const stats = [
  { value: 18, suffix: "+", label: "Anos de experiência" },
  { value: 640, suffix: "+", label: "Empresas atendidas" },
  { value: 99.8, suffix: "%", label: "Conformidade fiscal" },
  { value: 97, suffix: "%", label: "Satisfação dos clientes" },
];

const advantages = [
  { icon: HeartHandshake, title: "Consultoria personalizada" },
  { icon: Cpu, title: "Processos guiados por tecnologia" },
  { icon: Target, title: "Insights financeiros estratégicos" },
  { icon: UserCheck, title: "Especialistas dedicados" },
  { icon: MessageSquare, title: "Comunicação transparente" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(value * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const formatted = Number.isInteger(value) ? Math.round(display) : display.toFixed(1);

  return (
    <p ref={ref} className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
      {formatted}
      <span className="text-steel">{suffix}</span>
    </p>
  );
}

export function WhyUs() {
  return (
    <section className="surface-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Por que nós"
          title="Por que empresas confiam em nós"
          description="Resultados construídos com método, tecnologia e proximidade real com cada cliente."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <div className="card-premium h-full p-8 text-center">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {advantages.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card px-5 py-5 transition-colors duration-300 hover:border-steel/50">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-bronze">
                  <item.icon className="h-4 w-4" />
                </span>
                <p className="min-w-0 text-sm font-medium leading-snug text-foreground">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
