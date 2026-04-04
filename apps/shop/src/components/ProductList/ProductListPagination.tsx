import type React from 'react';
import Box from '@mui/material/Box';
import MuiPagination from '@mui/material/Pagination';

export interface PaginationProps {
  page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextCursor: string | null | undefined;
  goToNextPage: (cursor: string) => void;
  goToPrevPage: () => void;
}

export function Pagination({
  page,
  hasNextPage,
  hasPrevPage,
  nextCursor,
  goToNextPage,
  goToPrevPage,
}: PaginationProps) {
  function handleChange(_e: React.ChangeEvent<unknown>, newPage: number) {
    if (newPage > page && hasNextPage && nextCursor) {
      goToNextPage(nextCursor);
    } else if (newPage < page && hasPrevPage) {
      goToPrevPage();
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
      <MuiPagination count={hasNextPage ? page + 1 : page} page={page} onChange={handleChange} />
    </Box>
  );
}
