import { useMatch } from 'react-router-dom'
import logo from '../assets/brand/logo-color.svg'
import { contacts } from '../data/contacts'
import { findProduct } from '../data/products'
import { useLanguage } from '../i18n/useLanguage'
import { messengerLinks as defaultLinks, orderLinks, phoneHref } from '../utils/contactLinks'
import { Icon } from './Icon'
import './brand-badge.css'
import './ContactBar.css'

// A phone only has room for a few buttons. messengerLinks is already ordered
// chat apps first, so take whatever exists — never a hardcoded list, or the
// bar ends up empty when those channels are not filled in yet.
const PHONE_MAX = 3

// Fixed bottom row of the app shell: one tap to call or open a chat.
// On desktop it is also the footer (logo + ©).
export function ContactBar() {
  const { t, pick } = useLanguage()
  // on a product page the bar becomes the order button for that product
  const match = useMatch('/product/:slug')
  const product = match ? findProduct(match.params.slug) : null
  const messengerLinks = product
    ? orderLinks(t('product.orderMessage').replace('{name}', pick(product.name)))
    : defaultLinks
  if (!phoneHref && messengerLinks.length === 0) return null

  const onPhone = new Set(messengerLinks.slice(0, PHONE_MAX).map((link) => link.id))

  return (
    <div className="contact-bar">
      <div className="container contact-bar__inner">
        <div className="contact-bar__brand">
          <img src={logo} alt="" width="36" height="34" />
          <span>© {new Date().getFullYear()} CookBox</span>
        </div>

        <nav
          className={`contact-bar__actions${phoneHref ? '' : ' contact-bar__actions--no-call'}`}
          aria-label={t('contact.bar')}
        >
          {phoneHref && (
            <a className="contact-bar__call" href={phoneHref}>
              <Icon name="phone" size={20} />
              <span className="contact-bar__call-label">{t('contact.call')}</span>
              <span className="contact-bar__number">{contacts.phoneDisplay || contacts.phone}</span>
            </a>
          )}
          {messengerLinks.map((link) => (
            <a
              key={link.id}
              className={`contact-bar__chat${onPhone.has(link.id) ? '' : ' contact-bar__chat--desktop'}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <span className={`brand-badge brand-badge--${link.id}`}>
                <Icon name={link.id} />
              </span>
              <span className="contact-bar__label">{product ? `${t('product.order')} · ${link.label}` : link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
