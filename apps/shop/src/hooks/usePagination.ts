import { useRef, useState } from 'react';

export interface PaginateUpdate {
  cursor?: string;
  page?: number;
}

export interface PaginationResult {
  page: number;
  cursor: string | undefined;
  hasPrevPage: boolean;
  goToNextPage: (nextCursor: string) => void;
  goToPage: (targetPage: number) => void;
  resetPagination: () => void;
}

/**
 * Generic cursor-based pagination logic.
 * Route-specific hooks supply `cursor`, `page`, and a `navigate` callback
 * that writes those values back into their route's search params.
 */
export function usePagination(
  cursor: string | undefined,
  page: number | undefined,
  navigate: (update: PaginateUpdate) => void,
): PaginationResult {
  const historyRef = useRef<Array<{ cursor: string | undefined; page: number | undefined }>>([]);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  function goToNextPage(nextCursor: string) {
    historyRef.current.push({ cursor, page });
    setHasPrevPage(true);
    navigate({ cursor: nextCursor, page: (page ?? 1) + 1 });
  }

  function goToPage(targetPage: number) {
    const currentPage = page ?? 1;
    const stepsBack = currentPage - targetPage;
    if (stepsBack <= 0) return;
    // Discard intermediate entries, then navigate to the target.
    for (let i = 0; i < stepsBack - 1; i++) {
      historyRef.current.pop();
    }
    const target = historyRef.current.pop();
    setHasPrevPage(historyRef.current.length > 0);
    navigate({ cursor: target?.cursor, page: target?.page });
  }

  function resetPagination() {
    historyRef.current = [];
    setHasPrevPage(false);
    navigate({ cursor: undefined, page: undefined });
  }

  return {
    page: page ?? 1,
    cursor,
    hasPrevPage,
    goToNextPage,
    goToPage,
    resetPagination,
  };
}
