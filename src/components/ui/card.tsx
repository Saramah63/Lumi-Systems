import type { ReactNode } from "react";

type PremiumCardProps = {
  title: string;
  body?: string;
  children?: ReactNode;
  index?: string;
  variant?: "feature" | "partner" | "minimal" | "compact";
  marker?: "index" | "dot" | "none";
  className?: string;
};

const variants = {
  feature: "min-h-52",
  partner: "min-h-44",
  minimal: "min-h-48",
  compact: "min-h-0",
};

export function PremiumCard({
  title,
  body,
  children,
  index,
  variant = "feature",
  marker,
  className = "",
}: PremiumCardProps) {
  const resolvedMarker = marker ?? (index ? "index" : "none");

  return (
    <article
      className={`soft-card group grid gap-4 p-6 transition duration-300 will-change-transform hover:-translate-y-0.5 hover:border-[rgba(39,111,141,0.18)] hover:bg-white/86 hover:shadow-[0_24px_70px_rgba(20,33,42,0.09)] md:p-7 ${variants[variant]} ${className}`}
    >
      {resolvedMarker === "index" && index ? <span className="text-sm font-semibold text-[var(--blue-strong)]">{index}</span> : null}
      {resolvedMarker === "dot" ? <span className="h-2.5 w-2.5 rounded-full bg-[rgba(111,182,215,0.82)]" /> : null}
      <h3 className="card-title">{title}</h3>
      {body ? <p className="card-body">{body}</p> : null}
      {children}
    </article>
  );
}
