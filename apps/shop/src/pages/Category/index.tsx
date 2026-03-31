import { useLoaderData } from '@tanstack/react-router';

export function Category() {
  const { category, products } = useLoaderData({ from: '/categories/$category' });

  return (
    <div>
      <h1>{category}</h1>
      <p>Products placeholder ({products.length} items)</p>
    </div>
  );
}
