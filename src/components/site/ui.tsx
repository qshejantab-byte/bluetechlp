import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

const variants = {
  primary:
    "bg-brand text-ink-foreground hover:bg-brand-bright",
  outlineDark:
    "border border-ink-border text-ink-foreground hover:bg-white/10",
  outlineLight:
    "border border-foreground/20 text-foreground hover:bg-accent",
} as const;

export function Cta({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors",
        size === "sm" ? "px-5 py-2.5 text-sm" : "px-7 py-4 text-base",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Section({
  id,
  tone = "light",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28 lg:py-36",
        tone === "dark" ? "bg-ink" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ tone = "light", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <p className={cn("eyebrow", tone === "dark" ? "text-brand-bright" : "text-brand")}>
      {children}
    </p>
  );
}

export function Heading({
  tone = "light",
  as: Tag = "h2",
  className,
  children,
}: {
  tone?: Tone;
  as?: "h2" | "h3";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold leading-[1.04]",
        Tag === "h2" ? "text-[2.1rem] sm:text-5xl lg:text-[3.5rem]" : "text-[1.7rem] sm:text-4xl",
        tone === "dark" ? "text-ink-foreground" : "text-foreground",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lede({ tone = "light", className, children }: { tone?: Tone; className?: string; children: ReactNode }) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed sm:text-lg",
        tone === "dark" ? "text-ink-muted" : "text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
