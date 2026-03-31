import { createFileRoute, redirect } from '@tanstack/react-router';
import { OrderDetail } from '../../pages/OrderDetail';

export const Route = createFileRoute('/orders/$orderId')({
  beforeLoad: () => {
    const isAuthenticated = false; // TODO: get from Redux auth store
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: OrderDetail,
  loader: async ({ params }) => {
    // TODO: fetch order from GET /api/v1/orders/:orderId
    return { orderId: params.orderId, order: null as unknown };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
