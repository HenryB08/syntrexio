import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.6 6.32a5.72 5.72 0 0 1-3.4-1.1 5.7 5.7 0 0 1-2.15-3.22h-3.2v13.3a2.9 2.9 0 1 1-2.05-2.78v-3.25a6.15 6.15 0 1 0 5.25 6.08V9.19a8.9 8.9 0 0 0 5.55 1.9v-3.2c-.02 0 0 .43 0 .43z" />
    </svg>
  );
}

const cols = [
  {
    title: "Product",
    links: [
      { to: "/services", label: "Services" },
      { to: "/pricing", label: "Pricing" },
      { to: "/leak-audit", label: "Free Leak Audit" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  const taglineRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = taglineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const tagline = "INNOVATE. AUTOMATE. ELEVATE.";

  return (
    <footer className="border-t border-hairline bg-background">
      <div className="border-b border-hairline">
        <div className="container-page py-10">
          <div
            ref={taglineRef}
            className="letter-reveal text-display text-center text-2xl tracking-[0.28em] text-foreground md:text-4xl"
          >
            {tagline.split("").map((ch, i) => (
              <span key={i} style={{ ["--i" as never]: i }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            Syntrex builds SYN. AI that answers your customers today, and runs
            your business next.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <a
              href="https://www.instagram.com/syntrexio"
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-md border border-hairline text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@syntrexio"
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-md border border-hairline text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-foreground"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/syntrexco"
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-md border border-hairline text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-eyebrow mb-4">{c.title}</div>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="text-eyebrow mb-4">Contact</div>
          <a
            href="mailto:henry@syntrexio.com"
            className="group inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
          >
            <Mail size={14} className="text-muted-foreground group-hover:text-accent" />
            henry@syntrexio.com
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Windermere, FL · Greater Orlando
            <br />
            Serving clients worldwide.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/70">
            Response within 24 hours.
          </p>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Syntrex. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="https://syn.syntrexio.com" className="transition-colors hover:text-foreground">SYN</a>
            <span aria-hidden>·</span>
            <Link to="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
            <span aria-hidden>·</span>
            <Link to="/terms" className="transition-colors hover:text-foreground">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}