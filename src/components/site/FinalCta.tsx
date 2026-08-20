import { Reveal } from "@/hooks/use-reveal";
import { contact } from "@/lib/site-data";
import { Cta, Eyebrow, Lede, Section } from "./ui";

export function FinalCta() {
  return (
    <Section tone="dark" className="border-t border-ink-border">
      <Reveal className="mx-auto max-w-4xl text-center">
        <Eyebrow tone="dark">Next step</Eyebrow>
        <h2 className="mt-5 font-display text-[2.2rem] leading-[1.02] font-semibold text-ink-foreground sm:text-5xl lg:text-6xl">
          Ready to upgrade the way your rooms work?
        </h2>
        <Lede tone="dark" className="mx-auto mt-6 max-w-2xl">
          Tell us about the room and the requirement, and we'll come back with a
          recommendation and pricing.
        </Lede>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Cta href="#contact">Get a Quote</Cta>
          <Cta href={contact.whatsappHref} variant="outlineDark">
            Talk to BlueTech
          </Cta>
        </div>
      </Reveal>
    </Section>
  );
}
