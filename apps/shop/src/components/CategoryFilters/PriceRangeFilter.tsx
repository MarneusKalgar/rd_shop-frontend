import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import type React from 'react';
import { useTranslation } from 'react-i18next';
import { PRICE_BOUNDS } from '@/constants';
import type { Product } from '@/store/api/types/product';

interface PriceRangeFilterProps {
  minPrice: string | undefined;
  maxPrice: string | undefined;
  onChange: (min: string | undefined, max: string | undefined) => void;
  products?: Product[];
}

export function PriceRangeFilter({ minPrice, maxPrice, onChange }: PriceRangeFilterProps) {
  const { t } = useTranslation('products');

  const minBound = PRICE_BOUNDS.min;
  const maxBound = PRICE_BOUNDS.max;

  const value: [number, number] = [Number(minPrice ?? minBound), Number(maxPrice ?? maxBound)];

  function handleChangeCommitted(_: React.SyntheticEvent | Event, newValue: number | number[]) {
    const [min, max] = newValue as [number, number];
    onChange(min > minBound ? String(min) : undefined, max < maxBound ? String(max) : undefined);
  }

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {t('filter_priceRange')}
      </Typography>
      <Slider
        value={value}
        min={minBound}
        max={maxBound}
        step={1}
        valueLabelDisplay="auto"
        valueLabelFormat={v => `$${v}`}
        onChangeCommitted={handleChangeCommitted}
      />
    </Box>
  );
}
