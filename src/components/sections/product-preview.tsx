import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProductPreview() {
  return (
    <section className="section-space">
      <Reveal className="container-shell">
        <div className="grid gap-7 max-w-4xl">
          <SectionHeading
            body="An interactive digital character designed for children aged 4–6, helping them explore emotions and communication through guided scenarios built for real use in early childhood settings."
            title="Meet Lumi"
          />
          <p className="body-large max-w-3xl">
            Lumi is being shaped for pilot environments and designed to fit naturally into daily routines rather than
            sit outside them as a separate activity.
          </p>
          <ButtonLink className="justify-self-start" href="/how-it-works" variant="secondary">
            See How It Works
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
