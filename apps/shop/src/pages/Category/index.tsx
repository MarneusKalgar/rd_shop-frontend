import type React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { CategoryFilters } from '@/components/CategoryFilters/CategoryFilters';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import { SortToolbar } from '@/components/SortToolbar/SortToolbar';
import { useProductFilters } from '@/hooks/useProductFilters';
import { useProductPagination } from '@/hooks/useProductPagination';
import { Route } from '@/routes/categories/$category';
import { useGetProductsQuery, useGetProductsCategoriesQuery } from '@/store/api/productsApi';
import type { ProductCategory, ProductSortBy, SortOrder } from '@/store/api/types/product';
import {
  contentAreaSx,
  filterPanelSx,
  layoutSx,
  pageSx,
  paginationWrapSx,
  spinnerWrapSx,
} from './Category.styles';

const PAGE_SIZE = 4;

export function Category() {
  const { t } = useTranslation('products');
  const { t: tCommon, i18n } = useTranslation('common');
  const { category } = Route.useParams();
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const { filters, removeFilter } = useProductFilters();

  const { data: categoriesData } = useGetProductsCategoriesQuery();
  const categoryItem = categoriesData?.data.find(c => c.name === category);
  const categoryLabel = categoryItem
    ? i18n.language === 'uk'
      ? categoryItem.nameUk
      : categoryItem.nameEn
    : category;

  const { cursor, goToNextPage, goToPrevPage, hasPrevPage, page, resetPagination } =
    useProductPagination();

  const { data, isFetching, isError } = useGetProductsQuery({
    category: category as ProductCategory,
    cursor,
    limit: PAGE_SIZE,
    brand: filters.brand,
    country: filters.country,
    isActive: filters.isActive,
    maxPrice: filters.maxPrice,
    minPrice: filters.minPrice,
    search: filters.search,
    sortBy: search.sortBy,
    sortOrder: search.sortOrder,
  });

  const products = data?.data ?? [];
  const hasNextPage = data?.nextCursor != null;

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

  function handlePaginationChange(_e: React.ChangeEvent<unknown>, newPage: number) {
    if (newPage > page && hasNextPage && data?.nextCursor) {
      goToNextPage(data.nextCursor);
    } else if (newPage < page && hasPrevPage) {
      goToPrevPage();
    }
  }

  function handleAddToCart() {
    // cart integration TBD
  }

  return (
    <Box sx={pageSx}>
      <Breadcrumbs items={[{ label: tCommon('nav_home'), to: '/' }, { label: categoryLabel }]} />

      <Typography variant="h5" fontWeight={600} mb={2}>
        {categoryLabel}
      </Typography>

      <Box sx={layoutSx}>
        {/* Filters panel */}
        <Box sx={filterPanelSx}>
          <CategoryFilters onClear={resetPagination} />
        </Box>

        {/* Main content */}
        <Box sx={contentAreaSx}>
          <SortToolbar
            sortBy={search.sortBy}
            sortOrder={search.sortOrder}
            onSortByChange={handleSortByChange}
            onSortOrderChange={handleSortOrderChange}
            filters={filters}
            onRemoveFilter={key => {
              removeFilter(key);
              resetPagination();
            }}
          />

          <Divider sx={{ mb: 2 }} />

          {isFetching && (
            <Box sx={spinnerWrapSx}>
              <CircularProgress />
            </Box>
          )}

          {!isFetching && isError && <Typography color="error">{t('empty')}</Typography>}

          {!isFetching && !isError && products.length === 0 && (
            <Typography color="text.secondary">{t('no_results')}</Typography>
          )}

          {!isFetching && products.length > 0 && (
            <Grid container spacing={2}>
              {products.map(product => (
                <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <ProductCard product={product} onAddToCart={handleAddToCart} />
                </Grid>
              ))}
            </Grid>
          )}

          {!isFetching && products.length > 0 && (
            <Box sx={paginationWrapSx}>
              <Pagination
                count={hasNextPage ? page + 1 : page}
                page={page}
                onChange={handlePaginationChange}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
