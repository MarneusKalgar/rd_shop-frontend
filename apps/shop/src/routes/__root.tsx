import { createRootRouteWithContext } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import Box from '@mui/material/Box';
import { Header } from '../components/layout/Header/Header';
import { Footer } from '../components/layout/Footer/Footer';
import { Main } from '../components/layout/Main/Main';
import type { store } from '@/store';

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
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <Main />
    <Footer />
    <Suspense>
      <TanStackRouterDevtools />
    </Suspense>
  </Box>
);

export const Route = createRootRouteWithContext<{ store: typeof store }>()({
  component: RootLayout,
});
