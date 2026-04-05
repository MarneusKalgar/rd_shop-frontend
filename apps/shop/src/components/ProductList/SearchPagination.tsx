import { Pagination } from '@/components/ProductList/ProductListPagination';
import { useSearchPagination } from '@/hooks/useSearchPagination';

interface SearchPaginationProps {
  nextCursor: string | null | undefined;
}

export function SearchPagination({ nextCursor }: SearchPaginationProps) {
  const { page, hasPrevPage, goToNextPage, goToPrevPage } = useSearchPagination();
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
