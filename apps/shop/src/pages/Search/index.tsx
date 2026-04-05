import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { PageBreadcrumbs } from '@/components/Breadcrumbs/PageBreadcrumbs';
import { SearchPagination } from '@/components/ProductList/SearchPagination';
import { ProductGrid } from '@/components/ProductList/ProductGrid';
import { SearchFilters } from '@/components/SearchFilters/SearchFilters';
import { SortToolbar } from '@/components/SortToolbar/SortToolbar';
import { useSearchFilters } from '@/hooks/useSearchFilters';
import { useSearchPagination } from '@/hooks/useSearchPagination';
import { Route } from '@/routes/search';
import { useGetProductsQuery } from '@/store/api/productsApi';
import type { ProductSortBy, SortOrder } from '@/store/api/types/product';
import { contentAreaSx, filterPanelSx, layoutSx, pageSx } from './Search.styles';
import { PAGE_SIZE } from '@/constants';

export function Search() {
  const { t } = useTranslation('search');
  const search = Route.useSearch();
  const { q } = search;
  const navigate = useNavigate({ from: Route.fullPath });

  const { filters, removeFilter } = useSearchFilters();
  const { resetPagination } = useSearchPagination();

  const { data, isFetching, isError } = useGetProductsQuery({
    search: q,
    cursor: search.cursor,
    limit: PAGE_SIZE,
    ...filters,
    sortBy: search.sortBy,
    sortOrder: search.sortOrder,
  });

  const products = data?.data ?? [];

  function handleSortByChange(value: ProductSortBy) {
    void navigate({
      search: prev => ({ ...prev, sortBy: value, cursor: undefined, page: undefined }),
    });
    resetPagination();
  }

  function handleSortOrderChange(value: SortOrder) {
    void navigate({
      search: prev => ({ ...prev, sortOrder: value, cursor: undefined, page: undefined }),
    });
    resetPagination();
  }

  function handleAddToCart() {
    // cart integration TBD
  }

  return (
    <Box sx={pageSx}>
      <PageBreadcrumbs crumbs={[{ label: t('title', { query: q }) }]} />

      <Typography variant="h5" fontWeight={600} mb={2}>
        {t('title', { query: q })}
      </Typography>

      <Box sx={layoutSx}>
        <Box sx={filterPanelSx}>
          <SearchFilters products={products} onClear={resetPagination} />
        </Box>

        <Box sx={contentAreaSx}>
          <SortToolbar
            sortBy={search.sortBy}
            sortOrder={search.sortOrder}
            onSortByChange={handleSortByChange}
            onSortOrderChange={handleSortOrderChange}
            filters={filters}
            onRemoveFilter={(key, value) => {
              removeFilter(key, value);
              resetPagination();
            }}
          />

          <Divider sx={{ mb: 2 }} />

          <ProductGrid
            products={products}
            isFetching={isFetching}
            isError={isError}
            onAddToCart={handleAddToCart}
          />

          <SearchPagination nextCursor={data?.nextCursor} />
        </Box>
      </Box>
    </Box>
  );
}
