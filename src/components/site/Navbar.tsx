import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import lotusBlack from "@/assets/lotus-black.png.asset.json";
import lotusWhite from "@/assets/lotus-white.png.asset.json";
import { ThemeToggle, useTheme } from "./theme";

const links = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Notícias", href: "#noticias" },
  { label: "Contato", href: "#contato" },
];

const LOGIN_URL = "https://lotusaccounting.lovable.app/";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  const logo = solid ? (theme === "dark" ? lotusWhite.url : lotusBlack.url) : lotusWhite.url;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "glass-panel border-b shadow-[var(--shadow-soft)]" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-4 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center">
          <img
            src={logo}
            alt="Lotus Accounting"
            width={160}
            height={48}
            className="h-8 w-auto transition-opacity duration-500 sm:h-9"
          />
        </a>

        <ul
          className={`ml-auto hidden items-center gap-7 text-sm lg:flex ${
            solid ? "text-muted-foreground" : "text-white/85"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors duration-300 ${
                  solid ? "hover:text-foreground" : "hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <ThemeToggle theme={theme} onToggle={toggle} onLight={solid} />
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noreferrer"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 sm:inline-flex ${
              solid
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "glass-cta text-white"
            }`}
          >
            Entrar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors lg:hidden ${
              solid ? "border-border text-foreground" : "border-white/25 text-white"
            }`}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-panel border-t px-5 pb-6 pt-2 lg:hidden">
          <ul className="grid gap-1 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Entrar
          </a>
        </div>
      ) : null}
    </header>
  );
}
