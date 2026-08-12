import { useEffect, useRef, useState } from "react";
import eduImg from "@/assets/classroom.jpg";
import corpImg from "@/assets/env-corporate.jpg";
import govImg from "@/assets/env-government.jpg";
import trainImg from "@/assets/env-training.jpg";
import hospImg from "@/assets/env-hospitality.jpg";
import healthImg from "@/assets/env-healthcare.jpg";

const envs = [
  { n: "01", key: "Education", img: eduImg, title: "Lessons built with the class.", copy: "Classrooms, lecture halls and computer labs where the board is worked on, saved and shared after the lesson." },
  { n: "02", key: "Corporate", img: corpImg, title: "Meetings that produce something.", copy: "Planning sessions and reviews where anyone can share a screen and remote colleagues stay in the conversation." },
  { n: "03", key: "Government", img: govImg, title: "Briefings and internal training.", copy: "Institutional rooms that need to be reliable, simple to operate and ready without a technician." },
  { n: "04", key: "Training", img: trainImg, title: "Participants work on the material.", copy: "Workshops and professional courses where the facilitator marks up the work in front of the group." },
  { n: "05", key: "Hospitality", img: hospImg, title: "Facilities guests can run themselves.", copy: "Conference and meeting rooms in hotels and venues, set up so a guest can connect and present in a minute." },
  { n: "06", key: "Healthcare", img: healthImg, title: "Case reviews and staff briefings.", copy: "Clinical and organisational spaces where teams review information together and train new staff." },
] as const;

export function Applications() {
  const [active, setActive] = useState(0);
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset["env"]));
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    panels.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="applications" className="relative bg-ink">
      <div className="mx-auto max-w-[88rem] px-5 pt-20 sm:px-8 sm:pt-28 lg:pt-32">
        <p className="eyebrow text-brand-bright">Environments</p>
        <h2 className="mt-5 max-w-4xl font-display text-[2.1rem] font-semibold leading-[1.02] text-ink-foreground sm:text-5xl lg:text-[3.75rem]">
          One display.
          <br />
          <span className="text-ink-muted">Different worlds.</span>
        </h2>
      </div>

      {/* Desktop: scroll-driven world change against a sticky environment */}
      <div className="relative mt-12 hidden lg:block">
        <div className="sticky top-0 h-svh w-full overflow-hidden">
          {envs.map((e, i) => (
            <img
              key={e.key}
              src={e.img}
              alt={active === i ? `${e.key} environment using an interactive display` : ""}
              aria-hidden={active !== i}
              loading="lazy"
              decoding="async"
              width={1600}
              height={1100}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-out"
              style={{ opacity: active === i ? 1 : 0 }}
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.12_0.03_264/0.92)_0%,oklch(0.12_0.03_264/0.6)_45%,oklch(0.12_0.03_264/0.25)_100%)]" />
          <div className="absolute inset-y-0 right-8 flex flex-col justify-center gap-3">
            {envs.map((e, i) => (
              <span
                key={e.key}
                className={`h-px w-10 transition-all duration-500 ${active === i ? "w-20 bg-brand-bright" : "bg-white/25"}`}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          {envs.map((e, i) => (
            <div
              key={e.key}
              data-env={i}
              ref={(el) => {
                panels.current[i] = el;
              }}
              className="flex h-svh items-center"
            >
              <div className="mx-auto w-full max-w-[88rem] px-8">
                <div
                  className="max-w-xl transition-all duration-700 ease-out"
                  style={{
                    opacity: active === i ? 1 : 0.25,
                    transform: active === i ? "none" : "translateY(14px)",
                  }}
                >
                  <p className="font-display text-[5rem] font-semibold leading-none text-brand-bright/80">
                    {e.n}
                  </p>
                  <p className="eyebrow mt-4 text-ink-muted">{e.key}</p>
                  <h3 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-foreground xl:text-5xl">
                    {e.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-ink-muted">{e.copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: swipeable environment story */}
      <div className="mt-10 lg:hidden">
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [scrollbar-width:none] sm:px-8">
          {envs.map((e) => (
            <li key={e.key} className="w-[82vw] shrink-0 snap-center sm:w-[60vw]">
              <div className="relative overflow-hidden">
                <img
                  src={e.img}
                  alt={`${e.key} environment using an interactive display`}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={1400}
                  className="h-[26rem] w-full object-cover sm:h-[32rem]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.12_0.03_264/0.15)_35%,oklch(0.12_0.03_264/0.95)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-3xl font-semibold leading-none text-brand-bright/80">
                    {e.n}
                  </p>
                  <p className="eyebrow mt-2 text-ink-muted">{e.key}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-ink-foreground">
                    {e.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{e.copy}</p>
            </li>
          ))}
        </ul>
        <p className="px-5 pb-12 text-xs text-ink-muted/70 sm:px-8">Swipe to move between environments</p>
      </div>
    </section>
  );
}
