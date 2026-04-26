import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/shared/reveal";

type CTASectionProps = {
  title?: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title = "Interested in bringing Lumi into an early childhood environment?",
  body = "",
  primaryLabel = "Request a Demo",
  secondaryLabel = "Contact Us",
}: CTASectionProps) {
  return (
    <section className="section-space">
      <Reveal className="container-shell mx-auto max-w-4xl text-center">
        <div className="cta-panel panel-surface grid gap-5 px-6 py-10 md:px-10 md:py-14">
          <h2 className="font-display section-title stagger-item mx-auto max-w-[13ch]">{title}</h2>
          {body ? <p className="body-large stagger-item mx-auto max-w-2xl">{body}</p> : null}
          <div className="stagger-item mt-2 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/request-demo">{primaryLabel}</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
