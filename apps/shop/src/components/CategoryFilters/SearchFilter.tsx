import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

interface SearchFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchFilter({ value, onChange }: SearchFilterProps) {
  const { t } = useTranslation('common');
  return (
    <TextField
      label={t('search')}
      size="small"
      fullWidth
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
