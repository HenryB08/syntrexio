import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 md:top-5">
        <div className="container-page flex items-center gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* Desktop: 3-column grid — logo left, pill centered in the viewport,
              spacer right. The pill sits between two equal 1fr columns, so it is
              centered independent of the logo and can never overlap it. */}
          <div className="hidden lg:flex min-w-0 items-center justify-start">
            <Logo />
          </div>

          <div
            className={`hidden lg:flex items-center gap-1 rounded-full p-1.5 pl-2 backdrop-blur-xl transition-all duration-300 ${
              scrolled
                ? "border border-hairline bg-background/85 shadow-[0_10px_40px_-10px_oklch(0_0_0/0.6)]"
                : "border border-white/10 bg-background/45"
            }`}
          >
            <nav className="flex items-center gap-0.5">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="nav-link rounded-full px-3.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-white/10 data-[status=active]:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="ml-1 pl-1 border-l border-white/10">
              <MagneticButton strength={0.25} radius={90}>
                <Button asChild size="sm" variant="accent" className="rounded-full h-8 px-4 text-[13px]">
                  <Link to="/leak-audit">Get Your Free Leak Audit</Link>
                </Button>
              </MagneticButton>
            </div>
          </div>

          {/* Desktop grid spacer (col 3) — balances the logo so the pill centers */}
          <div className="hidden lg:block" aria-hidden />

          {/* Mobile: compact pill */}
          <div
            className={`flex lg:hidden w-full items-center justify-between rounded-full border p-1.5 pl-3 backdrop-blur-xl transition-all ${
              scrolled
                ? "border-hairline bg-background/85 shadow-[0_8px_28px_-10px_oklch(0_0_0/0.6)]"
                : "border-white/10 bg-background/50"
            }`}
          >
            <Logo compact />
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-9 w-9 place-items-center rounded-full text-foreground transition-colors hover:bg-white/10"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
        <div className="relative flex h-full flex-col px-6 pb-8 pt-24">
          <nav className="flex flex-col gap-1">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-xl border border-transparent px-4 py-4 text-2xl font-medium text-muted-foreground transition-colors hover:border-hairline hover:text-foreground data-[status=active]:text-foreground"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Button asChild variant="accent" size="lg" className="w-full">
              <Link to="/leak-audit" onClick={() => setOpen(false)}>
                Get Your Free Leak Audit
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}