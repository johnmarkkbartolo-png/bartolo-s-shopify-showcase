import { Package, ShoppingBag, Truck, Headphones, BarChart3, Search } from "lucide-react";

const services = [
  { icon: ShoppingBag, title: "Shopify Store Management", desc: "Day-to-day admin, theme tweaks, app setup, and keeping your store running clean." },
  { icon: Package, title: "Product Listing & Optimization", desc: "Accurate titles, descriptions, pricing, and imagery that convert browsers into buyers." },
  { icon: Truck, title: "Order Fulfillment & Tracking", desc: "Smooth processing, supplier coordination, and proactive shipping updates." },
  { icon: BarChart3, title: "Inventory & Reporting", desc: "Live stock monitoring, sales reports, and Google Sheets dashboards that prevent overselling." },
  { icon: Headphones, title: "Customer Support", desc: "Email and chat support via Gorgias, Gmail, and Slack — friendly, fast, on-brand." },
  { icon: Search, title: "Product Research & Sourcing", desc: "Vetting suppliers on Alibaba, Amazon, and Poky to find products that fit your store." },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Services" title="What I help with" subtitle="Everything you need to keep an e-commerce store running — without you doing the heavy lifting." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group bg-card p-8 transition-colors hover:bg-secondary/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:-rotate-6">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 font-serif text-4xl tracking-tight text-foreground md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}