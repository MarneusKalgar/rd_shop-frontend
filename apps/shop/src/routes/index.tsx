import { createFileRoute } from '@tanstack/react-router';
import { Home } from '../pages/Home';

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => {
    // TODO: fetch categories from GET /api/v1/categories
    return { categories: [] as string[] };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
