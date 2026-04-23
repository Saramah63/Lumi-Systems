import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/shared/reveal";

type CTASectionProps = {
  title?: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title = "Bring emotionally intelligent learning into real environments.",
  body = "Interested in piloting Lumi, exploring collaboration, or following product development? Start the conversation with Lumi Systems.",
  primaryLabel = "Request a Demo",
  secondaryLabel = "Contact Us",
}: CTASectionProps) {
  return (
    <section className="section-space">
      <Reveal className="container-shell mx-auto max-w-4xl text-center">
        <h2 className="font-display section-title">{title}</h2>
        <p className="body-large mx-auto mt-6 max-w-2xl">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contact">{primaryLabel}</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            {secondaryLabel}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
