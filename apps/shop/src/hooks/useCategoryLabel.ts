import { useTranslation } from 'react-i18next';
import { Route } from '@/routes/categories/$category';
import { useGetProductsCategoriesQuery } from '@/store/api/productsApi';

export function useCategoryLabel(): string {
  const { category } = Route.useParams();
  const { i18n } = useTranslation();
  const { data } = useGetProductsCategoriesQuery();
  const item = data?.data.find(c => c.name === category);
  return item ? (i18n.language === 'uk' ? item.nameUk : item.nameEn) : category;
}
