import { ButtonLink } from "@/components/ui/button-link";
import { ProductVisual } from "@/components/sections/product-visual";
import { Reveal } from "@/components/shared/reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="container-shell grid min-h-[calc(100svh-6rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <Reveal className="grid max-w-2xl gap-7">
          <h1 className="font-display text-[clamp(3.4rem,7vw,6.7rem)] font-bold leading-[0.92] tracking-normal text-[var(--foreground)]">
            A practical tool for emotional learning in early childhood.
          </h1>
          <p className="body-large">
            Lumi helps children practice communication, emotions, and everyday social situations through guided
            interactive experiences designed for real daycare environments.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Request a Demo</ButtonLink>
            <ButtonLink href="/how-it-works" variant="secondary">
              See How It Works
            </ButtonLink>
          </div>
          <p className="max-w-xl text-sm font-bold leading-6 text-[var(--muted)]">
            Designed for early childhood education. Built for real-world use.
          </p>
        </Reveal>
        <Reveal className="lg:justify-self-end">
          <ProductVisual />
        </Reveal>
      </div>
    </section>
  );
}
