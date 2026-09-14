import logo from '../assets/brand/logo-color-on-dark.svg'
import { contacts } from '../data/contacts'
import { site } from '../data/site'
import { useLanguage } from '../i18n/useLanguage'
import { messengerLinks, phoneHref } from '../utils/contactLinks'
import { Icon } from './Icon'
import './brand-badge.css'
import './Footer.css'

// Page-end footer for phones and tablets. On desktop the fixed ContactBar is the footer.
export function Footer() {
  const { t, pick } = useLanguage()
  const hours = pick(site.hours)

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} alt="" width="48" height="45" />
          <div>
            <p className="site-footer__name">CookBox</p>
            <p className="site-footer__tagline">{t('hero.title')}</p>
          </div>
        </div>

        <div className="site-footer__contacts">
          {phoneHref && (
            <a className="site-footer__phone" href={phoneHref}>
              <Icon name="phone" size={20} />
              {contacts.phoneDisplay}
            </a>
          )}
          {hours && (
            <p className="site-footer__hours">
              {t('about.hours')}: {hours}
            </p>
          )}
          {messengerLinks.length > 0 && (
            <ul className="site-footer__links">
              {messengerLinks.map((link) => (
                <li key={link.id}>
                  <a className="footer-link" href={link.href} target="_blank" rel="noopener noreferrer">
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
      </div>

      <p className="container site-footer__copy">
        © {new Date().getFullYear()} CookBox. {t('footer.rights')}
      </p>
    </footer>
  )
}
