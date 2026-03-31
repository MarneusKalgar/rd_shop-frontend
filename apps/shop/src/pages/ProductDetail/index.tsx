import { useLoaderData } from '@tanstack/react-router';

export function ProductDetail() {
  const { productId } = useLoaderData({ from: '/products/$productId' });

  return (
    <div>
      <h1>Product: {productId}</h1>
      <p>Product detail placeholder</p>
    </div>
  );
}
