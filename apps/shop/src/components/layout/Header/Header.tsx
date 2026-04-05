import { useState, type KeyboardEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import {
  SearchIconWrapper,
  StyledInputBase,
  langButtonSx,
  logoSx,
  navActionsSx,
  searchButtonSx,
  searchCenterSx,
  searchWrapperSx,
  toolbarSx,
} from './Header.styles';

export function Header() {
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      navigate({ to: '/search', search: { q: query.trim() } });
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={toolbarSx}>
        {/* Left — Logo */}
        <Typography variant="h6" noWrap component={Link} to="/" sx={logoSx}>
          RDShop
        </Typography>

        {/* Center — Search */}
        <Box sx={searchCenterSx}>
          <Box sx={searchWrapperSx}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t('search_placeholder')}
              inputProps={{ 'aria-label': t('search') }}
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button
              variant="text"
              color="inherit"
              size="small"
              onClick={handleSearch}
              sx={searchButtonSx}
            >
              {t('search')}
            </Button>
          </Box>
        </Box>

        {/* Right — Icon buttons + language switcher */}
        <Box sx={navActionsSx}>
          <Tooltip title={t('nav_orders')}>
            <IconButton color="inherit" component={Link} to="/orders" aria-label={t('nav_orders')}>
              <ListAltIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={t('nav_cart')}>
            <IconButton color="inherit" component={Link} to="/cart" aria-label={t('nav_cart')}>
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={t('nav_profile')}>
            <IconButton
              color="inherit"
              component={Link}
              to="/profile"
              aria-label={t('nav_profile')}
            >
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>

          <Button color="inherit" size="small" onClick={toggleLanguage} sx={langButtonSx}>
            {i18n.language}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
