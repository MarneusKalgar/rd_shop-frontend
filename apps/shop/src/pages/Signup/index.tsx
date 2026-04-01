import { useTranslation } from 'react-i18next';

export function Signup() {
  const { t } = useTranslation('auth');

  return (
    <div>
      <h1>{t('signup_title')}</h1>
      <p>Sign up form placeholder</p>
    </div>
  );
}
