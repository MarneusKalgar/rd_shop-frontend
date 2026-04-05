import { z } from 'zod';
import { SortOrder } from '@/store/api/types/product';

export const sharedFilterSchema = {
  brand: z.array(z.string()).optional(),
  country: z.array(z.string()).optional(),
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
  sortBy: z.enum(['createdAt', 'price', 'title'] as const).optional(),
  sortOrder: z.enum(SortOrder).optional(),
};
