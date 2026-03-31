import { useLoaderData } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export function Home() {
  const { categories } = useLoaderData({ from: '/' });
  const { t } = useTranslation('home');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <p>Categories placeholder ({categories.length} items)</p>
    </div>
  );
}
