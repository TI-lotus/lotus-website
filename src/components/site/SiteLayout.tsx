import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({
  children,
  overlay = false,
}: {
  children: ReactNode;
  overlay?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar overlay={overlay} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, black 62%, transparent) 0%, color-mix(in oklab, var(--bronze) 72%, transparent) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-sand">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.1] text-white sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
