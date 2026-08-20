import { Reveal } from "@/hooks/use-reveal";
import { beyondCategories, partners } from "@/lib/site-data";
import { Cta, Eyebrow, Heading, Lede, Section } from "./ui";
import computingImg from "@/assets/cat-computing.jpg";

export function Products() {
  return (
    <Section id="products">
      <Reveal className="relative grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 hidden select-none whitespace-nowrap font-display text-[9vw] font-semibold leading-none tracking-tighter text-foreground/[0.045] lg:block"
        >
          ECOSYSTEM
        </span>
        <div>
          <Eyebrow>Beyond the display</Eyebrow>
          <Heading className="mt-5">More technology from BlueTech.</Heading>
        </div>
        <Lede>
          Interactive Smart Displays are the focus of BlueTech's technology offering,
          supported by a broader portfolio of computing, presentation, printing,
          networking and infrastructure solutions.
        </Lede>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <img
            src={computingImg}
            alt="Computing and office technology supplied by BlueTech"
            loading="lazy"
            decoding="async"
            width={1000}
            height={1200}
            className="h-64 w-full object-cover sm:h-[24rem]"
          />
        </Reveal>

        <Reveal delay={80} className="order-1 lg:order-2">
          <dl className="border-t border-border">
            {beyondCategories.map(([t, c]) => (
              <div
                key={t}
                className="grid gap-1 border-b border-border py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt className="font-display text-lg font-medium">{t}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{c}</dd>
              </div>
            ))}
          </dl>
          <Cta href="#contact" variant="outlineLight" className="mt-8">
            Ask about other technology
          </Cta>
        </Reveal>
      </div>

      <Reveal className="mt-16 border-t border-border pt-10 sm:mt-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Technology partners</Eyebrow>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              BlueTech is connected to a broader technology ecosystem through partnerships
              with Dell, HP and Bitdefender.
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {partners.map((p) => (
              <li
                key={p}
                className="font-display text-2xl font-semibold tracking-tight text-foreground/70 sm:text-3xl"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
