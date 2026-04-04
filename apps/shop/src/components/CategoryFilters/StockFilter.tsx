import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useTranslation } from 'react-i18next';

interface StockFilterProps {
  value: boolean | undefined;
  onChange: (value: boolean) => void;
}

export function StockFilter({ value, onChange }: StockFilterProps) {
  const { t } = useTranslation('products');
  return (
    <Box>
      <FormControlLabel
        control={
          <Switch
            checked={value ?? false}
            onChange={e => onChange(e.target.checked)}
            size="small"
          />
        }
        label={t('filter_inStock')}
      />
    </Box>
  );
}
