import { Reveal } from "@/hooks/use-reveal";
import { applications } from "@/lib/site-data";
import { Eyebrow, Heading, Lede, Section } from "./ui";

export function Applications() {
  return (
    <Section id="applications">
      <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
        <div>
          <Eyebrow>Applications</Eyebrow>
          <Heading className="mt-5">Where these rooms are.</Heading>
        </div>
        <Lede>
          The same display works differently depending on who is in front of it. These are
          the environments BlueTech supplies most often across Rwanda.
        </Lede>
      </Reveal>

      <ul className="mt-14 border-t border-border">
        {applications.map((a, i) => (
          <Reveal as="li" key={a.title} delay={i * 40}>
            <div className="group grid gap-3 border-b border-border py-8 transition-colors sm:grid-cols-[auto_1fr_1.4fr] sm:items-baseline sm:gap-8 sm:py-10">
              <span className="eyebrow text-muted-foreground/70">{a.n}</span>
              <h3 className="font-display text-2xl font-medium transition-colors group-hover:text-brand sm:text-3xl">
                {a.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {a.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
