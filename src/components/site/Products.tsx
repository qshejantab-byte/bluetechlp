import { Reveal } from "@/hooks/use-reveal";
import { Cta, Eyebrow, Heading, Lede, Section } from "./ui";
import audioImg from "@/assets/cat-audio.jpg";
import wearablesImg from "@/assets/cat-wearables.jpg";
import computingImg from "@/assets/cat-computing.jpg";

const categories = [
  {
    id: "audio",
    name: "Audio",
    line: "Headphones, headsets and listening equipment.",
    copy: "For focused work, calls and everyday listening — supplied individually or as part of a room or office fit-out.",
    uses: ["Offices and open-plan desks", "Calls and conferencing", "Personal listening"],
    img: audioImg,
  },
  {
    id: "wearables",
    name: "Wearables",
    line: "Smartwatches and connected devices.",
    copy: "Everyday wearable technology for people who work away from a desk, supplied to individuals and to teams.",
    uses: ["Field and mobile teams", "Health and activity tracking", "Staff gifting programmes"],
    img: wearablesImg,
  },
  {
    id: "computing",
    name: "Computing",
    line: "Laptops, desktops and computing hardware.",
    copy: "Machines specified for the work they need to do — for staff rollouts, computer labs and individual buyers.",
    uses: ["Staff and office rollouts", "Computer labs and training rooms", "Students and individuals"],
    img: computingImg,
  },
];

export function Products() {
  return (
    <Section id="products">
      <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
        <div>
          <Eyebrow>The BlueTech range</Eyebrow>
          <Heading className="mt-5">More from BlueTech.</Heading>
        </div>
        <Lede>
          Interactive displays are our flagship category — but they are one part of what we
          supply. As a reseller we source the right product for the requirement instead of
          pushing a single brand.
        </Lede>
      </Reveal>

      <ol className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6">
        {["Interactive Displays", "Audio", "Wearables", "Computing"].map((t, i) => (
          <li key={t} className="flex items-center gap-4">
            {i > 0 ? <span aria-hidden className="text-muted-foreground/50">→</span> : null}
            <span
              className={
                i === 0
                  ? "font-display text-base font-medium text-brand sm:text-lg"
                  : "eyebrow text-muted-foreground"
              }
            >
              {t}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-16 space-y-16 sm:space-y-24">
        {categories.map((c, i) => (
          <Reveal key={c.id}>
            <article
              id={c.id}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div className={`overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={c.img}
                  alt={`${c.name} products supplied by BlueTech`}
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={1200}
                  className="h-72 w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03] sm:h-[26rem] lg:h-[30rem]"
                />
              </div>

              <div className="min-w-0">
                <p className="eyebrow text-muted-foreground/70">{`0${i + 1}`}</p>
                <h3 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  {c.name}
                </h3>
                <p className="mt-4 font-display text-lg text-muted-foreground sm:text-xl">
                  {c.line}
                </p>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {c.copy}
                </p>
                <ul className="mt-8 border-t border-border">
                  {c.uses.map((u) => (
                    <li key={u} className="border-b border-border py-3 text-sm">
                      {u}
                    </li>
                  ))}
                </ul>
                <Cta href="#contact" variant="outlineLight" className="mt-8">
                  {`Enquire about ${c.name}`}
                </Cta>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
