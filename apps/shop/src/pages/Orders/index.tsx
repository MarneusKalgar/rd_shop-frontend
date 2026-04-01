import { useLoaderData } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export function Orders() {
  const { orders } = useLoaderData({ from: '/orders/' });
  const { t } = useTranslation('orders');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>Orders placeholder ({orders.length} items)</p>
    </div>
  );
}
