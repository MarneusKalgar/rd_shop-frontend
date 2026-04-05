import { useNavigate } from '@tanstack/react-router';
import { usePagination } from '@/hooks/usePagination';
import { Route } from '@/routes/categories/$category';

export function useProductPagination() {
  const { cursor, page } = Route.useSearch();
  const routeNavigate = useNavigate({ from: Route.fullPath });

  return usePagination(cursor, page, ({ cursor, page }) => {
    void routeNavigate({ search: prev => ({ ...prev, cursor, page }) });
  });
}
