import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { useGetProductsCategoriesQuery } from '@/store/api/productsApi';
import type { ProductCategory } from '@/store/api/types/product';

interface CategoriesFilterProps {
  value: ProductCategory[] | undefined;
  onChange: (value: ProductCategory[]) => void;
}

export function CategoriesFilter({ value, onChange }: CategoriesFilterProps) {
  const { t, i18n } = useTranslation('products');
  const { data } = useGetProductsCategoriesQuery();
  const categories = data?.data ?? [];

  function getLabel(cat: ProductCategory): string {
    const item = categories.find(c => c.name === cat);
    return item ? (i18n.language === 'uk' ? item.nameUk : item.nameEn) : cat;
  }

  return (
    <Autocomplete
      multiple
      value={value ?? []}
      options={categories.map(c => c.name)}
      getOptionLabel={getLabel}
      onChange={(_, newValue) => onChange(newValue as ProductCategory[])}
      renderValue={(value, getItemProps) =>
        value.map((option, index) => (
          <Chip label={getLabel(option)} size="small" {...getItemProps({ index })} key={option} />
        ))
      }
      renderInput={params => <TextField {...params} label={t('filter_categories')} size="small" />}
    />
  );
}
