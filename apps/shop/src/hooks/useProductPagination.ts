import { useRef, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Route } from '@/routes/categories/$category';

interface HistoryEntry {
  cursor: string | undefined;
  page: number | undefined;
}

export function useProductPagination() {
  const { cursor, page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const historyRef = useRef<Array<HistoryEntry>>([]);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  const goToNextPage = (nextCursor: string) => {
    historyRef.current.push({ cursor, page });
    setHasPrevPage(true);
    void navigate({
      search: prev => ({
        ...prev,
        cursor: nextCursor,
        page: (prev.page ?? 1) + 1,
      }),
    });
  };

  const goToPrevPage = () => {
    const prev = historyRef.current.pop();
    setHasPrevPage(historyRef.current.length > 0);
    void navigate({
      search: current => ({
        ...current,
        cursor: prev?.cursor,
        page: prev?.page,
      }),
    });
  };

  const resetPagination = () => {
    historyRef.current = [];
    setHasPrevPage(false);
    void navigate({
      search: prev => {
        const next = { ...prev };
        delete next.cursor;
        delete next.page;
        return next;
      },
    });
  };

  return {
    page: page ?? 1,
    cursor,
    hasPrevPage,
    goToNextPage,
    goToPrevPage,
    resetPagination,
  };
}
