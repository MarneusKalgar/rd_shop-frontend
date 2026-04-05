import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { Search } from '../pages/Search';
import { ProductCategory } from '@/store/api/types/product';
import { sharedFilterSchema } from '@/routes/filterSchema';

const searchSchema = z.object({
  q: z.string().min(1),
  ...sharedFilterSchema,
  categories: z.array(z.nativeEnum(ProductCategory)).optional(),
});

export const Route = createFileRoute('/search')({
  validateSearch: searchSchema,
  component: Search,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
