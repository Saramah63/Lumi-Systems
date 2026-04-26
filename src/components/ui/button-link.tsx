import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-[var(--foreground)] text-white hover:-translate-y-0.5 hover:bg-[#20323d]",
  secondary:
    "border border-[var(--line)] bg-white/70 text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[rgba(39,111,141,0.28)] hover:bg-white",
  ghost: "text-[var(--blue-strong)] hover:text-[var(--foreground)]",
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
