import { SectionHeader } from "./Services";

const jobs = [
  {
    role: "Shopify Virtual Assistant",
    type: "Part-time",
    period: "May 2025 — Jan 2026",
    bullets: [
      "Handled customer inquiries via email and chat — order tracking, returns, refunds.",
      "Managed Shopify orders and proactive shipping updates.",
      "Maintained accurate records of customer interactions and resolutions.",
    ],
  },
  {
    role: "Shopify Virtual Assistant",
    type: "Part-time",
    period: "Nov 2024 — Jun 2025",
    bullets: [
      "Built and maintained Shopify product listings — titles, descriptions, pricing, imagery.",
      "Coordinated with suppliers on availability, shipping, and order issues.",
      "Monitored inventory levels to prevent overselling.",
    ],
  },
  {
    role: "Quality Analyst",
    type: "Full-time",
    period: "Apr 2023 — Mar 2026",
    bullets: [
      "Monitored agent performance and process compliance.",
      "Provided coaching and actionable feedback.",
      "Improved quality metrics through detailed evaluations.",
    ],
  },
  {
    role: "General Virtual Assistant",
    type: "Part-time",
    period: "Feb 2022 — Sep 2022",
    bullets: [
      "Managed administrative tasks and client communications.",
      "Ensured accurate data entry, documentation, and task tracking.",
      "Maintained confidentiality with sensitive business information.",
    ],
  },
  {
    role: "Customer Support Representative",
    type: "Full-time",
    period: "Apr 2021 — Apr 2023",
    bullets: [
      "Resolved customer concerns through voice and chat support.",
      "Maintained strong customer satisfaction scores.",
      "Handled account issues and technician concerns efficiently.",
    ],
  },
];

const tools = ["Shopify","Gorgias","Klaviyo","Slack","Google Sheets","Gmail","Amazon","Alibaba","Poky","Canva","Zapier","ChatGPT","Gemini"];

export function Experience() {
  return (
    <section id="experience" className="border-t border-border/60 bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Experience" title="Five years of getting things done" subtitle="From frontline customer support to e-commerce operations — built on patience, accuracy, and process." />

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="md:sticky md:top-24 md:self-start">
            <h3 className="font-serif text-2xl text-foreground">Tools I use daily</h3>
            <p className="mt-2 text-sm text-muted-foreground">A practical stack for shipping work, not just talking about it.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">{t}</span>
              ))}
            </div>
          </div>

          <ol className="relative space-y-10 border-l border-border pl-8">
            {jobs.map((j, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[37px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-serif text-xl text-foreground">{j.role}</h4>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{j.period}</span>
                </div>
                <p className="text-sm font-medium text-accent">{j.type}</p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                  {j.bullets.map((b) => (<li key={b} className="flex gap-2"><span className="text-accent">—</span>{b}</li>))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}