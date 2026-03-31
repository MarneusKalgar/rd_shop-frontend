import { useLoaderData } from '@tanstack/react-router';

export function OrderDetail() {
  const { orderId } = useLoaderData({ from: '/orders/$orderId' });

  return (
    <div>
      <h1>Order: {orderId}</h1>
      <p>Order detail placeholder</p>
    </div>
  );
}
