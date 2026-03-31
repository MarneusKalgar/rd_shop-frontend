import { useTranslation } from 'react-i18next';

export function Login() {
  const { t } = useTranslation('auth');

  return (
    <div>
      <h1>{t('login_title')}</h1>
      <p>Login form placeholder</p>
    </div>
  );
}
