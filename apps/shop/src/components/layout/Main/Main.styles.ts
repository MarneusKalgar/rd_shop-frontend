import type { SxProps, Theme } from '@mui/material/styles';
import { CONTENT_MAX_WIDTH } from '@/styles/constants';

export const mainSx: SxProps<Theme> = {
  flexGrow: 1,
  width: '100%',
  maxWidth: CONTENT_MAX_WIDTH,
  mx: 'auto',
  px: 2,
  py: 2,
};
