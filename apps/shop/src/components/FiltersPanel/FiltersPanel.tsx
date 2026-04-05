import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { BrandFilter } from '@/components/CategoryFilters/BrandFilter';
import { CountryFilter } from '@/components/CategoryFilters/CountryFilter';
import { PriceRangeFilter } from '@/components/CategoryFilters/PriceRangeFilter';
import { StockFilter } from '@/components/CategoryFilters/StockFilter';
import type { Product } from '@/store/api/types/product';
import { rootSx } from './FiltersPanel.styles';

interface FiltersPanelSlots {
  /** Rendered after the title, before the divider (e.g. keyword SearchFilter) */
  top?: React.ReactNode;
  /** Rendered after the divider, before price (e.g. CategoriesFilter) */
  middle?: React.ReactNode;
}

export interface FiltersPanelProps {
  brand: string[] | undefined;
  country: string[] | undefined;
  isActive: boolean | undefined;
  minPrice: string | undefined;
  maxPrice: string | undefined;
  products?: Product[];
  onBrandChange: (v: string[]) => void;
  onCountryChange: (v: string[]) => void;
  onIsActiveChange: (v: boolean) => void;
  onPriceChange: (min: string | undefined, max: string | undefined) => void;
  onClear: () => void;
  slots?: FiltersPanelSlots;
}

export function FiltersPanel({
  brand,
  country,
  isActive,
  minPrice,
  maxPrice,
  products,
  onBrandChange,
  onCountryChange,
  onIsActiveChange,
  onPriceChange,
  onClear,
  slots,
}: FiltersPanelProps) {
  const { t } = useTranslation('products');

  return (
    <Box sx={rootSx}>
      <Typography variant="subtitle1" fontWeight={600}>
        {t('filter_label')}
      </Typography>

      {slots?.top}

      <Divider />

      {slots?.middle}

      <PriceRangeFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        onChange={onPriceChange}
        products={products}
      />

      <BrandFilter value={brand} onChange={onBrandChange} products={products} />

      <CountryFilter value={country} onChange={onCountryChange} products={products} />

      <StockFilter value={isActive} onChange={onIsActiveChange} />

      <Button variant="outlined" size="small" onClick={onClear}>
        {t('filter_clear')}
      </Button>
    </Box>
  );
}
