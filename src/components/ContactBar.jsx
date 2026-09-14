import logo from '../assets/brand/logo-color-on-dark.svg'
import { contacts } from '../data/contacts'
import { useLanguage } from '../i18n/useLanguage'
import { messengerLinks, phoneHref } from '../utils/contactLinks'
import { Icon } from './Icon'
import './brand-badge.css'
import './ContactBar.css'

// Phones only have room for the chat apps; desktop shows every channel.
const PHONE_CHANNELS = ['whatsapp', 'viber', 'telegram']

// Fixed bottom bar on every screen size: one tap to call or open a chat.
// On desktop it is also the footer (logo + ©), so only the content scrolls.
export function ContactBar() {
  const { t } = useLanguage()
  if (!phoneHref && messengerLinks.length === 0) return null

  return (
    <div className="contact-bar">
      <div className="container contact-bar__inner">
        <div className="contact-bar__brand">
          <img src={logo} alt="" width="36" height="34" />
          <span>© {new Date().getFullYear()} CookBox</span>
        </div>

        <nav className="contact-bar__actions" aria-label={t('contact.bar')}>
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
              className={`contact-bar__chat${PHONE_CHANNELS.includes(link.id) ? '' : ' contact-bar__chat--desktop'}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <span className={`brand-badge brand-badge--${link.id}`}>
                <Icon name={link.id} />
              </span>
              <span className="contact-bar__label">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
