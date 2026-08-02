import { Instagram, Linkedin, Youtube } from "lucide-react";
import lotusWhite from "@/assets/lotus-white.png.asset.json";

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Notícias", href: "#noticias" },
  { label: "Orçamento", href: "#orcamento" },
];

const socials = [
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="bg-[#070f32] pt-16 pb-10 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <img
              src={lotusWhite.url}
              alt="Lotus Accounting"
              width={180}
              height={54}
              loading="lazy"
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Contabilidade, consultoria e inteligência de negócios para empresas que decidem com
              base em dados.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-white/50">
              Navegação
            </h3>
            <ul className="mt-5 grid gap-3 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-white/50">
              Contato
            </h3>
            <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-white/70">
              <li>Av. Brigadeiro Faria Lima, 3.477 — 12º andar, São Paulo — SP</li>
              <li>+55 (11) 4002-8922</li>
              <li>contato@lotusaccounting.com.br</li>
              <li>Seg. a sex., 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/12 pt-7 text-xs text-white/45">
          © {new Date().getFullYear()} Lotus Accounting. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
