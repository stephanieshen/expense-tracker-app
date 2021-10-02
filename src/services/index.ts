export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('tl-PH', {
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(amount);
}
