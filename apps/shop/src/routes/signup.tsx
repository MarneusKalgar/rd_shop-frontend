import { createFileRoute } from '@tanstack/react-router';
import { Signup } from '../pages/Signup';

export const Route = createFileRoute('/signup')({
  component: Signup,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
