import { Reveal } from "@/hooks/use-reveal";
import { reasons, sectors, services } from "@/lib/site-data";
import { Eyebrow, Heading, Lede, Section } from "./ui";
import installImg from "@/assets/support-install.jpg";

export function WhyBlueTech() {
  return (
    <Section id="why-bluetech" tone="dark">
      <Reveal className="max-w-3xl">
        <Eyebrow tone="dark">Why BlueTech</Eyebrow>
        <Heading tone="dark" className="mt-5">
          A reseller that stays involved after delivery.
        </Heading>
        <Lede tone="dark" className="mt-6">
          BlueTech supplies technology to organisations and individuals in Rwanda. We
          advise on the right product, deliver and install it, and stay reachable when
          something needs attention.
        </Lede>
      </Reveal>

      <div className="mt-14 grid gap-x-12 gap-y-10 border-t border-ink-border pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 60}>
            <h3 className="font-display text-lg font-medium text-ink-foreground">
              {r.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{r.copy}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <Eyebrow>Services and support</Eyebrow>
          <Heading as="h3" className="mt-5">
            We don't stop at delivery.
          </Heading>
          <img
            src={installImg}
            alt="BlueTech technicians wall-mounting a display in an office"
            loading="lazy"
            decoding="async"
            width={1400}
            height={1050}
            className="mt-8 h-56 w-full object-cover sm:h-72"
          />
        </Reveal>

        <Reveal delay={80}>
          <ul className="border-t border-border">
            {services.map(([t, c]) => (
              <li
                key={t}
                className="grid gap-2 border-b border-border py-6 sm:grid-cols-[14rem_1fr] sm:gap-8"
              >
                <h4 className="font-display text-base font-medium">{t}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{c}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export function Trust() {
  return (
    <Section tone="dark" className="border-t border-ink-border py-16 sm:py-20 lg:py-24">
      <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow tone="dark">Who we supply</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-semibold text-ink-foreground sm:text-3xl">
            Technology for the way Rwanda works.
          </h2>
        </div>
        <ul className="flex flex-wrap gap-2 sm:gap-3">
          {sectors.map((s) => (
            <li key={s}>
              <span className="inline-flex rounded-full border border-ink-border px-4 py-2.5 text-sm text-ink-muted">
                {s}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
