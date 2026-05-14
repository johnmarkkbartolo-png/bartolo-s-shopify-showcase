import { Mail, Phone, MapPin, ExternalLink, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/60 py-24 md:py-32">
      <div className="absolute -left-32 top-12 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-elevated)] md:p-16">
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Contact</span>
              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
                Let's get your store <span className="italic text-accent">running smoothly.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                Tell me a little about your Shopify store and what you need a hand with. I'll get back within one business day.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=johnmarkkbartolo@gmail.com&su=Shopify%20VA%20Inquiry&body=Hi%20John%20Mark%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Send me an email
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <ul className="space-y-5 text-sm">
              <ContactRow icon={Mail} label="Email" value="johnmarkkbartolo@gmail.com" href="mailto:johnmarkkbartolo@gmail.com" />
              <ContactRow icon={Phone} label="Phone" value="+63 926 307 5358" href="tel:+639263075358" />
              <ContactRow icon={MapPin} label="Based in" value="Pangasinan, Philippines" />
              <ContactRow icon={ExternalLink} label="OnlineJobs.ph" value="View profile" href="https://www.onlinejobs.ph/jobseekers/info/4901738" external />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, external }: { icon: typeof Mail; label: string; value: string; href?: string; external?: boolean }) {
  const content = (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-background/50 p-4 transition-colors hover:bg-secondary/60">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 truncate font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
  if (!href) return <li>{content}</li>;
  return <li><a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{content}</a></li>;
}