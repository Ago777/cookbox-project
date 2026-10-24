import { useMatch } from 'react-router-dom'
import { findProduct } from '../data/products'
import { useLanguage } from '../i18n/useLanguage'
import { orderLinks } from '../utils/contactLinks'
import { Icon } from './Icon'
import './brand-badge.css'
import './OrderButtons.css'

// Two floating buttons in the bottom-right corner of every page:
// «Write on Facebook» and «Write on Instagram» (the product cards say «Order»). On a product page the chat
// opens with that product already typed in.
export function OrderButtons() {
  const { t, pick } = useLanguage()
  const match = useMatch('/product/:slug')
  const product = match ? findProduct(match.params.slug) : null
  const message = product
    ? t('product.orderMessage').replace('{name}', pick(product.name))
    : t('order.message')
  const links = orderLinks(message)
  if (links.length === 0) return null

  return (
    <nav className={`order-fab${product ? ' order-fab--product' : ''}`} aria-label={t('contact.title')}>
      {links.map((link) => (
        <a
          key={link.id}
          className={`order-fab__btn brand-fill--${link.id}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={link.id} size={20} />
          <span className="order-fab__label">
            {t('chat.write')}
            <span className="order-fab__via"> {t('order.via').replace('{app}', link.label)}</span>
          </span>
        </a>
      ))}
    </nav>
  )
}
