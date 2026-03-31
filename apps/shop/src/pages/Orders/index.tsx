import { useLoaderData } from '@tanstack/react-router';

export function Orders() {
  const { orders } = useLoaderData({ from: '/orders/' });

  return (
    <div>
      <h1>Orders</h1>
      <p>Orders placeholder ({orders.length} items)</p>
    </div>
  );
}
