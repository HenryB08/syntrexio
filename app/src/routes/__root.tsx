import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { siteHead } from "@/lib/seo";
import { ChatBubble } from "@/components/site/ChatBubble";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Site-wide meta + Organization/LocalBusiness/WebSite JSON-LD, ported
      // from the pre-cutover site so every page carries them.
      ...siteHead().meta,
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const card = target?.closest?.(".surface-card") as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // Reveal safety net. The scroll-entrance classes (.reveal, .spread-in, etc.)
  // default to opacity:0 and only become visible when their CSS animation
  // completes. Chromium can leave that animation stuck at frame 0 when an
  // element jumps into view (fast scroll, anchor jump, or a late font reflow),
  // which leaves the content invisible. This watches for the .in-view class and,
  // after the animation window has passed, forces any element still stuck
  // invisible to its final visible state. Elements that animated normally are
  // already at opacity ~1 and are left untouched, so the animation is preserved.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const SEL =
      ".reveal,.spread-in,.side-in-left,.side-in-right,.stat-scale,.headline-blur,.card-reveal";
    const scheduled = new WeakSet<Element>();
    const force = (el: HTMLElement) => {
      el.style.setProperty("opacity", "1", "important");
      el.style.setProperty("transform", "none", "important");
      el.style.setProperty("filter", "none", "important");
      el.style.setProperty("clip-path", "none", "important");
    };
    const consider = (el: Element) => {
      if (scheduled.has(el)) return;
      if (!(el instanceof HTMLElement)) return;
      if (!el.matches(SEL) || !el.classList.contains("in-view")) return;
      scheduled.add(el);
      // Wait past the longest reveal (max stagger delay + duration ~1.5s) so a
      // normal animation has finished; only rescue what is still invisible.
      window.setTimeout(() => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.99) force(el);
      }, 1600);
    };
    const mo = new MutationObserver((muts) => {
      for (const m of muts) if (m.type === "attributes") consider(m.target as Element);
    });
    mo.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });
    document.querySelectorAll(SEL).forEach(consider);
    return () => mo.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <SiteNav />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
        <ChatBubble />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
