import { createFileRoute, redirect } from '@tanstack/react-router';
import { Profile } from '../pages/Profile';

export const Route = createFileRoute('/profile')({
  beforeLoad: () => {
    const isAuthenticated = false; // TODO: get from Redux auth store
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: Profile,
  loader: async () => {
    // TODO: fetch user profile from GET /api/v1/users/me
    return { user: null as unknown };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
