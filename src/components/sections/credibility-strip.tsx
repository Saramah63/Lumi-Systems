const credibility = [
  "Human-centered design",
  "Early childhood focus",
  "Built for real-world environments",
  "Designed for scalable growth",
];

export function CredibilityStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-white/60 py-7">
      <div className="container-shell grid gap-4 text-sm font-extrabold text-[var(--foreground)] md:grid-cols-4">
        {credibility.map((item) => (
          <div className="flex items-center gap-3" key={item}>
            <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
