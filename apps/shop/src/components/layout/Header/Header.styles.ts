import { styled, alpha, type SxProps, type Theme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { CONTENT_MAX_WIDTH, CONTENT_WIDTH } from '@/styles/constants';

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  flexGrow: 1,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

export const searchWrapperSx: SxProps<Theme> = {
  position: 'relative',
  borderRadius: 1,
  bgcolor: theme => alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    bgcolor: theme => alpha(theme.palette.common.white, 0.25),
  },
  display: 'flex',
  alignItems: 'center',
  width: '70%',
};

export const toolbarSx: SxProps<Theme> = {
  gap: 2,
  maxWidth: CONTENT_MAX_WIDTH,
  width: CONTENT_WIDTH,
  mx: 'auto',
};

export const logoSx: SxProps<Theme> = {
  color: 'inherit',
  textDecoration: 'none',
  flexShrink: 0,
};

export const searchCenterSx: SxProps<Theme> = {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
};

export const searchButtonSx: SxProps<Theme> = {
  ml: 0.5,
  flexShrink: 0,
};

export const navActionsSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 0.5,
  flexShrink: 0,
};

export const langButtonSx: SxProps<Theme> = {
  minWidth: 0,
};
