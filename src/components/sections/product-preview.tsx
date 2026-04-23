import { ButtonLink } from "@/components/ui/button-link";
import { ProductVisual } from "@/components/sections/product-visual";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const bullets = ["Emotional awareness", "Communication practice", "Social interaction scenarios", "Child-centered design"];

export function ProductPreview() {
  return (
    <section className="section-space">
      <Reveal className="container-shell grid gap-12 lg:grid-cols-[0.8fr_0.9fr] lg:items-center">
        <ProductVisual />
        <div className="grid gap-7">
          <SectionHeading
            body="Lumi is an interactive digital character designed for children aged 4–6. Through guided scenarios and expressive interaction, Lumi helps children explore emotions, communication, and everyday social situations in a way that is safe, engaging, and developmentally appropriate."
            eyebrow="Product preview"
            title="Meet Lumi"
          />
          <div className="grid gap-3 text-sm font-extrabold text-[var(--muted)] sm:grid-cols-2">
            {bullets.map((item) => (
              <span className="rounded-full bg-[var(--blue-soft)] px-4 py-3" key={item}>
                {item}
              </span>
            ))}
          </div>
          <ButtonLink className="justify-self-start" href="/how-it-works" variant="secondary">
            See How It Works
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
