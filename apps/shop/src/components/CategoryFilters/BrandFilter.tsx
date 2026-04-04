import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

interface BrandFilterProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

export function BrandFilter({ value, onChange }: BrandFilterProps) {
  const { t } = useTranslation('products');
  return (
    <TextField
      label={t('filter_brand')}
      size="small"
      fullWidth
      defaultValue={value ?? ''}
      onChange={e => onChange(e.target.value)}
    />
  );
}
