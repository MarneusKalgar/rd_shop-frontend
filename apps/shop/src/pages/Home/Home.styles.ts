import type { SxProps, Theme } from '@mui/material';
import type { GridProps } from '@mui/material/Grid';
import type { CSSProperties } from 'react';

export const categoryCardSx: SxProps<Theme> = {
  height: '100%',
  cursor: 'pointer',
  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 4,
  },
};

export const cardContentSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1.5,
  py: 3,
  px: 2,
};

export const categoryLinkStyle: CSSProperties = {
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  height: '100%',
};

export const categoryIconSx: SxProps<Theme> = {
  fontSize: 48,
  color: 'primary.main',
};

export const categoryGridItemSize: GridProps['size'] = { xs: 6, sm: 4, md: 3, lg: 2 };

export const categoryLabelSx: SxProps<Theme> = {
  fontWeight: 500,
  textAlign: 'center',
};
