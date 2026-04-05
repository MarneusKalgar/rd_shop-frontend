import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { COUNTRY_LABELS } from '@/constants';
import type { Product } from '@/store/api/types/product';

interface CountryFilterProps {
  value: string[] | undefined;
  onChange: (value: string[]) => void;
  products?: Product[];
}

export function CountryFilter({ value, onChange }: CountryFilterProps) {
  const { t, i18n } = useTranslation('products');
  const options = Object.keys(COUNTRY_LABELS);
  const getLabel = (code: string) => {
    const entry = COUNTRY_LABELS[code];
    if (!entry) return code;
    return i18n.language === 'uk' ? entry.nameUk : entry.nameEn;
  };

  return (
    <Autocomplete
      multiple
      value={value ?? []}
      options={options}
      getOptionLabel={getLabel}
      onChange={(_, newValue) => onChange(newValue)}
      renderValue={(val, getItemProps) =>
        val.map((option, index) => (
          <Chip label={getLabel(option)} size="small" {...getItemProps({ index })} key={option} />
        ))
      }
      renderInput={params => <TextField {...params} label={t('filter_country')} size="small" />}
    />
  );
}
