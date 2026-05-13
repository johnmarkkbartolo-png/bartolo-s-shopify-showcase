import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[var(--gradient-warm)] opacity-70" />
      <div className="absolute -right-24 top-12 -z-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new Shopify projects
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Helping Shopify stores <span className="italic text-accent">run smoother</span>, sell smarter.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm John Mark — a detail-oriented Shopify Virtual Assistant supporting e-commerce founders with accurate listings, smooth order fulfillment, inventory tracking, and dependable customer support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                See my work
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" />Pangasinan, Philippines</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-accent" />johnmarkkbartolo@gmail.com</span>
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-accent" />+63 926 307 5358</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">shopify · admin</span>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                {[
                  { label: "Orders fulfilled today", value: "42", trend: "+18%" },
                  { label: "Listings updated", value: "127", trend: "+9" },
                  { label: "Tickets resolved", value: "31", trend: "98% CSAT" },
                  { label: "Inventory synced", value: "Live", trend: "0 oversold" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-lg bg-secondary/60 px-4 py-3">
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="flex items-baseline gap-2">
                      <span className="font-serif text-lg text-foreground">{row.value}</span>
                      <span className="text-xs text-accent">{row.trend}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}