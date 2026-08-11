import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "@/hooks/use-reveal";
import { contact } from "@/lib/site-data";

const interests = [
  "Interactive Smart Displays",
  "Audio",
  "Wearables",
  "Computing",
  "Technical Support",
  "General Enquiry",
];

const fieldClass =
  "w-full border border-border bg-card px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-brand";

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-brand">Contact</p>
          <h2 className="mt-5 font-display text-[2.1rem] leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
            Ready to upgrade the way you work?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have a product requirement, need an interactive display, or looking for a
            complete technology setup? Talk to BlueTech.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <dl className="border-t border-border">
              {[
                ["Phone", contact.phone, contact.phoneHref],
                ["WhatsApp", contact.whatsapp, contact.whatsappHref],
                ["Email", contact.email, `mailto:${contact.email}`],
                ["Address", contact.address, null],
                ["Hours", contact.hours, null],
              ].map(([label, value, href]) => (
                <div key={label as string} className="border-b border-border py-5">
                  <dt className="eyebrow text-muted-foreground">{label}</dt>
                  <dd className="mt-2 text-base">
                    {href ? (
                      <a href={href as string} className="hover:text-brand">
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
                setSending(true);
                const form = e.currentTarget;
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
                <input required name="name" placeholder="Full name" className={fieldClass} />
                <input name="company" placeholder="Company / organisation" className={fieldClass} />
                <input required type="email" name="email" placeholder="Email" className={fieldClass} />
                <input name="phone" placeholder="Phone" className={fieldClass} />
              </div>
              <select required name="interest" defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Product / solution interested in
                </option>
                {interests.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about the room, the requirement or the quantity."
                className={`${fieldClass} resize-none`}
              />
              <button
                type="submit"
                disabled={sending}
                className="mt-2 rounded-full bg-brand px-7 py-4 text-base font-medium text-ink-foreground transition-colors hover:bg-brand-bright disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send Enquiry"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}