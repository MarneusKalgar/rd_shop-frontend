import { useLoaderData } from '@tanstack/react-router';

export function Profile() {
  const { user } = useLoaderData({ from: '/profile' });

  return (
    <div>
      <h1>Profile</h1>
      <p>User: {user ? JSON.stringify(user) : 'not loaded (placeholder)'}</p>
    </div>
  );
}
