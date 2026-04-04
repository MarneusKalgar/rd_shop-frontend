import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link, useLoaderData } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { categoryIconMap } from '@/utils/categoryIcons';
import {
  cardContentSx,
  categoryCardSx,
  categoryGridItemSize,
  categoryIconSx,
  categoryLabelSx,
  categoryLinkStyle,
} from './Home.styles';

export function Home() {
  const { categories } = useLoaderData({ from: '/' });
  const { t, i18n } = useTranslation('home');

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('title')}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={3}>
        {t('subtitle')}
      </Typography>

      <Grid container spacing={2}>
        {categories.map(category => {
          const Icon = categoryIconMap[category.name];
          const label = i18n.language === 'uk' ? category.nameUk : category.nameEn;
          console.log('i18n.language:', i18n.language); // Debug log
          console.log('Rendering category:', category.name, 'with label:', label); // Debug log

          return (
            <Grid key={category.name} size={categoryGridItemSize}>
              <Link
                to="/categories/$category"
                params={{ category: category.name }}
                style={categoryLinkStyle}
              >
                <Card sx={categoryCardSx}>
                  <Box sx={cardContentSx}>
                    <Icon sx={categoryIconSx} />
                    <Typography variant="body2" sx={categoryLabelSx}>
                      {label}
                    </Typography>
                  </Box>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
