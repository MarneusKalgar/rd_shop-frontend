const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export function formatPrice(value: string | number): string {
  const numeric = typeof value === 'string' ? parseFloat(value) : value;
  return priceFormatter.format(numeric);
}
