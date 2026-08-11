import { Reveal } from "@/hooks/use-reveal";
import audioImg from "@/assets/cat-audio.jpg";
import wearablesImg from "@/assets/cat-wearables.jpg";
import computingImg from "@/assets/cat-computing.jpg";
import heroImg from "@/assets/hero-display.jpg";

const categories = [
  {
    name: "Audio",
    copy: "Headphones and listening equipment for focused work and everyday use.",
    img: audioImg,
  },
  {
    name: "Wearables",
    copy: "Smartwatches and connected devices for people on the move.",
    img: wearablesImg,
  },
  {
    name: "Computing",
    copy: "Laptops and computing hardware for teams, students and individuals.",
    img: computingImg,
  },
];

export function Products() {
  return (
    <section id="products" className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-brand">The BlueTech range</p>
            <h2 className="mt-5 font-display text-[2.1rem] leading-[1.05] font-semibold sm:text-5xl">
              More technology. One trusted partner.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Interactive displays are at the heart of what we do — but they're only part of
            what BlueTech supplies. As a reseller, we source the right product for the
            requirement instead of pushing one brand.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="relative isolate overflow-hidden bg-ink">
            <img
              src={heroImg}
              alt="Interactive smart display in use"
              loading="lazy"
              width={1920}
              height={1200}
              className="h-72 w-full object-cover object-[62%_center] opacity-60 sm:h-[26rem] lg:h-[30rem]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,oklch(0.13_0.03_264/0.9)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="eyebrow text-brand-bright">Featured category</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-ink-foreground sm:text-4xl lg:text-5xl">
                Interactive Smart Displays
              </h3>
              <a
                href="#interactive"
                className="mt-6 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:bg-brand-bright"
              >
                Explore Interactive Displays
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <article className="group h-full border border-border bg-card">
                <div className="overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={1000}
                    height={1200}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-64"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex text-sm font-medium text-brand hover:underline"
                  >
                    Explore {c.name} →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}