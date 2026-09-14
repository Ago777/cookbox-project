import { contacts } from '../data/contacts'
import { useLanguage } from '../i18n/useLanguage'
import { messengerLinks, phoneHref } from '../utils/contactLinks'
import { Icon } from './Icon'
import './brand-badge.css'
import './ContactButtons.css'

// Big call button + every messenger as a labelled button.
export function ContactButtons() {
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

      {messengerLinks.length > 0 && (
        <ul className="contact-buttons__list">
          {messengerLinks.map((link) => (
            <li key={link.id}>
              <a className="contact-link" href={link.href} target="_blank" rel="noopener noreferrer">
                <span className={`brand-badge brand-badge--${link.id}`}>
                  <Icon name={link.id} />
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
