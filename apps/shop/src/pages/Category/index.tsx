import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useNavigate } from '@tanstack/react-router';
import { CategoryFilters } from '@/components/CategoryFilters/CategoryFilters';
import { PageBreadcrumbs } from '@/components/Breadcrumbs/PageBreadcrumbs';
import { ProductGrid } from '@/components/ProductList/ProductGrid';
import { CategoryPagination } from '@/components/ProductList/CategoryPagination';
import { SortToolbar } from '@/components/SortToolbar/SortToolbar';
import { useCategoryLabel } from '@/hooks/useCategoryLabel';
import { useProductFilters } from '@/hooks/useProductFilters';
import { useProductPagination } from '@/hooks/useProductPagination';
import { Route } from '@/routes/categories/$category';
import { useGetProductsQuery } from '@/store/api/productsApi';
import type { ProductCategory, ProductSortBy, SortOrder } from '@/store/api/types/product';
import { contentAreaSx, filterPanelSx, layoutSx, pageSx } from './Category.styles';
import { PAGE_SIZE } from '@/constants';

export function Category() {
  const { category } = Route.useParams();
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const categoryLabel = useCategoryLabel();

  const { filters, removeFilter } = useProductFilters();
  const { resetPagination } = useProductPagination();

  const { data, isFetching, isError } = useGetProductsQuery({
    categories: [category as ProductCategory],
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
      <PageBreadcrumbs crumbs={[{ label: categoryLabel }]} />

      <Typography variant="h5" fontWeight={600} mb={2}>
        {categoryLabel}
      </Typography>

      <Box sx={layoutSx}>
        <Box sx={filterPanelSx}>
          <CategoryFilters products={products} onClear={resetPagination} />
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

          <CategoryPagination nextCursor={data?.nextCursor} />
        </Box>
      </Box>
    </Box>
  );
}
