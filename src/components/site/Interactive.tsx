import { Reveal } from "@/hooks/use-reveal";
import touchImg from "@/assets/touch-detail.jpg";
import classroomImg from "@/assets/classroom.jpg";

const capabilities = [
  ["Touch & write", "Work directly on the screen — annotate, sketch and edit in front of the room."],
  ["Digital whiteboarding", "Boards that can be saved, shared and picked up again in the next session."],
  ["Wireless screen sharing", "Present from a laptop or phone without swapping cables."],
  ["Video conferencing", "Bring remote participants into the same conversation."],
  ["Smart platform", "Apps, browser and media on the display itself, or connected to a PC."],
  ["Everyday reliability", "Built for rooms that are used every single day."],
];

export function Interactive() {
  return (
    <>
      <section id="interactive" className="bg-ink py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <Reveal className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-brand-bright">Flagship category</p>
              <h2 className="mt-5 font-display text-[2.25rem] leading-[1.02] font-semibold text-ink-foreground sm:text-5xl lg:text-6xl">
                More than a screen.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              An interactive smart display replaces the projector, the whiteboard and the
              cable box with one surface the whole room can use. Designed for modern
              classrooms, boardrooms, training environments and collaborative spaces.
            </p>
          </Reveal>

          <Reveal className="mt-12 overflow-hidden sm:mt-16">
            <img
              src={touchImg}
              alt="A hand annotating directly on an interactive display"
              loading="lazy"
              width={1200}
              height={1408}
              className="h-[22rem] w-full object-cover object-center sm:h-[32rem] lg:h-[38rem]"
            />
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-10 border-t border-ink-border pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, copy], i) => (
              <Reveal key={title} delay={i * 60}>
                <p className="font-display text-lg font-medium text-ink-foreground">{title}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-brand px-7 py-4 text-base font-medium text-ink-foreground transition-colors hover:bg-brand-bright"
            >
              Get a Quote
            </a>
            <p className="mt-4 max-w-xl text-sm text-ink-muted">
              Sizes, models and specifications are confirmed per order — tell us the room
              and we'll recommend the right display.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-brand">Why interactive</p>
            <h2 className="mt-5 font-display text-[2.1rem] leading-[1.05] font-semibold sm:text-5xl">
              From showing information to working through it together.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
            <Reveal className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
              <div className="bg-background p-6 sm:p-8">
                <p className="eyebrow text-muted-foreground">Traditional</p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  {["Present", "Watch", "Listen"].map((t) => (
                    <li key={t} className="font-display text-xl sm:text-2xl">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-ink p-6 sm:p-8">
                <p className="eyebrow text-brand-bright">Interactive</p>
                <ul className="mt-6 space-y-3 text-ink-foreground">
                  {["Write", "Collaborate", "Share", "Discuss", "Create"].map((t) => (
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
                alt="A teacher using an interactive display in a classroom"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-64 w-full object-cover sm:h-[26rem]"
              />
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                A room built around a projector points in one direction. An interactive
                display lets anyone step up, mark up the material and leave with the
                session saved.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}