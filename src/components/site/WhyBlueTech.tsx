import { Reveal } from "@/hooks/use-reveal";

const reasons = [
  ["Quality products", "We sell equipment we're willing to stand behind, chosen for how it holds up in daily use."],
  ["Professional guidance", "Tell us the room, the budget and the people using it — we'll recommend accordingly."],
  ["Reliable support", "A real person to call when something needs attention."],
  ["Local availability", "Based in Rwanda, so buying and support happen close to you."],
];

const services = [
  ["Product consultation", "Working out what actually fits the space, the use case and the budget."],
  ["Installation & setup", "Mounting, connecting and configuring the display so the room is ready to use."],
  ["Configuration & handover", "Accounts, apps and connections set up before we leave."],
  ["Technical support", "Help after the sale — remotely or on site."],
  ["User training", "A short walkthrough so staff use the display from day one."],
];

export function WhyBlueTech() {
  return (
    <section id="why-bluetech" className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-brand">Why BlueTech</p>
          <h2 className="mt-5 font-display text-[2.1rem] leading-[1.05] font-semibold sm:text-5xl">
            Technology you can count on.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            BlueTech is a technology reseller and solutions provider. We source, supply and
            support the equipment organisations use every day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-10 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([t, c], i) => (
            <Reveal key={t} delay={i * 60}>
              <p className="font-display text-lg font-medium">{t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-brand">Services & support</p>
            <h3 className="mt-5 font-display text-[1.8rem] leading-[1.1] font-semibold sm:text-4xl">
              We don't stop at delivery.
            </h3>
          </Reveal>
          <Reveal delay={80}>
            <ul className="border-t border-border">
              {services.map(([t, c]) => (
                <li
                  key={t}
                  className="grid gap-2 border-b border-border py-6 sm:grid-cols-[14rem_1fr] sm:gap-8"
                >
                  <p className="font-display text-base font-medium">{t}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  const sectors = [
    "Schools & universities",
    "Training institutions",
    "Businesses & corporate offices",
    "Government institutions",
    "NGOs",
    "Hotels & conference venues",
    "Churches",
    "Home users",
  ];

  return (
    <section className="bg-ink py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-brand-bright">Who we work with</p>
          <h2 className="mt-5 font-display text-[2.1rem] leading-[1.05] font-semibold text-ink-foreground sm:text-5xl">
            Technology for the way Rwanda works.
          </h2>
        </Reveal>
        <ul className="mt-12 flex flex-wrap gap-2 sm:gap-3">
          {sectors.map((s, i) => (
            <Reveal as="li" key={s} delay={i * 40}>
              <span className="inline-flex rounded-full border border-ink-border px-4 py-2.5 text-sm text-ink-muted">
                {s}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}