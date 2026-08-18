import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode; overlay?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
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
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden pb-24 pt-36">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
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
