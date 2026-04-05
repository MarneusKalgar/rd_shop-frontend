import { useTranslation } from 'react-i18next';
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs';

interface PageBreadcrumbsProps {
  crumbs: BreadcrumbItem[];
}

export function PageBreadcrumbs({ crumbs }: PageBreadcrumbsProps) {
  const { t } = useTranslation('common');
  return <Breadcrumbs items={[{ label: t('nav_home'), to: '/' }, ...crumbs]} />;
}
