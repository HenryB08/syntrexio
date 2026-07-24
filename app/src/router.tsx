import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Prefetch a route's code + data on hover/touch intent so clicking a nav
    // link transitions instantly instead of blocking on a click-time load
    // (which caused the visible lag and half-rendered frames between pages).
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
