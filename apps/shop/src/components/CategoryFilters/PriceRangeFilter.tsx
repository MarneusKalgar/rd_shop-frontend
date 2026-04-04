import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

interface PriceRangeFilterProps {
  minPrice: string | undefined;
  maxPrice: string | undefined;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
}

export function PriceRangeFilter({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
}: PriceRangeFilterProps) {
  const { t } = useTranslation('products');
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <TextField
        label={t('filter_minPrice')}
        size="small"
        type="number"
        inputProps={{ min: 0, step: 0.01 }}
        defaultValue={minPrice ?? ''}
        onChange={e => onMinChange(e.target.value)}
        sx={{ flex: 1 }}
      />
      <TextField
        label={t('filter_maxPrice')}
        size="small"
        type="number"
        inputProps={{ min: 0, step: 0.01 }}
        defaultValue={maxPrice ?? ''}
        onChange={e => onMaxChange(e.target.value)}
        sx={{ flex: 1 }}
      />
    </Box>
  );
}
