import { Wordmark } from "./Wordmark";
import { contact } from "@/lib/site-data";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Interactive Smart Displays", href: "#interactive" },
      { label: "Audio", href: "#audio" },
      { label: "Wearables", href: "#wearables" },
      { label: "Computing", href: "#computing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why BlueTech", href: "#why-bluetech" },
      { label: "Services and support", href: "#services" },
      { label: "Applications", href: "#applications" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-border bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Wordmark tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              BlueTech is a technology reseller in Rwanda, supplying interactive smart
              displays, audio, wearables and computing to organisations and individuals —
              with installation, training and support.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
              <h2 className="eyebrow text-ink-muted/60">{col.title}</h2>
              {col.links.map((l) => (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          ))}

          <div className="flex flex-col gap-3">
            <h2 className="eyebrow text-ink-muted/60">Contact</h2>
            <a href={contact.phoneHref} className="text-sm text-ink-muted hover:text-ink-foreground">
              {contact.phone}
            </a>
            <a
              href={contact.whatsappHref}
              className="text-sm text-ink-muted hover:text-ink-foreground"
            >
              WhatsApp {contact.whatsapp}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-ink-muted hover:text-ink-foreground"
            >
              {contact.email}
            </a>
            <p className="text-sm text-ink-muted">{contact.address}</p>
            <p className="text-sm text-ink-muted">{contact.hours}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BlueTech. All rights reserved.</p>
          <p>Kigali, Rwanda</p>
        </div>
      </div>

      <a
        href={contact.whatsappHref}
        aria-label="Chat with BlueTech on WhatsApp"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-brand px-5 py-3.5 text-sm font-medium text-ink-foreground shadow-lg sm:hidden"
      >
        WhatsApp
      </a>
    </footer>
  );
}
