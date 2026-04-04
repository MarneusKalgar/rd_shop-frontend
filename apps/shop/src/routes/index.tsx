import { createFileRoute } from '@tanstack/react-router';
import { Home } from '../pages/Home';
import { productsApi } from '@/store/api/productsApi';
import { store } from '@/store';

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => {
    const result = await store.dispatch(
      productsApi.endpoints.getProductsCategories.initiate(undefined),
    );
    return { categories: result.data?.data ?? [] };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
