import { Reveal } from "@/hooks/use-reveal";
import { reasons, sectors, services } from "@/lib/site-data";
import { Eyebrow, Heading, Lede, Section } from "./ui";
import installImg from "@/assets/support-install.jpg";

export function WhyBlueTech() {
  return (
    <Section id="why-bluetech" tone="dark">
      <Reveal className="max-w-5xl">
        <Eyebrow tone="dark">Why BlueTech</Eyebrow>
        <p className="mt-6 font-display text-[2rem] font-semibold leading-[1.05] text-ink-foreground sm:text-5xl lg:text-[4rem]">
          Technology is easy to sell.
          <br />
          <span className="text-ink-muted">Getting the right technology isn't.</span>
        </p>
      </Reveal>

      <div className="mt-14 border-t border-ink-border sm:mt-20">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 60}>
            <div className="grid gap-3 border-b border-ink-border py-8 sm:grid-cols-[3rem_16rem_1fr] sm:gap-8 sm:py-10">
              <span className="eyebrow text-brand-bright">{`0${i + 1}`}</span>
              <h3 className="font-display text-xl font-medium text-ink-foreground sm:text-2xl">
                {r.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
                {r.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Services and support</Eyebrow>
          <Heading as="h3" className="mt-5">
            Six steps, start to finish.
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

        <ol className="relative border-l border-border pl-6 sm:pl-10">
          {services.map(([t, c], i) => (
            <Reveal as="li" key={t} delay={i * 50}>
              <div className="relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[1.85rem] top-1 h-2 w-2 rounded-full bg-brand sm:-left-[2.85rem]"
                />
                <p className="eyebrow text-muted-foreground/70">{`0${i + 1}`}</p>
                <h4 className="mt-2 font-display text-2xl font-medium sm:text-3xl">{t}</h4>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {c}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
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
