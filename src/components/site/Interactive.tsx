import { Reveal } from "@/hooks/use-reveal";
import { Cta, Eyebrow, Heading, Lede, Section } from "./ui";
import { capabilities } from "@/lib/site-data";
import touchImg from "@/assets/touch-detail.jpg";
import classroomImg from "@/assets/classroom.jpg";
import productImg from "@/assets/display-product.jpg";

export function Interactive() {
  return (
    <Section id="interactive" tone="dark">
      <Reveal className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-16">
        <div>
          <Eyebrow tone="dark">Flagship category</Eyebrow>
          <Heading tone="dark" className="mt-5">
            One surface replaces the projector, the whiteboard and the cable box.
          </Heading>
        </div>
        <Lede tone="dark">
          An interactive smart display is a large touchscreen the whole room can work on.
          Present, write, share a laptop screen and join a video call from the same
          device — in classrooms, boardrooms, training rooms and collaborative spaces.
        </Lede>
      </Reveal>

      <Reveal className="mt-12 overflow-hidden sm:mt-16">
        <img
          src={touchImg}
          alt="A hand annotating directly on an interactive display during a meeting"
          loading="lazy"
          decoding="async"
          width={1200}
          height={1408}
          className="h-[22rem] w-full object-cover object-center sm:h-[32rem] lg:h-[38rem]"
        />
      </Reveal>

      <div className="mt-16 grid gap-10 border-t border-ink-border pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow tone="dark">What it does</Eyebrow>
          <Heading tone="dark" as="h3" className="mt-5">
            Everything the room needs, on the screen itself.
          </Heading>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">
            Available features vary by model. We confirm the exact capability set for the
            display you order.
          </p>
        </div>

        <ul className="border-t border-ink-border">
          {capabilities.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 50}>
              <div className="grid gap-2 border-b border-ink-border py-6 sm:grid-cols-[13rem_1fr] sm:gap-8 sm:py-7">
                <h4 className="font-display text-lg font-medium text-ink-foreground">
                  {c.title}
                </h4>
                <p className="text-sm leading-relaxed text-ink-muted">{c.copy}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function WhyInteractive() {
  return (
    <Section>
      <Reveal className="max-w-3xl">
        <Eyebrow>Why interactive</Eyebrow>
        <Heading className="mt-5">
          From showing information to working through it together.
        </Heading>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
          <div className="bg-background p-6 sm:p-8">
            <p className="eyebrow text-muted-foreground">Projector room</p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {["Present", "Watch", "Listen"].map((t) => (
                <li key={t} className="font-display text-xl sm:text-2xl">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink p-6 sm:p-8">
            <p className="eyebrow text-brand-bright">Interactive room</p>
            <ul className="mt-6 space-y-3 text-ink-foreground">
              {["Write", "Collaborate", "Share", "Discuss", "Save"].map((t) => (
                <li key={t} className="font-display text-xl sm:text-2xl">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <img
            src={classroomImg}
            alt="A teacher writing on an interactive display while students follow along"
            loading="lazy"
            decoding="async"
            width={1408}
            height={1008}
            className="h-64 w-full object-cover sm:h-[26rem]"
          />
          <Lede className="mt-6 max-w-lg">
            A room built around a projector points in one direction. An interactive display
            lets anyone step up, mark up the material, and leave with the session saved and
            shared.
          </Lede>
        </Reveal>
      </div>
    </Section>
  );
}

const specSlots = [
  ["Screen size", "Confirmed per order"],
  ["Touch technology", "Confirmed per order"],
  ["Resolution", "Confirmed per order"],
  ["Connectivity", "Confirmed per order"],
  ["Mounting", "Wall mount or mobile stand"],
  ["Warranty", "Confirmed per order"],
];

export function DisplayShowcase() {
  return (
    <Section id="displays" tone="dark" className="border-t border-ink-border">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal>
          <img
            src={productImg}
            alt="Interactive smart display mounted on a mobile floor stand"
            loading="lazy"
            decoding="async"
            width={1600}
            height={1200}
            className="w-full object-cover"
          />
        </Reveal>

        <Reveal delay={80}>
          <Eyebrow tone="dark">The product</Eyebrow>
          <Heading tone="dark" as="h3" className="mt-5">
            Specified around your room, not a catalogue.
          </Heading>
          <Lede tone="dark" className="mt-5">
            Sizes, models and configurations are selected per project. Tell us the room
            dimensions, the seating distance and how the display will be used, and we
            recommend the right unit and mounting.
          </Lede>

          <dl className="mt-10 border-t border-ink-border">
            {specSlots.map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-ink-border py-4"
              >
                <dt className="min-w-0 text-sm text-ink-muted">{k}</dt>
                <dd className="text-right text-sm text-ink-foreground">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Cta href="#contact">Get a Quote</Cta>
            <Cta href="#applications" variant="outlineDark">
              See where they're used
            </Cta>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
