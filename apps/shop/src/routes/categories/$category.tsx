import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { Category } from '@/pages/Category';
import { sharedFilterSchema } from '@/routes/filterSchema';

const searchSchema = z.object({
  ...sharedFilterSchema,
  search: z.string().max(200).optional(),
});

export const Route = createFileRoute('/categories/$category')({
  validateSearch: searchSchema,
  component: Category,
  pendingComponent: () => <div>Loading…</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
