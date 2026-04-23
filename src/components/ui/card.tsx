import type { ReactNode } from "react";

type PremiumCardProps = {
  title: string;
  body?: string;
  children?: ReactNode;
  index?: string;
  variant?: "feature" | "partner" | "minimal";
};

const variants = {
  feature: "min-h-56",
  partner: "min-h-48",
  minimal: "min-h-52",
};

export function PremiumCard({ title, body, children, index, variant = "feature" }: PremiumCardProps) {
  return (
    <article
      className={`soft-card group grid gap-5 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_86px_rgba(20,33,42,0.1)] ${variants[variant]}`}
    >
      {index ? <span className="text-sm font-extrabold text-[var(--blue-strong)]">{index}</span> : null}
      <h3 className="text-xl font-extrabold leading-tight text-[var(--foreground)]">{title}</h3>
      {body ? <p className="leading-7 text-[var(--muted)]">{body}</p> : null}
      {children}
    </article>
  );
}
