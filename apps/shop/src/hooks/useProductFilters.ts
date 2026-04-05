import { useNavigate } from '@tanstack/react-router';
import { Route } from '@/routes/categories/$category';
import { useFilters } from '@/hooks/useFilters';
import type { FilterKey } from '@/components/SortToolbar/chipBuilder';

export type ProductFilterKey = 'brand' | 'country' | 'isActive' | 'maxPrice' | 'minPrice';

export function useProductFilters() {
  const search = Route.useSearch();
  const routeNavigate = useNavigate({ from: Route.fullPath });

  const navigate = (updater: (prev: typeof search) => typeof search) => {
    void routeNavigate({ search: updater });
  };

  const base = useFilters(search, navigate);

  const removeFilter = (key: FilterKey, value?: string) => {
    if ((key === 'brand' || key === 'country') && value !== undefined) {
      base.removeArrayValue(key, value);
      return;
    }
    if (key === 'categories') return; // never present in category page
    base.clearField(key as keyof typeof search);
  };

  const clearFilters = () => {
    void routeNavigate({
      search: ({ sortBy, sortOrder }) => ({ sortBy, sortOrder }),
    });
  };

  return {
    filters: { ...base.filters },
    setBrand: base.setBrand,
    setCountry: base.setCountry,
    setMinPrice: base.setMinPrice,
    setMaxPrice: base.setMaxPrice,
    setIsActive: base.setIsActive,
    removeFilter,
    clearFilters,
  };
}
