import { createRootRoute, Outlet } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';

// eslint-disable-next-line
const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import('@tanstack/react-router-devtools').then(res => ({
        default: res.TanStackRouterDevtools,
      })),
    );

// eslint-disable-next-line
const RootLayout = () => (
  <>
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>Header placeholder</header>
    <main style={{ padding: '1rem' }}>
      <Outlet />
    </main>
    <Suspense>
      <TanStackRouterDevtools />
    </Suspense>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
