const priceFormatter = new Intl.NumberFormat('ru-RU')

// 15000 → "15 000 ֏" (space-grouped digits read easier than "15000")
export function formatPrice(amount) {
  return `${priceFormatter.format(amount)} ֏`
}
