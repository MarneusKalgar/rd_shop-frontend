import { useTranslation } from 'react-i18next';

export function Cart() {
  const { t } = useTranslation('cart');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>Cart items placeholder (from Redux store)</p>
    </div>
  );
}
