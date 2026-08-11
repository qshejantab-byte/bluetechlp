import { useState } from "react";
import { Eyebrow, Heading, Lede } from "./ui";
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
  const [i, setI] = useState(0);
  const env = envs[i]!;

  return (
    <section id="applications" className="relative bg-ink py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Eyebrow tone="dark">Environments</Eyebrow>
        <Heading tone="dark" className="mt-5 max-w-3xl">
          The same technology, six different rooms.
        </Heading>
      </div>

      <div className="mt-10 sm:mt-14">
        <div className="relative">
          <img
            key={env.key}
            src={env.img}
            alt={`${env.key} environment using an interactive display`}
            loading="lazy"
            decoding="async"
            width={1600}
            height={1100}
            className="h-[26rem] w-full animate-in fade-in object-cover duration-700 sm:h-[34rem] lg:h-[40rem]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.12_0.03_264/0.55)_0%,oklch(0.12_0.03_264/0.35)_35%,oklch(0.12_0.03_264/0.95)_100%)]" />

          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[88rem] px-5 pb-8 sm:px-8 sm:pb-12">
            <p className="eyebrow text-brand-bright">{env.n} · {env.key}</p>
            <h3 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight text-ink-foreground sm:text-4xl lg:text-5xl">
              {env.title}
            </h3>
            <Lede tone="dark" className="mt-4 max-w-xl">{env.copy}</Lede>
          </div>
        </div>

        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <ul className="-mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 py-5 sm:mx-0 sm:flex-wrap sm:px-0">
            {envs.map((e, idx) => (
              <li key={e.key} className="snap-start">
                <button
                  type="button"
                  onClick={() => setI(idx)}
                  aria-pressed={idx === i}
                  className={`whitespace-nowrap border px-5 py-3 text-sm transition-colors ${
                    idx === i
                      ? "border-brand-bright bg-brand-bright/10 text-ink-foreground"
                      : "border-ink-border text-ink-muted hover:text-ink-foreground"
                  }`}
                >
                  <span className="eyebrow mr-2 text-[0.6rem] opacity-60">{e.n}</span>
                  {e.key}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
