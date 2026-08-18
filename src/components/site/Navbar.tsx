import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import lotusWhite from "@/assets/lotus-white.png.asset.json";
import { ThemeToggle, useTheme } from "./theme";
import { LOGIN_URL, navLinks } from "./site-data";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dense = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dense ? "glass-dark" : "glass-dark-soft"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-2 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center">
          <span className="block h-7 overflow-hidden sm:h-8">
            <img
              src={lotusWhite.url}
              alt="Lotus Accounting"
              width={260}
              height={78}
              className="h-11 w-auto -translate-y-2 sm:h-12"
            />
          </span>
        </Link>

        <ul className="ml-auto hidden items-center gap-6 text-sm text-white/80 xl:flex">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`transition-colors duration-300 ${
                    active ? "text-sand" : "hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center gap-3 xl:ml-0">
          <ThemeToggle theme={theme} onToggle={toggle} onLight={false} />
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noreferrer"
            className="glass-cta hidden rounded-full px-5 py-2.5 text-sm font-medium text-white sm:inline-flex"
          >
            Entrar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white transition-colors xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-dark border-t border-white/10 px-5 pb-6 pt-2 xl:hidden">
          <ul className="grid gap-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-white/85 transition-colors hover:bg-white/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noreferrer"
            className="glass-cta mt-3 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white"
          >
            Entrar
          </a>
        </div>
      ) : null}
    </header>
  );
}
