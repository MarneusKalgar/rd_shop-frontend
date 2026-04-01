import Typography from '@mui/material/Typography';
import { useSearch } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export function Search() {
  const { t } = useTranslation('search');
  const { q } = useSearch({ from: '/search' });

  return (
    <>
      <Typography variant="h5" gutterBottom>
        {t('title', { query: q })}
      </Typography>
      {/* TODO: render product results from GET /api/v1/products?search=q */}
      <Typography color="text.secondary">{t('empty')}</Typography>
    </>
  );
}
