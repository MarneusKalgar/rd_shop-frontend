import { createFileRoute } from '@tanstack/react-router';
import { Login } from '../pages/Login';

export const Route = createFileRoute('/login')({
  component: Login,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
