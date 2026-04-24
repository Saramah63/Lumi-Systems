import { Reveal } from "@/components/shared/reveal";

const benefits = [
  "Children express emotions more clearly",
  "Everyday conflicts become easier to handle",
  "Communication improves in group settings",
  "Educators gain structured support",
  "Emotional learning becomes consistent",
];

export function BenefitsSection() {
  return (
    <section className="py-24 md:py-32">
      <Reveal className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
        <div>
          <h2 className="font-display max-w-[480px] text-5xl leading-[0.95] tracking-tight text-[var(--foreground)] md:text-6xl lg:text-7xl">
            What changes with Lumi
          </h2>
        </div>
        <div className="space-y-4">
          {benefits.map((benefit) => (
            <div
              className="group flex items-center gap-4 rounded-[20px] border border-black/10 bg-[rgba(255,255,255,0.55)] px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-black/15 hover:bg-[rgba(255,255,255,0.8)] hover:shadow-[0_14px_34px_rgba(15,23,42,0.06)]"
              key={benefit}
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-sky-300/80 transition-transform duration-300 group-hover:scale-125" />
              <p className="text-lg font-medium leading-relaxed text-slate-900 md:text-xl">{benefit}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
