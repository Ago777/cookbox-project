import { useLanguage } from '../i18n/useLanguage'
import { orderLinks } from './contactLinks'

// Chat links with "Hello, I want to order <product>" ready to send.
export function useOrderLinks(productName) {
  const { t } = useLanguage()
  return orderLinks(t('product.orderMessage').replace('{name}', productName))
}
