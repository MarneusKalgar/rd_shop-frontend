import { useLoaderData } from '@tanstack/react-router';

export function Home() {
  const { categories } = useLoaderData({ from: '/' });

  return (
    <div>
      <h1>Home</h1>
      <p>Categories placeholder ({categories.length} items)</p>
    </div>
  );
}
