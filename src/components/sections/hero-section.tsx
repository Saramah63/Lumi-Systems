import { ButtonLink } from "@/components/ui/button-link";
import { ProductVisual } from "@/components/sections/product-visual";
import { Reveal } from "@/components/shared/reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="container-shell grid min-h-[calc(100svh-6rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <Reveal className="grid max-w-2xl gap-7">
          <p className="eyebrow">Early childhood emotional learning</p>
          <h1 className="font-display text-[clamp(3.4rem,7vw,6.7rem)] font-bold leading-[0.92] tracking-normal text-[var(--foreground)]">
            Emotionally intelligent learning for the early years.
          </h1>
          <p className="body-large">
            Lumi Systems builds interactive digital tools that help children develop emotional awareness, communication
            skills, and healthier everyday interactions.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Request a Demo</ButtonLink>
            <ButtonLink href="/about-lumi" variant="secondary">
              Explore Lumi
            </ButtonLink>
          </div>
          <p className="max-w-xl text-sm font-bold leading-6 text-[var(--muted)]">
            Designed for early learning environments, future family use, and research-informed development.
          </p>
          <p className="max-w-xl rounded-2xl border border-[var(--line)] bg-white/64 px-4 py-3 text-sm font-bold leading-6 text-[var(--foreground)]">
            Currently in early-stage development with a focus on pilot environments and real-world application.
          </p>
        </Reveal>
        <Reveal className="lg:justify-self-end">
          <ProductVisual />
        </Reveal>
      </div>
    </section>
  );
}
