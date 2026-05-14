import { SectionHeader } from "./Services";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "John Mark made our Shopify backend feel effortless. Orders went out faster and our customers actually noticed the better communication.",
    name: "Sarah L.",
    role: "DTC Founder, Apparel",
  },
  {
    text: "Reliable, organized, and quick to learn our processes. He took ownership of our listings and inventory from day one.",
    name: "Marcus T.",
    role: "E-commerce Manager",
  },
  {
    text: "The kind of VA you keep. Calm under pressure, great with customers, and never misses a detail.",
    name: "Priya R.",
    role: "Store Owner",
  },
  {
    text: "Strong attention to detail in execution, reliable in quality audits, proactive in handling ad hoc tasks, and supportive in team leadership.",
    name: "Carrie A.",
    role: "Quality Analyst, Supervisor",
  },
  {
    text: "Efficient in handling customer concerns and consistent in following workflow procedures to ensure proper resolution.",
    name: "Ralph A.",
    role: "Customer Care, Supervisor",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border/60 bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Testimonials" title="Kind words from clients" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <Quote className="h-7 w-7 text-accent" />
              <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-foreground">
                "{q.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{q.name}</p>
                <p className="text-xs text-muted-foreground">{q.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}