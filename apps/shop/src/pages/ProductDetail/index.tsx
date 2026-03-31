import { useLoaderData } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export function ProductDetail() {
  const { productId } = useLoaderData({ from: '/products/$productId' });
  const { t } = useTranslation('products');

  return (
    <div>
      <h1>Product: {productId}</h1>
      <p>{t('detail_about')}</p>
      <p>Product detail placeholder</p>
    </div>
  );
}
