export type FilterKey =
  | 'brand'
  | 'categories'
  | 'country'
  | 'isActive'
  | 'maxPrice'
  | 'minPrice'
  | 'priceRange'
  | 'search';

interface FiltersValue {
  brand?: string[] | undefined;
  categories?: string[] | undefined;
  country?: string[] | undefined;
  isActive?: boolean | undefined;
  maxPrice?: string | undefined;
  minPrice?: string | undefined;
  search?: string | undefined;
}

export interface ChipItem {
  key: string;
  label: string;
  filterKey: FilterKey;
  value?: string;
}

export function buildChips(
  filters: FiltersValue,
  brandLabel: string,
  countryLabel: string,
  categoriesLabel: string,
  inStockLabel: string,
): ChipItem[] {
  const chips: ChipItem[] = [];

  if (filters.search) {
    chips.push({ key: 'search', label: `"${filters.search}"`, filterKey: 'search' });
  }

  for (const b of filters.brand ?? []) {
    chips.push({ key: `brand-${b}`, label: `${brandLabel}: ${b}`, filterKey: 'brand', value: b });
  }

  for (const c of filters.country ?? []) {
    chips.push({
      key: `country-${c}`,
      label: `${countryLabel}: ${c}`,
      filterKey: 'country',
      value: c,
    });
  }

  for (const cat of filters.categories ?? []) {
    chips.push({
      key: `categories-${cat}`,
      label: `${categoriesLabel}: ${cat}`,
      filterKey: 'categories',
      value: cat,
    });
  }

  if (filters.minPrice && filters.maxPrice) {
    chips.push({
      key: 'price',
      label: `$${filters.minPrice} – $${filters.maxPrice}`,
      filterKey: 'priceRange',
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
