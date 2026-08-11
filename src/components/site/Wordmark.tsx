export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const base = tone === "light" ? "text-ink-foreground" : "text-foreground";
  return (
    <span
      className={`font-display text-[1.05rem] font-bold tracking-[-0.04em] sm:text-lg ${base}`}
    >
      <span className="text-brand">BLUE</span>
      <span className="ml-1 font-light tracking-[0.18em]">TECH</span>
    </span>
  );
}