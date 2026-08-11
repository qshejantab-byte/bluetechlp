import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "@/hooks/use-reveal";
import { contact, enquiryOptions } from "@/lib/site-data";
import { Eyebrow, Heading, Lede, Section } from "./ui";

const fieldClass =
  "w-full border border-border bg-card px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-brand";

const rows = [
  ["Phone", contact.phone, contact.phoneHref],
  ["WhatsApp", contact.whatsapp, contact.whatsappHref],
  ["Email", contact.email, `mailto:${contact.email}`],
  ["Address", contact.address, null],
  ["Hours", contact.hours, null],
] as const;

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <Section id="contact">
      <Reveal className="max-w-3xl">
        <Eyebrow>Contact</Eyebrow>
        <Heading className="mt-5">Tell us the room. We'll quote the right setup.</Heading>
        <Lede className="mt-6">
          Send a requirement, a quantity or a question. A member of the BlueTech team will
          reply with a recommendation and pricing.
        </Lede>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <dl className="border-t border-border">
            {rows.map(([label, value, href]) => (
              <div key={label} className="border-b border-border py-5">
                <dt className="eyebrow text-muted-foreground">{label}</dt>
                <dd className="mt-2 text-base">
                  {href ? (
                    <a href={href} className="transition-colors hover:text-brand">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <a
            href={contact.whatsappHref}
            className="mt-8 inline-flex rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            Talk to BlueTech on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={80}>
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = String(data.get("name") ?? "").trim();
              const email = String(data.get("email") ?? "").trim();
              const message = String(data.get("message") ?? "").trim();
              if (name.length < 2 || name.length > 100) {
                toast.error("Please enter your full name (2–100 characters).");
                return;
              }
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 255) {
                toast.error("Please enter a valid email address.");
                return;
              }
              if (message.length > 1000) {
                toast.error("Please keep your message under 1000 characters.");
                return;
              }
              setSending(true);
              setTimeout(() => {
                setSending(false);
                form.reset();
                toast.success("Enquiry received", {
                  description: "The BlueTech team will get back to you shortly.",
                });
              }, 500);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input id="name" required maxLength={100} name="name" placeholder="Full name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="company" className="sr-only">
                  Company or organisation
                </label>
                <input id="company" maxLength={120} name="company" placeholder="Company / organisation" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input id="email" required type="email" maxLength={255} name="email" placeholder="Email" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input id="phone" maxLength={30} name="phone" placeholder="Phone" className={fieldClass} />
              </div>
            </div>
            <label htmlFor="interest" className="sr-only">
              Product or solution
            </label>
            <select id="interest" required name="interest" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Product / solution
              </option>
              {enquiryOptions.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={1000}
              placeholder="Tell us about the room, the requirement or the quantity."
              className={`${fieldClass} resize-none`}
            />
            <button
              type="submit"
              disabled={sending}
              className="mt-2 rounded-full bg-brand px-7 py-4 text-base font-medium text-ink-foreground transition-colors hover:bg-brand-bright disabled:opacity-60"
            >
              {sending ? "Sending…" : "Get a Quote"}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
