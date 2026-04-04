import { Pagination } from '@/components/ProductList/ProductListPagination';
import { useProductPagination } from '@/hooks/useProductPagination';

interface CategoryPaginationProps {
  nextCursor: string | null | undefined;
}

export function CategoryPagination({ nextCursor }: CategoryPaginationProps) {
  const { page, hasPrevPage, goToNextPage, goToPrevPage } = useProductPagination();
  const hasNextPage = nextCursor != null;

  if (!hasNextPage && !hasPrevPage) return null;

  return (
    <Pagination
      page={page}
      hasNextPage={hasNextPage}
      hasPrevPage={hasPrevPage}
      nextCursor={nextCursor}
      goToNextPage={goToNextPage}
      goToPrevPage={goToPrevPage}
    />
  );
}
