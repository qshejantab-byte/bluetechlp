import { Reveal } from "@/hooks/use-reveal";

const applications = [
  ["01", "Education", "Classrooms, lecture halls and training rooms where lessons are built with the class, not just shown to it."],
  ["02", "Corporate", "Meetings, planning sessions and presentations — with remote colleagues in the same room."],
  ["03", "Government & institutions", "Briefings, internal training and institutional communication."],
  ["04", "Hospitality & conference venues", "Meeting facilities and conference rooms that guests can use without a technician."],
  ["05", "Churches & organisations", "Programmes, teaching and community gatherings."],
  ["06", "Events & exhibitions", "Interactive stands and visitor-facing displays."],
];

export function Applications() {
  return (
    <section id="applications" className="bg-ink py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-brand-bright">Applications</p>
          <h2 className="mt-5 font-display text-[2.1rem] leading-[1.05] font-semibold text-ink-foreground sm:text-5xl">
            Where these rooms are.
          </h2>
        </Reveal>

        <ul className="mt-14 border-t border-ink-border">
          {applications.map(([n, title, copy], i) => (
            <Reveal as="li" key={title} delay={i * 40}>
              <div className="group grid gap-3 border-b border-ink-border py-8 sm:grid-cols-[auto_1fr_1.4fr] sm:items-baseline sm:gap-8 sm:py-10">
                <span className="eyebrow text-ink-muted/60">{n}</span>
                <h3 className="font-display text-2xl font-medium text-ink-foreground transition-colors group-hover:text-brand-bright sm:text-3xl">
                  {title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
                  {copy}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}