import type { SxProps, Theme } from '@mui/material';

export const cardSx: SxProps<Theme> = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'box-shadow 0.15s ease',
  '&:hover': { boxShadow: 4 },
};

export const mediaBoxSx: SxProps<Theme> = {
  position: 'relative',
  paddingTop: '66%', // 3:2 ratio
  overflow: 'hidden',
  bgcolor: 'grey.100',
};

export const imgSx: SxProps<Theme> = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};

export const outOfStockOverlaySx: SxProps<Theme> = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  bgcolor: 'rgba(255,255,255,0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const contentSx: SxProps<Theme> = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 0.5,
  p: 1.5,
};

export const titleSx: SxProps<Theme> = {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  lineHeight: 1.4,
};

export const priceSx: SxProps<Theme> = {
  fontWeight: 700,
  mt: 'auto',
};

export const actionsSx: SxProps<Theme> = {
  p: 1.5,
  pt: 0,
};

export const ratingSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 0.5,
};
