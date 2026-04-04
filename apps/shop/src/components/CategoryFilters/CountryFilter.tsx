import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

interface CountryFilterProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

export function CountryFilter({ value, onChange }: CountryFilterProps) {
  const { t } = useTranslation('products');
  return (
    <TextField
      label={t('filter_country')}
      size="small"
      fullWidth
      defaultValue={value ?? ''}
      onChange={e => onChange(e.target.value)}
    />
  );
}
