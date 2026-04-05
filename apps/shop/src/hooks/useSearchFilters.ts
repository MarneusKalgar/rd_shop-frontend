import { useNavigate } from '@tanstack/react-router';
import { Route } from '@/routes/search';
import { useFilters } from '@/hooks/useFilters';
import type { FilterKey } from '@/components/SortToolbar/chipBuilder';
import type { ProductCategory } from '@/store/api/types/product';
import { omit } from '@/utils/objectUtils';

export type SearchFilterKey =
  | 'brand'
  | 'categories'
  | 'country'
  | 'isActive'
  | 'maxPrice'
  | 'minPrice';

export function useSearchFilters() {
  const search = Route.useSearch();
  const routeNavigate = useNavigate({ from: Route.fullPath });

  const navigate = (updater: (prev: typeof search) => typeof search) => {
    void routeNavigate({ search: updater });
  };

  const base = useFilters(search, navigate);

  const setCategories = (value: ProductCategory[]) => {
    void routeNavigate({
      search: prev => ({
        ...prev,
        categories: value.length ? value : undefined,
        cursor: undefined,
        page: undefined,
      }),
    });
  };

  const removeFilter = (key: FilterKey, value?: string) => {
    if ((key === 'brand' || key === 'country') && value !== undefined) {
      base.removeArrayValue(key, value);
      return;
    }

    if (key === 'categories' && value !== undefined) {
      void routeNavigate({
        search: prev => {
          const filtered = prev.categories?.filter(c => c !== value);
          return {
            ...prev,
            categories: filtered?.length ? filtered : undefined,
            cursor: undefined,
            page: undefined,
          };
        },
      });
      return;
    }

    if (key === 'priceRange') {
      void routeNavigate({
        search: prev => ({
          ...omit(prev, ['minPrice', 'maxPrice']),
          cursor: undefined,
          page: undefined,
        }),
      });
      return;
    }

    if (key === 'search') return; // not in search route schema

    base.clearField(key as keyof typeof search);
  };

  const clearFilters = () => {
    void routeNavigate({
      search: ({ q, sortBy, sortOrder }) => ({ q, sortBy, sortOrder }),
    });
  };

  return {
    filters: { ...base.filters, categories: search.categories },
    setBrand: base.setBrand,
    setCountry: base.setCountry,
    setMinPrice: base.setMinPrice,
    setMaxPrice: base.setMaxPrice,
    setIsActive: base.setIsActive,
    setCategories,
    removeFilter,
    clearFilters,
  };
}
