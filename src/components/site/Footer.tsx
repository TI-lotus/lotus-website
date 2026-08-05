import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import lotusWhite from "@/assets/lotus-white.png.asset.json";
import { contact, navLinks } from "./site-data";

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
              width={300}
              height={90}
              loading="lazy"
              className="h-16 w-auto sm:h-20"
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
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sand/25 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-sand">Navegação</h3>
            <ul className="mt-5 grid gap-3 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-sand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-sand">Contato</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-white/70">
              <li>{contact.addressShort}</li>
              <li>
                <a href={contact.phoneHref} className="transition-colors hover:text-sand">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-sand">
                  {contact.email}
                </a>
              </li>
              <li>{contact.hoursShort}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 text-xs text-white/45">
          © {new Date().getFullYear()} Lotus Contabilidade. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
