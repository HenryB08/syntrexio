// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages: Nitro is disabled and TanStack Start prerenders
// every route to full static HTML under dist/client (root-absolute asset paths,
// subfolder-index layout). No server runtime is produced or needed.
export default defineConfig({
  // No server runtime: skip Nitro entirely. TanStack Start prerenders to static HTML.
  nitro: false,
  // The prerender step boots a Vite preview server; force IPv4 so it does not try
  // to bind IPv6 "::" (unsupported in some CI/sandbox environments).
  vite: {
    server: { host: "127.0.0.1" },
    preview: { host: "127.0.0.1" },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // Prerender every route to full static HTML. `enabled: true` is required, or the
    // step is skipped (post-build derives enabled from this or a page-level flag).
    // No `spa` block: spa.enabled masks "/" as an empty _shell.html instead of a real
    // home index.html. A 404.html client-routing fallback is added at the Pages layer.
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
    },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/services" },
      { path: "/pricing" },
      { path: "/projects" },
      { path: "/contact" },
      { path: "/leak-audit" },
    ],
  },
});
