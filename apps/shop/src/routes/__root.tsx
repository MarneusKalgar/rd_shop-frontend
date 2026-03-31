import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

// eslint-disable-next-line
const RootLayout = () => (
  <>
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>Header placeholder</header>
    <main style={{ padding: '1rem' }}>
      <Outlet />
    </main>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
