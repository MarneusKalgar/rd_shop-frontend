import { createFileRoute } from '@tanstack/react-router';
import { Category } from '../../pages/Category';

export const Route = createFileRoute('/categories/$category')({
  component: Category,
  loader: async ({ params }) => {
    // TODO: fetch products from GET /api/v1/products?category=$category
    return { category: params.category, products: [] as unknown[] };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
