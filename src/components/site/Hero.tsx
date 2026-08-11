import heroImg from "@/assets/hero-display.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="A presenter annotating on a wall-mounted interactive smart display in a boardroom"
        width={1920}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-55 sm:opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.13_0.03_264/0.92)_0%,oklch(0.13_0.03_264/0.7)_45%,oklch(0.13_0.03_264/0.95)_100%)] sm:bg-[linear-gradient(100deg,oklch(0.13_0.03_264/0.96)_0%,oklch(0.13_0.03_264/0.82)_48%,oklch(0.13_0.03_264/0.35)_100%)]" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-[88rem] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:min-h-screen lg:pb-24">
        <p className="eyebrow text-brand-bright">BlueTech · Kigali, Rwanda</p>
        <h1 className="mt-5 max-w-4xl font-display text-[2.6rem] leading-[0.98] font-semibold text-ink-foreground sm:text-6xl lg:text-[5.25rem]">
          Technology that moves ideas forward.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          BlueTech supplies interactive smart displays and everyday technology to
          organisations across Rwanda — with honest advice before the sale and real
          support after it.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#interactive"
            className="rounded-full bg-brand px-7 py-4 text-center text-base font-medium text-ink-foreground transition-colors hover:bg-brand-bright"
          >
            Explore Interactive Displays
          </a>
          <a
            href="#products"
            className="rounded-full border border-ink-border px-7 py-4 text-center text-base font-medium text-ink-foreground transition-colors hover:bg-white/10"
          >
            Explore Our Products
          </a>
        </div>

        <div className="mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 border-t border-ink-border pt-8 sm:grid-cols-4">
          {[
            ["Flagship", "Interactive Smart Displays"],
            ["Also from BlueTech", "Audio"],
            ["", "Wearables"],
            ["", "Computing"],
          ].map(([label, value], i) => (
            <div key={i} className="min-w-0">
              {label ? (
                <p className="eyebrow text-ink-muted/70">{label}</p>
              ) : (
                <p className="eyebrow text-transparent select-none" aria-hidden>
                  .
                </p>
              )}
              <p className="mt-2 text-sm font-medium text-ink-foreground sm:text-base">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}