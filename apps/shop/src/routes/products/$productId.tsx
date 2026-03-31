import { createFileRoute } from '@tanstack/react-router';
import { ProductDetail } from '../../pages/ProductDetail';

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetail,
  loader: async ({ params }) => {
    // TODO: fetch product from GET /api/v1/products/:id
    return { productId: params.productId, product: null as unknown };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
