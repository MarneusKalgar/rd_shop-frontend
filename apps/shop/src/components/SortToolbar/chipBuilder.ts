type FilterKey = 'brand' | 'country' | 'isActive' | 'maxPrice' | 'minPrice' | 'search';

interface FiltersValue {
  brand: string | undefined;
  country: string | undefined;
  isActive: boolean | undefined;
  maxPrice: string | undefined;
  minPrice: string | undefined;
  search: string | undefined;
}

export interface ChipItem {
  key: FilterKey | 'price';
  label: string;
  filterKey?: FilterKey;
}

export function buildChips(
  filters: FiltersValue,
  brandLabel: string,
  countryLabel: string,
  inStockLabel: string,
): ChipItem[] {
  const chips: ChipItem[] = [];

  if (filters.search) {
    chips.push({ key: 'search', label: `"${filters.search}"`, filterKey: 'search' });
  }
  if (filters.brand) {
    chips.push({ key: 'brand', label: `${brandLabel}: ${filters.brand}`, filterKey: 'brand' });
  }
  if (filters.country) {
    chips.push({
      key: 'country',
      label: `${countryLabel}: ${filters.country}`,
      filterKey: 'country',
    });
  }
  if (filters.minPrice && filters.maxPrice) {
    chips.push({
      key: 'price',
      label: `$${filters.minPrice} – $${filters.maxPrice}`,
      filterKey: 'minPrice',
    });
  } else if (filters.minPrice) {
    chips.push({ key: 'minPrice', label: `≥ $${filters.minPrice}`, filterKey: 'minPrice' });
  } else if (filters.maxPrice) {
    chips.push({ key: 'maxPrice', label: `≤ $${filters.maxPrice}`, filterKey: 'maxPrice' });
  }
  if (filters.isActive) {
    chips.push({ key: 'isActive', label: inStockLabel, filterKey: 'isActive' });
  }

  return chips;
}
