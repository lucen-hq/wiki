import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { NotFound } from '@/components/not-found';

export function getRouter() {
  const basePath = import.meta.env.BASE_URL?.replace(/\/$/, '') || '/';
  return createTanStackRouter({
    routeTree,
    basepath: basePath,
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultNotFoundComponent: NotFound,
  });
}
