export function Logo({ small = false }: { small?: boolean }) {
  return (
    <a href="#top" className="group inline-flex items-center gap-2">
      <span
        className={`flex items-center justify-center rounded-md bg-primary font-serif text-primary-foreground ${
          small ? "h-7 w-7 text-sm" : "h-9 w-9 text-base"
        }`}
        aria-hidden
      >
        JM
      </span>
      <span className={`font-serif tracking-tight text-foreground ${small ? "text-sm" : "text-base"}`}>
        John Mark<span className="text-accent">.</span>
      </span>
    </a>
  );
}