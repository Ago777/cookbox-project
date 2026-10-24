import { contacts } from '../data/contacts'
import { useLanguage } from '../i18n/useLanguage'
import { messengerLinks, phoneHref } from '../utils/contactLinks'
import { Icon } from './Icon'
import './brand-badge.css'
import './ContactButtons.css'

// Big call button + every messenger as a labelled button.
export function ContactButtons({ links = messengerLinks }) {
  const { t } = useLanguage()

  return (
    <div className="contact-buttons">
      {phoneHref && (
        <a className="btn btn--primary contact-buttons__call" href={phoneHref}>
          <Icon name="phone" />
          <span className="contact-buttons__call-text">
            <span>{t('contact.call')}</span>
            <span className="contact-buttons__number">{contacts.phoneDisplay}</span>
          </span>
        </a>
      )}

      {links.length > 0 && (
        <ul className="contact-buttons__list">
          {links.map((link) => (
            <li key={link.id}>
              <a
                className={`contact-link brand-fill--${link.id}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={link.id} size={20} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
