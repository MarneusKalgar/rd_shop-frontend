import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useProductFilters } from '@/hooks/useProductFilters';
import { rootSx } from './CategoryFilters.styles';
import { BrandFilter } from './BrandFilter';
import { CountryFilter } from './CountryFilter';
import { PriceRangeFilter } from './PriceRangeFilter';
import { SearchFilter } from './SearchFilter';
import { StockFilter } from './StockFilter';

interface CategoryFiltersProps {
  onClear?: () => void;
}

export function CategoryFilters({ onClear }: CategoryFiltersProps) {
  const { t } = useTranslation('products');
  const {
    filters,
    setSearch,
    setBrand,
    setCountry,
    setMinPrice,
    setMaxPrice,
    setIsActive,
    clearFilters,
  } = useProductFilters();

  function handleClear() {
    clearFilters();
    onClear?.();
  }

  return (
    <Box sx={rootSx}>
      <Typography variant="subtitle1" fontWeight={600}>
        {t('filter_label')}
      </Typography>

      <SearchFilter value={filters.search ?? ''} onChange={setSearch} />

      <Divider />

      <PriceRangeFilter
        minPrice={filters.minPrice}
        maxPrice={filters.maxPrice}
        onMinChange={setMinPrice}
        onMaxChange={setMaxPrice}
      />

      <BrandFilter value={filters.brand} onChange={setBrand} />

      <CountryFilter value={filters.country} onChange={setCountry} />

      <StockFilter value={filters.isActive} onChange={setIsActive} />

      <Button variant="outlined" size="small" onClick={handleClear}>
        {t('filter_clear')}
      </Button>
    </Box>
  );
}
