import { useLoaderData } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export function Profile() {
  const { user } = useLoaderData({ from: '/profile' });
  const { t } = useTranslation('profile');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>User: {user ? JSON.stringify(user) : 'not loaded (placeholder)'}</p>
    </div>
  );
}
