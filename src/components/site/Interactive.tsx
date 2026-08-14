import { Reveal } from "@/hooks/use-reveal";
import { Cta, Eyebrow, Heading, Lede, ScreenFrame, Section } from "./ui";
import touchImg from "@/assets/touch-detail.jpg";
import oldRoomImg from "@/assets/room-old.jpg";
import newRoomImg from "@/assets/env-corporate.jpg";
import productImg from "@/assets/display-product.jpg";

const features = [
  ["Touch", "Drive the display by hand — open, move, zoom and edit without a mouse or a remote."],
  ["Write", "Annotate over anything on screen, or open a blank board and work it out in front of the room."],
  ["Share", "Send a laptop or phone screen to the display wirelessly, and hand over without unplugging anything."],
  ["Collaborate", "More than one person at the board, with the session saved and sent out afterwards."],
  ["Video", "Run the call on the display itself so remote people see the room and the board."],
  ["Connect", "HDMI, USB and network in, plus a built-in smart platform or a connected room PC."],
] as const;

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

      {/* Feature canvas */}
      <div className="mt-16 border-t border-ink-border pt-12 sm:mt-20 sm:pt-16">
        <Eyebrow tone="dark">What it does</Eyebrow>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.35fr_1fr] lg:gap-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 lg:text-right">
            {features.slice(0, 3).map(([t, c], i) => (
              <Reveal key={t} delay={i * 80}>
                <p className="font-display text-2xl font-medium text-ink-foreground sm:text-3xl">
                  {t}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted lg:ml-auto lg:max-w-[19rem]">
                  {c}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={60} className="order-first lg:order-none">
            <ScreenFrame stand={false}>
              <img
                src={touchImg}
                alt="A hand annotating directly on an interactive display during a meeting"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1408}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,oklch(0.12_0.03_264/0.7))]" />
            </ScreenFrame>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12">
            {features.slice(3).map(([t, c], i) => (
              <Reveal key={t} delay={i * 80}>
                <p className="font-display text-2xl font-medium text-ink-foreground sm:text-3xl">
                  {t}
                </p>
                <p className="mt-2 max-w-[19rem] text-sm leading-relaxed text-ink-muted">{c}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-12 text-sm text-ink-muted/80">
          Available features vary by model. We confirm the exact capability set for the
          display you order.
        </p>
      </div>
    </Section>
  );
}

export function WhyInteractive() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>The room, before and after</Eyebrow>
          <Heading className="mt-5">
            From showing information to working through it together.
          </Heading>
        </Reveal>
      </div>

      <div className="mt-14 grid lg:grid-cols-[1fr_auto_1fr]">
        <Reveal className="relative">
          <img
            src={oldRoomImg}
            alt="A dim meeting room with a ceiling projector, pull-down screen and cables on the table"
            loading="lazy"
            decoding="async"
            width={1600}
            height={1100}
            className="h-72 w-full object-cover grayscale sm:h-[30rem] lg:h-[36rem]"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10">
            <p className="eyebrow text-ink-foreground/70">The old room</p>
            <ul className="space-y-1 text-ink-foreground/85">
              {["Projector", "Cables", "Whiteboard", "Passive presentation"].map((t) => (
                <li key={t} className="font-display text-lg sm:text-2xl">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="flex items-center justify-center bg-background px-6 py-6 lg:px-8">
          <span className="eyebrow text-brand" aria-hidden>
            <span className="lg:hidden">↓ becomes ↓</span>
            <span className="hidden lg:inline [writing-mode:vertical-rl]">becomes</span>
          </span>
        </div>

        <Reveal delay={100} className="relative">
          <img
            src={newRoomImg}
            alt="Colleagues working together around a wall-mounted interactive display"
            loading="lazy"
            decoding="async"
            width={1600}
            height={1100}
            className="h-72 w-full object-cover sm:h-[30rem] lg:h-[36rem]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.12_0.03_264/0.15),oklch(0.12_0.03_264/0.75))]" />
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10">
            <p className="eyebrow text-brand-bright">The interactive room</p>
            <ul className="space-y-1 text-ink-foreground">
              {["Touch", "Collaboration", "Wireless sharing", "Saved sessions"].map((t) => (
                <li key={t} className="font-display text-lg sm:text-2xl">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 grid max-w-[88rem] gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Lede>
          A room built around a projector points in one direction. An interactive display
          lets anyone step up, mark up the material, and leave with the session saved and
          shared.
        </Lede>
        <div className="lg:justify-self-end lg:text-right">
          <p className="font-display text-xl leading-snug sm:text-2xl">
            Not sure which room to start with?
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground lg:ml-auto">
            We look at the space, the group size and how the room is used before
            recommending anything.
          </p>
          <Cta href="#contact" variant="outlineLight" className="mt-6">
            Talk to us about your room
          </Cta>
        </div>
      </div>
    </section>
  );
}

const fit = [
  ["01", "Room size", "How many people sit in the room, and how far back the last row is."],
  ["02", "Viewing distance", "The size that stays readable from the furthest seat, not just the nearest."],
  ["03", "Use case", "Teaching, meetings, training or briefings — each one leans on different features."],
  ["04", "Mounting", "Fixed to the wall, or on a mobile stand that moves between rooms."],
] as const;

export function DisplayShowcase() {
  return (
    <Section id="displays" tone="dark" className="border-t border-ink-border">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
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

        <div>
          <Reveal>
            <Eyebrow tone="dark">Choosing a display</Eyebrow>
            <Heading tone="dark" as="h3" className="mt-5">
              The right display for the right room.
            </Heading>
            <Lede tone="dark" className="mt-5">
              We don't sell a size off a list. Sizes, models and configurations are
              selected per project — four things decide it.
            </Lede>
          </Reveal>

          <dl className="mt-10 border-t border-ink-border">
            {fit.map(([n, t, c], i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink-border py-6 sm:grid-cols-[3rem_11rem_1fr] sm:gap-6">
                  <span className="eyebrow text-brand-bright">{n}</span>
                  <dt className="font-display text-lg font-medium text-ink-foreground">{t}</dt>
                  <dd className="col-start-2 text-sm leading-relaxed text-ink-muted sm:col-start-3">
                    {c}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal className="mt-9">
            <p className="max-w-md font-display text-xl leading-snug text-ink-foreground sm:text-2xl">
              Tell us how the space works. We'll help you choose the right display.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Cta href="#contact">Get a Quote</Cta>
              <Cta href="#applications" variant="outlineDark">
                See where they're used
              </Cta>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
