import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/portfolio/Logo";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Works } from "@/components/portfolio/Works";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#testimonials" className="transition-colors hover:text-foreground">Testimonials</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Hire me
          </a>
        </div>
      </header>
      <main>
        <Hero />
        <Services />
        <Experience />
        <Works />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
          <Logo small />
          <p>© {new Date().getFullYear()} John Mark Bartolo. Crafted with care in Pangasinan, PH.</p>
        </div>
      </footer>
    </div>
  );
}
