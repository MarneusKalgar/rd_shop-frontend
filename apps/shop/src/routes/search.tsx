import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { Search } from '../pages/Search';

const searchSchema = z.object({
  q: z.string().min(1),
});

export const Route = createFileRoute('/search')({
  validateSearch: searchSchema,
  component: Search,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
