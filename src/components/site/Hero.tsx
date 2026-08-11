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
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-60 sm:object-center sm:opacity-95"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.13_0.03_264/0.9)_0%,oklch(0.13_0.03_264/0.65)_40%,oklch(0.13_0.03_264/0.96)_100%)] sm:bg-[linear-gradient(180deg,oklch(0.13_0.03_264/0.75)_0%,oklch(0.13_0.03_264/0.25)_35%,oklch(0.13_0.03_264/0.9)_78%,oklch(0.13_0.03_264/0.97)_100%)]" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-[88rem] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:min-h-[96svh] lg:pb-24">
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

        <div className="mt-12 grid max-w-3xl gap-6 border-t border-ink-border pt-8 sm:grid-cols-[auto_1fr] sm:gap-12">
          <div className="min-w-0">
            <p className="eyebrow text-ink-muted/70">Flagship</p>
            <p className="mt-2 text-sm font-medium text-ink-foreground sm:text-base">
              Interactive Smart Displays
            </p>
          </div>
          <div className="min-w-0">
            <p className="eyebrow text-ink-muted/70">Also from BlueTech</p>
            <p className="mt-2 text-sm font-medium text-ink-foreground sm:text-base">
              Audio · Wearables · Computing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}