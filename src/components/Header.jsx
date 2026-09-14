import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/brand/logo-color.svg'
import { useLanguage } from '../i18n/useLanguage'
import { LanguageSwitcher } from './LanguageSwitcher'
import './Header.css'

const NAV = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/about', key: 'nav.about' },
  { to: '/gallery', key: 'nav.gallery' },
]

// Call button lives in the always-visible bottom contact bar, so the header stays light.
export function Header() {
  const { t } = useLanguage()

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__logo">
          <img src={logo} alt="" width="44" height="41" />
          <span>CookBox</span>
        </Link>

        {/* No hamburger: only 3 links, so they are always visible */}
        <nav className="site-header__nav" aria-label={t('nav.label')}>
          <ul className="nav-list">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className="nav-link">
                  {t(item.key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__lang">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
