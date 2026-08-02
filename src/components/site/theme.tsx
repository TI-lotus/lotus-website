import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("lotus-theme") as Theme | null;
    const initial =
      stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      window.localStorage.setItem("lotus-theme", next);
      return next;
    });
  };

  return { theme, toggle };
}

export function ThemeToggle({
  theme,
  onToggle,
  onLight = false,
}: {
  theme: Theme;
  onToggle: () => void;
  onLight?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 hover:scale-105 ${
        onLight
          ? "border-border bg-secondary text-foreground"
          : "border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
      }`}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
