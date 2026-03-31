import { useLoaderData } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export function OrderDetail() {
  const { orderId } = useLoaderData({ from: '/orders/$orderId' });
  const { t } = useTranslation('orders');

  return (
    <div>
      <h1>{t('detail_title', { id: orderId })}</h1>
      <p>Order detail placeholder</p>
    </div>
  );
}
