import Box from '@mui/material/Box';
import { Outlet } from '@tanstack/react-router';
import { mainSx } from './Main.styles';

export function Main() {
  return (
    <Box component="main" sx={mainSx}>
      <Outlet />
    </Box>
  );
}
