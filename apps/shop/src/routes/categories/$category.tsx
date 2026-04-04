import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { Category } from '@/pages/Category';
import { SortOrder } from '@/store/api/types/product';

const searchSchema = z.object({
  brand: z.string().optional(),
  country: z.string().optional(),
  cursor: z.string().optional(),
  isActive: z.boolean().optional(),
  limit: z.number().int().min(1).max(50).optional(),
  maxPrice: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/)
    .optional(),
  minPrice: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/)
    .optional(),
  page: z.number().int().min(1).optional(),
  search: z.string().max(200).optional(),
  sortBy: z.enum(['createdAt', 'price', 'title']).optional(),
  sortOrder: z.enum(SortOrder).optional(),
});

export const Route = createFileRoute('/categories/$category')({
  validateSearch: searchSchema,
  component: Category,
  pendingComponent: () => <div>Loading…</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
