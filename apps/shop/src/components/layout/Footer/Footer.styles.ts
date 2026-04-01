import type { SxProps, Theme } from '@mui/material/styles';
import { CONTENT_MAX_WIDTH } from '@/styles/constants';

export const footerSx: SxProps<Theme> = {
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
};

export const footerContentSx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: 3,
  py: 2,
  maxWidth: CONTENT_MAX_WIDTH,
  width: '100%',
  mx: 'auto',
};
