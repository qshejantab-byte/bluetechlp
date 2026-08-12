import heroImg from "@/assets/hero-display.jpg";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { Cta, ScreenFrame } from "./ui";

const words = ["PRESENT", "WRITE", "SHARE", "COLLABORATE", "CONNECT"];

export function Hero() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  // The display stays the anchor object: it settles into frame as the story begins.
  const p = Math.min(1, Math.max(0, (progress - 0.35) / 0.45));
  const scale = 0.955 + 0.045 * p;
  const lift = (1 - p) * 26;

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink pb-16 pt-28 sm:pb-24 sm:pt-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[60svh] bg-[radial-gradient(120%_80%_at_50%_0%,oklch(0.24_0.06_262)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <p className="eyebrow text-brand-bright">BlueTech · Kigali, Rwanda</p>

        <h1 className="mt-6 max-w-5xl font-display text-[2.7rem] font-semibold leading-[0.94] text-ink-foreground sm:text-7xl lg:text-[6.5rem]">
          The screen is
          <br />
          the experience.
        </h1>

        <div className="mt-7 grid gap-6 border-t border-ink-border pt-7 sm:grid-cols-[1.1fr_auto] sm:items-end sm:gap-10">
          <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Interactive smart displays for modern spaces — supplied, installed and
            supported in Rwanda. Plus audio, wearables and computing from a reseller that
            stays involved after delivery.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Cta href="#contact">Get a Quote</Cta>
            <Cta href="#interactive" variant="outlineDark">
              See the display
            </Cta>
          </div>
        </div>
      </div>

      {/* Display as the dominant object */}
      <div ref={ref} className="relative mt-12 sm:mt-16">
        <ul
          aria-hidden
          style={{ opacity: 0.35 + 0.65 * p, transform: `translateY(${lift * 0.4}px)` }}
          className="mx-auto mb-5 flex max-w-[88rem] flex-wrap justify-center gap-x-5 gap-y-2 px-5 will-change-transform sm:mb-8 sm:gap-x-12"
        >
          {words.map((w) => (
            <li
              key={w}
              className="eyebrow text-[0.6rem] text-ink-muted/45 sm:text-[0.7rem] sm:tracking-[0.4em]"
            >
              {w}
            </li>
          ))}
        </ul>

        <div
          className="mx-auto max-w-[76rem] px-5 will-change-transform sm:px-8"
          style={{ transform: `translateY(${lift}px) scale(${scale})`, transformOrigin: "50% 0%" }}
        >
          <ScreenFrame>
            <img
              src={heroImg}
              alt="A presenter annotating on a wall-mounted interactive smart display in a boardroom"
              width={1920}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,oklch(0.12_0.03_264/0.85)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-4 sm:p-7">
              <p className="font-display text-lg font-medium leading-tight text-ink-foreground sm:text-3xl">
                Interactive Smart Displays
              </p>
              <p className="eyebrow shrink-0 text-right text-[0.6rem] text-ink-muted sm:text-[0.7rem]">
                Technology for
                <br />
                modern spaces
              </p>
            </div>
          </ScreenFrame>
        </div>
      </div>
    </section>
  );
}
