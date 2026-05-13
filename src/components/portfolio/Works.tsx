import { SectionHeader } from "./Services";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "Apparel Store Listing Overhaul",
    tag: "Product Listing",
    metric: "120+ SKUs",
    desc: "Rewrote titles and descriptions across the catalog, standardized image specs, and reorganized collections for cleaner navigation.",
  },
  {
    title: "Order Fulfillment Workflow",
    tag: "Operations",
    metric: "0 oversold items",
    desc: "Built a daily routine across Shopify, suppliers, and tracking tools — every order out the door with proactive customer updates.",
  },
  {
    title: "Customer Support Inbox",
    tag: "Support",
    metric: "98% CSAT",
    desc: "Managed Gorgias and Gmail tickets for a DTC store: returns, refunds, sizing, and shipping — same-day responses, brand-safe tone.",
  },
  {
    title: "Inventory Tracking System",
    tag: "Reporting",
    metric: "Live sync",
    desc: "Set up Google Sheets dashboards tied to supplier feeds to keep stock levels accurate and prevent overselling during sales.",
  },
];

export function Works() {
  return (
    <section id="work" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Selected Work" title="Projects that moved the needle" subtitle="A snapshot of the kind of work I take on — discreetly, since most stores prefer privacy." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {works.map((w) => (
            <article key={w.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{w.tag}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-2xl tracking-tight text-foreground">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              <div className="mt-6 border-t border-border pt-4">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Outcome</span>
                <p className="mt-1 font-serif text-xl text-foreground">{w.metric}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}