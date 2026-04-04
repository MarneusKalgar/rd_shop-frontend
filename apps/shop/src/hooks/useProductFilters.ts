import { useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Route } from '@/routes/categories/$category';

type FilterKey = 'brand' | 'country' | 'isActive' | 'maxPrice' | 'minPrice' | 'search';

export function useProductFilters() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setFilter = <K extends FilterKey>(key: K, value: ReturnType<typeof Route.useSearch>[K]) => {
    void navigate({
      search: prev => ({ ...prev, [key]: value, cursor: undefined, page: undefined }),
    });
  };

  const setSearch = (value: string) => {
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    searchTimerRef.current = setTimeout(() => {
      void navigate({
        search: prev => ({
          ...prev,
          search: value || undefined,
          cursor: undefined,
          page: undefined,
        }),
      });
    }, 300);
  };

  const setBrand = (value: string) => setFilter('brand', value || undefined);
  const setCountry = (value: string) => setFilter('country', value || undefined);
  const setMinPrice = (value: string) => setFilter('minPrice', value || undefined);
  const setMaxPrice = (value: string) => setFilter('maxPrice', value || undefined);
  const setIsActive = (value: boolean) => setFilter('isActive', value || undefined);

  const removeFilter = (key: FilterKey) => {
    void navigate({
      search: prev => {
        const next = { ...prev };
        delete next[key];
        next.cursor = undefined;
        next.page = undefined;
        return next;
      },
    });
  };

  const clearFilters = () => {
    void navigate({
      search: ({ sortBy, sortOrder }) => ({ sortBy, sortOrder }),
    });
  };

  const filters = {
    brand: search.brand,
    country: search.country,
    isActive: search.isActive,
    maxPrice: search.maxPrice,
    minPrice: search.minPrice,
    search: search.search,
  };

  return {
    filters,
    setSearch,
    setBrand,
    setCountry,
    setMinPrice,
    setMaxPrice,
    setIsActive,
    removeFilter,
    clearFilters,
  };
}
