interface BaseFilterSearch {
  brand?: string[];
  country?: string[];
  isActive?: boolean;
  maxPrice?: string;
  minPrice?: string;
  cursor?: string;
  page?: number;
}

interface BaseFiltersResult {
  brand?: string[];
  country?: string[];
  isActive?: boolean;
  maxPrice?: string;
  minPrice?: string;
}

export function useFilters<S extends BaseFilterSearch>(
  search: S,
  navigate: (updater: (prev: S) => S) => void,
) {
  function setField<K extends keyof S>(key: K, value: S[K] | undefined) {
    navigate(prev => ({ ...prev, [key]: value, cursor: undefined, page: undefined }));
  }

  const setBrand = (value: string[]) =>
    setField('brand', (value.length ? value : undefined) as S['brand']);

  const setCountry = (value: string[]) =>
    setField('country', (value.length ? value : undefined) as S['country']);

  const setMinPrice = (value: string | undefined) => setField('minPrice', value as S['minPrice']);

  const setMaxPrice = (value: string | undefined) => setField('maxPrice', value as S['maxPrice']);

  const setIsActive = (value: boolean) =>
    setField('isActive', (value || undefined) as S['isActive']);

  function removeArrayValue(key: 'brand' | 'country', value: string) {
    navigate(prev => {
      const arr = prev[key] as string[] | undefined;
      const filtered = arr?.filter(v => v !== value);
      return {
        ...prev,
        [key]: filtered?.length ? filtered : undefined,
        cursor: undefined,
        page: undefined,
      };
    });
  }

  function clearField<K extends keyof S>(key: K) {
    navigate(prev => {
      const next = { ...prev };
      delete next[key];
      (next as BaseFilterSearch).cursor = undefined;
      (next as BaseFilterSearch).page = undefined;
      return next;
    });
  }

  const filters: BaseFiltersResult = {
    brand: search.brand,
    country: search.country,
    isActive: search.isActive,
    maxPrice: search.maxPrice,
    minPrice: search.minPrice,
  };

  return {
    filters,
    setBrand,
    setCountry,
    setMinPrice,
    setMaxPrice,
    setIsActive,
    removeArrayValue,
    clearField,
  };
}
