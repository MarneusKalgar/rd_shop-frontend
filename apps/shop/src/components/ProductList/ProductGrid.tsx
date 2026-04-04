import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import type { Product } from '@/store/api/types/product';

interface ProductGridProps {
  products: Product[];
  isFetching: boolean;
  isError: boolean;
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ products, isFetching, isError, onAddToCart }: ProductGridProps) {
  const { t } = useTranslation('products');

  if (isFetching) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <Typography color="error">{t('empty')}</Typography>;
  }

  if (!products.length) {
    return <Typography color="text.secondary">{t('no_results')}</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
}
