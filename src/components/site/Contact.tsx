import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const details = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Brigadeiro Faria Lima, 3.477 — 12º andar\nItaim Bibi, São Paulo — SP",
  },
  { icon: Phone, label: "Telefone", value: "+55 (11) 4002-8922" },
  { icon: Mail, label: "E-mail", value: "contato@lotusaccounting.com.br" },
  {
    icon: Clock,
    label: "Horário de atendimento",
    value: "Segunda a sexta, 9h às 18h\nSábados, 9h às 12h",
  },
];

export function Contact() {
  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar sobre a sua empresa"
          align="left"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div className="grid gap-4">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-3xl border border-border bg-card p-6 transition-colors duration-300 hover:border-steel/50"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-secondary text-steel">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full min-h-[380px] overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-soft)]">
              <iframe
                title="Mapa da localização da Lotus Accounting"
                src="https://www.google.com/maps?q=Av.%20Brigadeiro%20Faria%20Lima%203477%20S%C3%A3o%20Paulo&output=embed"
                loading="lazy"
                className="h-full min-h-[380px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
