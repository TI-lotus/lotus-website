import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { contact } from "./site-data";

const details = [
  { icon: MapPin, label: "Endereço", value: contact.address },
  { icon: Phone, label: "Telefone", value: contact.phone, href: contact.phoneHref },
  { icon: Mail, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
];

export function Contact() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contato"
          title="Fale com a nossa equipe"
          description="Atendimento presencial em Águas Claras (DF) e remoto para empresas de todo o Brasil."
          align="left"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div className="grid gap-4">
              {details.map((item) => (
                <div key={item.label} className="soft-panel flex gap-4 rounded-3xl p-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-bronze/12 text-bronze">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1.5 block text-sm leading-relaxed text-foreground transition-colors hover:text-bronze"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="soft-panel rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-bronze/12 text-bronze">
                    <Clock className="h-4 w-4" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Horário de funcionamento
                  </p>
                </div>
                <ul className="mt-5 grid gap-2 text-sm">
                  {contact.hours.map((item) => (
                    <li key={item.day} className="flex items-center justify-between gap-4">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="font-medium text-foreground">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-bronze px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-[2rem]">
              <iframe
                title="Mapa da localização da Lotus Contabilidade"
                src={contact.mapsQuery}
                loading="lazy"
                className="h-full min-h-[420px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
