import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, body, children }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--line)] pt-32">
      <Reveal className="container-shell grid gap-8 py-16 md:py-24">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.65fr] lg:items-end">
          <h1 className="font-display page-title max-w-[11ch]">{title}</h1>
          {body ? <p className="body-large max-w-[35rem] lg:pb-2">{body}</p> : null}
        </div>
        {children}
      </Reveal>
    </section>
  );
}
