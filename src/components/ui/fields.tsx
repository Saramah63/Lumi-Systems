import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";

const fieldClass =
  "min-h-[56px] rounded-[18px] border border-[rgba(20,33,42,0.12)] bg-[rgba(255,255,255,0.72)] px-4 py-3 text-[16px] text-[var(--foreground)] outline-none transition focus:border-[rgba(39,111,141,0.7)] focus:shadow-[0_0_0_4px_rgba(111,182,215,0.14)]";

export function Input(props: ComponentPropsWithoutRef<"input">) {
  return <input {...props} className={cn(fieldClass, props.className)} />;
}

export function Textarea(props: ComponentPropsWithoutRef<"textarea">) {
  return <textarea {...props} className={cn(fieldClass, "min-h-[150px] resize-y py-3.5", props.className)} />;
}

export function Select(props: ComponentPropsWithoutRef<"select">) {
  return (
    <select
      {...props}
      className={cn(fieldClass, "w-full appearance-none bg-[rgba(255,255,255,0.72)] pr-10", props.className)}
    />
  );
}
