import { createFileRoute, redirect } from '@tanstack/react-router';
import { Orders } from '../../pages/Orders';

export const Route = createFileRoute('/orders/')({
  beforeLoad: () => {
    const isAuthenticated = false; // TODO: get from Redux auth store
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: Orders,
  loader: async () => {
    // TODO: fetch orders from GET /api/v1/orders
    return { orders: [] as unknown[] };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
