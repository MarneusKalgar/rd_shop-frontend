import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { BRAND_OPTIONS } from '@/constants';
import type { Product } from '@/store/api/types/product';

interface BrandFilterProps {
  value: string[] | undefined;
  onChange: (value: string[]) => void;
  products?: Product[];
}

export function BrandFilter({ value, onChange }: BrandFilterProps) {
  const { t } = useTranslation('products');
  const options = Object.keys(BRAND_OPTIONS);

  return (
    <Autocomplete
      multiple
      freeSolo
      value={value ?? []}
      options={options}
      onChange={(_, newValue) => onChange(newValue as string[])}
      renderValue={(val, getItemProps) =>
        val.map((option, index) => (
          <Chip label={option} size="small" {...getItemProps({ index })} key={option} />
        ))
      }
      renderInput={params => <TextField {...params} label={t('filter_brand')} size="small" />}
    />
  );
}
