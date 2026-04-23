import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  surface?: "default" | "mist" | "sand";
};

const surfaces = {
  default: "",
  mist: "bg-[var(--mist)]",
  sand: "bg-[var(--sand)]",
};

export function SectionWrapper({ children, className, surface = "default" }: SectionWrapperProps) {
  return <section className={cn("section-space", surfaces[surface], className)}>{children}</section>;
}
