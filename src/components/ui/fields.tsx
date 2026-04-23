import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";

const fieldClass =
  "rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--blue)]";

export function Input(props: ComponentPropsWithoutRef<"input">) {
  return <input {...props} className={cn(fieldClass, props.className)} />;
}

export function Textarea(props: ComponentPropsWithoutRef<"textarea">) {
  return <textarea {...props} className={cn(fieldClass, "min-h-36", props.className)} />;
}

export function Select(props: ComponentPropsWithoutRef<"select">) {
  return <select {...props} className={cn(fieldClass, props.className)} />;
}
