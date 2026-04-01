import { useLoaderData } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export function Category() {
  const { category, products } = useLoaderData({ from: '/categories/$category' });
  const { t } = useTranslation('products');

  return (
    <div>
      <h1>{category}</h1>
      <p>{t('empty')}</p>
      <p>Products placeholder ({products.length} items)</p>
    </div>
  );
}
