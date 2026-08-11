import { useEffect, useRef, useState } from "react";
import { ScreenFrame } from "./ui";
import presentImg from "@/assets/classroom.jpg";
import writeImg from "@/assets/touch-detail.jpg";
import shareImg from "@/assets/env-corporate.jpg";
import collabImg from "@/assets/env-training.jpg";
import connectImg from "@/assets/env-healthcare.jpg";

const steps = [
  {
    word: "Present",
    img: presentImg,
    title: "Material the whole room can actually see.",
    copy: "Slides, documents, video and live web on one bright screen — no dimmed lights, no projector warm-up.",
  },
  {
    word: "Write",
    img: writeImg,
    title: "Mark up the work while everyone watches it happen.",
    copy: "Annotate over anything on screen, or open a blank board and think out loud with a pen or a finger.",
  },
  {
    word: "Share",
    img: shareImg,
    title: "Any laptop on the screen, without the cable.",
    copy: "Participants send their screen to the display from where they sit, and hand the room over in seconds.",
  },
  {
    word: "Collaborate",
    img: collabImg,
    title: "More than one person at the board.",
    copy: "Sessions built together rather than delivered at people — then saved and sent out afterwards.",
  },
  {
    word: "Connect",
    img: connectImg,
    title: "Remote people in the same conversation.",
    copy: "Video calls run on the display itself, with the shared board visible to everyone on both sides.",
  },
];

export function ScreenStory() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset["step"]);
            setActive(i);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="story"
      aria-label="What an interactive display does"
      className="relative bg-ink"
    >
      <div className="mx-auto max-w-[88rem] px-5 pt-20 sm:px-8 sm:pt-28">
        <p className="eyebrow text-brand-bright">The screen as storyteller</p>
        <h2 className="mt-5 max-w-4xl font-display text-[2.1rem] font-semibold leading-[1.02] text-ink-foreground sm:text-5xl lg:text-[3.75rem]">
          One surface. Five ways a room uses it.
        </h2>
      </div>

      <div className="mx-auto grid max-w-[88rem] gap-0 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Sticky screen */}
        <div className="sticky top-20 z-10 -mx-5 bg-ink px-5 py-6 sm:top-24 sm:mx-0 sm:px-0 lg:self-start lg:py-16">
          <ScreenFrame stand={false} className="mx-auto max-w-2xl lg:max-w-none">
            {steps.map((s, i) => (
              <div
                key={s.word}
                aria-hidden={active !== i}
                className="absolute inset-0 transition-opacity duration-700 ease-out"
                style={{ opacity: active === i ? 1 : 0 }}
              >
                <img
                  src={s.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={1100}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.12_0.03_264/0.35),oklch(0.12_0.03_264/0.9))]" />
                <div className="absolute inset-0 flex items-end p-5 sm:p-8">
                  <p className="font-display text-3xl font-semibold uppercase tracking-tight text-ink-foreground sm:text-6xl">
                    {s.word}
                  </p>
                </div>
              </div>
            ))}
            <div className="absolute right-4 top-4 flex gap-1.5 sm:right-6 sm:top-6">
              {steps.map((s, i) => (
                <span
                  key={s.word}
                  className={`h-1 w-6 rounded-full transition-colors duration-500 sm:w-10 ${
                    active === i ? "bg-brand-bright" : "bg-white/25"
                  }`}
                />
              ))}
            </div>
          </ScreenFrame>
        </div>

        {/* Steps */}
        <div className="pb-8 lg:pb-24">
          {steps.map((s, i) => (
            <div
              key={s.word}
              data-step={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="flex min-h-[62svh] flex-col justify-center border-b border-ink-border py-10 last:border-0 lg:min-h-[85svh]"
            >
              <p className="eyebrow text-brand-bright">{`0${i + 1}`}</p>
              <h3 className="mt-4 max-w-lg font-display text-2xl font-medium leading-tight text-ink-foreground sm:text-4xl">
                {s.title}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
                {s.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
