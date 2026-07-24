import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Preload every rendered link's route chunk up front. Each route is a tiny
    // 4-8KB lazy chunk; without this, a click navigates the URL before the
    // destination chunk has loaded, so the router keeps the previous (home)
    // route on screen for ~120-250ms — the "wrong page / distorted frame" bug.
    // Preloading on render means the chunk is already there at click time, so
    // the correct route renders immediately.
    defaultPreload: "render",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
