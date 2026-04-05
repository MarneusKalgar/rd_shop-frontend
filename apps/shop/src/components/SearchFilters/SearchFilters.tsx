import { useSearchFilters } from '@/hooks/useSearchFilters';
import { FiltersPanel } from '@/components/FiltersPanel/FiltersPanel';
import type { Product } from '@/store/api/types/product';
import { CategoriesFilter } from './CategoriesFilter';

interface SearchFiltersProps {
  products?: Product[];
  onClear?: () => void;
}

export function SearchFilters({ products, onClear }: SearchFiltersProps) {
  const {
    filters,
    setBrand,
    setCountry,
    setMinPrice,
    setMaxPrice,
    setIsActive,
    setCategories,
    clearFilters,
  } = useSearchFilters();

  function handleClear() {
    clearFilters();
    onClear?.();
  }

  return (
    <FiltersPanel
      brand={filters.brand}
      country={filters.country}
      isActive={filters.isActive}
      minPrice={filters.minPrice}
      maxPrice={filters.maxPrice}
      products={products}
      onBrandChange={setBrand}
      onCountryChange={setCountry}
      onIsActiveChange={setIsActive}
      onPriceChange={(min, max) => {
        setMinPrice(min);
        setMaxPrice(max);
      }}
      onClear={handleClear}
      slots={{
        middle: <CategoriesFilter value={filters.categories} onChange={setCategories} />,
      }}
    />
  );
}
