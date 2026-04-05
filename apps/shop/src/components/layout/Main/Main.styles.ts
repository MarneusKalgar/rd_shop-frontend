import type { SxProps, Theme } from '@mui/material/styles';
import { CONTENT_MAX_WIDTH, CONTENT_WIDTH } from '@/styles/constants';

export const mainSx: SxProps<Theme> = {
  flexGrow: 1,
  width: CONTENT_WIDTH,
  maxWidth: CONTENT_MAX_WIDTH,
  mx: 'auto',
  px: 2,
  py: 2,
};
