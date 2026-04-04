import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import type { Product } from '@/store/api/types/product';
import { formatPrice } from '@/utils/formatPrice';
import {
  actionsSx,
  cardSx,
  contentSx,
  imgSx,
  mediaBoxSx,
  outOfStockOverlaySx,
  priceSx,
  ratingSx,
  titleSx,
} from './ProductCard.styles';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { t } = useTranslation('products');
  const outOfStock = product.stock === 0;

  return (
    <Card sx={cardSx}>
      <Box sx={mediaBoxSx}>
        <Box
          component="img"
          src={product.mainImageUrl ?? '/placeholder.jpg'}
          alt={product.title}
          loading="lazy"
          sx={imgSx}
        />
        {outOfStock && (
          <Box sx={outOfStockOverlaySx}>
            <Typography variant="subtitle2" color="text.secondary">
              {t('detail_outOfStock')}
            </Typography>
          </Box>
        )}
      </Box>

      <CardContent sx={contentSx}>
        <Link
          to="/products/$productId"
          params={{ productId: product.id }}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Typography variant="body2" sx={titleSx} title={product.title}>
            {product.title}
          </Typography>
        </Link>

        {(product.averageRating ?? 0) > 0 && (
          <Box sx={ratingSx}>
            <Rating value={product.averageRating ?? 0} precision={0.5} readOnly size="small" />
            <Typography variant="caption" color="text.secondary">
              ({product.reviewsCount})
            </Typography>
          </Box>
        )}

        <Typography variant="subtitle1" sx={priceSx}>
          {formatPrice(product.price)}
        </Typography>
      </CardContent>

      <CardActions sx={actionsSx}>
        <Button
          variant="contained"
          size="small"
          fullWidth
          disabled={outOfStock}
          onClick={() => onAddToCart(product)}
        >
          {t('detail_addToCart')}
        </Button>
      </CardActions>
    </Card>
  );
}
