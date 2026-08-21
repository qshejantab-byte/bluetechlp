import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-display.jpg";
import surfaceImg from "@/assets/detail-surface.jpg";
import bezelImg from "@/assets/detail-bezel.jpg";
import portsImg from "@/assets/detail-ports.jpg";
import touchImg from "@/assets/touch-detail.jpg";

/**
 * Drop a finished product film here (e.g. `src/assets/product-film.mp4` imported
 * as a URL) and the stage plays it instead of the still sequence — no redesign needed.
 */
const filmSrc: string | null = null;

const chapters = [
  {
    n: "01",
    label: "Presence",
    img: heroImg,
    title: "It changes the room before anyone speaks.",
    copy: "A single large surface at the front of the space, mounted flat against the wall or set on a stand.",
    alt: "A large interactive smart display mounted in a meeting room",
  },
  {
    n: "02",
    label: "Surface",
    img: surfaceImg,
    title: "Write straight onto the glass.",
    copy: "A pen or a fingertip marks the screen where you touch it, so ideas are captured in front of the room.",
    alt: "A stylus writing a clean white line on the glass surface of an interactive display",
  },
  {
    n: "03",
    label: "Frame",
    img: bezelImg,
    title: "A frame built to disappear.",
    copy: "A slim metal edge around the panel — the hardware recedes and the content is what people look at.",
    alt: "Macro detail of the slim metal bezel corner of an interactive display",
  },
  {
    n: "04",
    label: "Connection",
    img: portsImg,
    title: "Everything the room already uses.",
    copy: "Laptops, cameras and the network connect at the side of the panel. Exact ports vary by model.",
    alt: "Close-up of the connectivity panel on the side of an interactive display",
  },
  {
    n: "05",
    label: "In use",
    img: touchImg,
    title: "Hands on the work, not on the remote.",
    copy: "People stand at the screen, move things around and keep the session going without stopping to set up.",
    alt: "A person interacting directly with the touch surface of a smart display",
  },
] as const;

function Stage({ index }: { index: number }) {
  if (filmSrc) {
    return (
      <video
        src={filmSrc}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <>
      {chapters.map((c, i) => (
        <img
          key={c.n}
          src={c.img}
          alt={index === i ? c.alt : ""}
          aria-hidden={index !== i}
          loading="lazy"
          decoding="async"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1100ms] ease-out"
          style={{ opacity: index === i ? 1 : 0, transform: index === i ? "scale(1)" : "scale(1.04)" }}
        />
      ))}
    </>
  );
}

export function ProductFilm() {
  const [active, setActive] = useState(0);
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset["chapter"]));
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    panels.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className="relative bg-ink">
      <div className="mx-auto max-w-[88rem] px-5 pt-20 sm:px-8 sm:pt-28 lg:pt-32">
        <p className="eyebrow text-brand-bright">01 / The product up close</p>
        <h2 className="mt-6 max-w-4xl font-display text-[2.1rem] font-semibold leading-[1.02] text-ink-foreground sm:text-5xl lg:text-[3.75rem]">
          Designed to be seen.
          <br />
          <span className="text-ink-muted">Built to be interacted with.</span>
        </h2>
      </div>

      {/* Desktop: a sticky film stage, chapters scroll past it */}
      <div className="relative mt-14 hidden lg:grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="sticky top-0 h-svh">
          <div className="relative h-full w-full overflow-hidden">
            <Stage index={active} />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.12_0.03_264/0.55)_0%,transparent_45%,oklch(0.12_0.03_264/0.75)_100%)]"
            />
            <p className="absolute bottom-8 left-8 eyebrow text-ink-muted">
              {chapters[active]?.n} — {chapters[active]?.label}
            </p>
          </div>
        </div>

        <div className="relative">
          {chapters.map((c, i) => (
            <div
              key={c.n}
              data-chapter={i}
              ref={(el) => {
                panels.current[i] = el;
              }}
              className="flex h-svh flex-col justify-center px-10 xl:px-16"
            >
              <div
                className="max-w-md transition-opacity duration-700"
                style={{ opacity: active === i ? 1 : 0.28 }}
              >
                <p className="eyebrow text-brand-bright">{c.n}</p>
                <h3 className="mt-5 font-display text-3xl font-medium leading-[1.08] text-ink-foreground xl:text-[2.6rem]">
                  {c.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">{c.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: full-bleed frames, one chapter at a time */}
      <div className="mt-10 lg:hidden">
        {chapters.map((c) => (
          <article key={c.n} className="border-t border-ink-border/70 first:border-t-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                decoding="async"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,oklch(0.12_0.03_264/0.9)_100%)]"
              />
              <p className="absolute bottom-4 left-5 eyebrow text-[0.6rem] text-ink-muted">
                {c.n} — {c.label}
              </p>
            </div>
            <div className="px-5 py-8 sm:px-8">
              <h3 className="font-display text-2xl font-medium leading-tight text-ink-foreground sm:text-3xl">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{c.copy}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-6 sm:px-8 sm:pb-28">
        <p className="max-w-xl text-sm leading-relaxed text-ink-muted/80">
          Shown for illustration. Exact design, ports and features vary by model — we
          match the specification to the room.
        </p>
      </div>
    </section>
  );
}
