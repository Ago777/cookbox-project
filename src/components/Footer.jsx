import logo from '../assets/brand/logo-color.svg'
import { contacts } from '../data/contacts'
import { site } from '../data/site'
import { useLanguage } from '../i18n/useLanguage'
import { phoneHref } from '../utils/contactLinks'
import { Icon } from './Icon'
import './Footer.css'

// Page-end footer for phones and tablets; on desktop the fixed ContactBar is the footer.
// No messenger links here on purpose — this footer only ever shows at the sizes
// where the fixed bar already carries them, and two identical rows looked broken.
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
            <p className="site-footer__tagline">{t('brand.tagline')}</p>
          </div>
        </div>

        {(phoneHref || hours) && (
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
          </div>
        )}
      </div>

      <p className="container site-footer__copy">
        © {new Date().getFullYear()} CookBox. {t('footer.rights')}
      </p>
    </footer>
  )
}
