import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { SortOrder, type ProductSortBy } from '@/store/api/types/product';
import { chipsSx, sortControlsSx, toolbarSx } from './SortToolbar.styles';
import { buildChips, type FilterKey } from './chipBuilder';

interface FiltersValue {
  brand?: string[] | undefined;
  categories?: string[] | undefined;
  country?: string[] | undefined;
  isActive?: boolean | undefined;
  maxPrice?: string | undefined;
  minPrice?: string | undefined;
  search?: string | undefined;
}

interface SortToolbarProps {
  sortBy: ProductSortBy | undefined;
  sortOrder: SortOrder | undefined;
  onSortByChange: (value: ProductSortBy) => void;
  onSortOrderChange: (value: SortOrder) => void;
  filters: FiltersValue;
  onRemoveFilter: (key: FilterKey, value?: string) => void;
}

export function SortToolbar({
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange,
  filters,
  onRemoveFilter,
}: SortToolbarProps) {
  const { t } = useTranslation('products');
  const chips = buildChips(
    filters,
    t('filter_brand'),
    t('filter_country'),
    t('filter_categories'),
    t('filter_inStock'),
  );

  return (
    <Box sx={toolbarSx}>
      <Box sx={chipsSx}>
        {chips.map(chip => (
          <Chip
            key={chip.key}
            label={chip.label}
            size="small"
            onDelete={() => onRemoveFilter(chip.filterKey, chip.value)}
          />
        ))}
      </Box>

      <Box sx={sortControlsSx}>
        <Typography variant="body2" color="text.secondary" noWrap>
          {t('sort_label')}:
        </Typography>

        <Select
          value={sortBy ?? 'createdAt'}
          size="small"
          onChange={e => onSortByChange(e.target.value as ProductSortBy)}
        >
          <MenuItem value="createdAt">{t('sort_createdAt')}</MenuItem>
          <MenuItem value="price">{t('sort_price')}</MenuItem>
          <MenuItem value="title">{t('sort_title')}</MenuItem>
        </Select>

        <Select
          value={sortOrder ?? SortOrder.DESC}
          size="small"
          onChange={e => onSortOrderChange(e.target.value as SortOrder)}
        >
          <MenuItem value={SortOrder.ASC}>{t('sort_order_asc')}</MenuItem>
          <MenuItem value={SortOrder.DESC}>{t('sort_order_desc')}</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}
