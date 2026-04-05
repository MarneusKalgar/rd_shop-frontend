import { useProductFilters } from '@/hooks/useProductFilters';
import { FiltersPanel } from '@/components/FiltersPanel/FiltersPanel';
import type { Product } from '@/store/api/types/product';

interface CategoryFiltersProps {
  products?: Product[];
  onClear?: () => void;
}

export function CategoryFilters({ products, onClear }: CategoryFiltersProps) {
  const { filters, setBrand, setCountry, setMinPrice, setMaxPrice, setIsActive, clearFilters } =
    useProductFilters();

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
    />
  );
}
