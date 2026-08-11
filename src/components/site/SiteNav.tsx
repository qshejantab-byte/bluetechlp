import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { navLinks } from "@/lib/site-data";
import { Cta } from "./ui";

const ids = navLinks.map((l) => l.href.slice(1));

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-ink-border bg-ink/90 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[88rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="flex min-w-0 items-center" aria-label="BlueTech home">
          <Wordmark tone="light" />
        </a>

        <nav aria-label="Primary" className="hidden justify-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href.slice(1) ? "true" : undefined}
              className={`relative py-1 text-sm transition-colors ${
                active === l.href.slice(1)
                  ? "text-ink-foreground"
                  : "text-ink-muted hover:text-ink-foreground"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-brand-bright transition-transform duration-500 ${
                  active === l.href.slice(1) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Cta href="#contact" size="sm" className="hidden sm:inline-flex">
            Get a Quote
          </Cta>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink-border text-ink-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-ink transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[36rem]" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 pb-8 pt-2 sm:px-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink-border py-4 font-display text-2xl tracking-tight text-ink-foreground"
            >
              {l.label}
            </a>
          ))}
          <Cta href="#contact" className="mt-6 w-full" >
            Get a Quote
          </Cta>
        </nav>
      </div>
    </header>
  );
}
