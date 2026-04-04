import type { SxProps, Theme } from '@mui/material';

export const pageSx: SxProps<Theme> = {
  mx: 'auto',
  px: 2,
  py: 3,
};

export const layoutSx: SxProps<Theme> = {
  display: 'flex',
  gap: 3,
  alignItems: 'flex-start',
};

export const filterPanelSx: SxProps<Theme> = {
  width: 240,
  flexShrink: 0,
};

export const contentAreaSx: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,
};

export const spinnerWrapSx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  py: 6,
};

export const paginationWrapSx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  mt: 3,
};
