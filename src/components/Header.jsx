import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/brand/logo-color-on-dark.svg'
import { useLanguage } from '../i18n/useLanguage'
import { LanguageSwitcher } from './LanguageSwitcher'
import './Header.css'

const NAV = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/gallery', key: 'nav.gallery' },
  { to: '/reviews', key: 'nav.reviews' },
  { to: '/how-to-order', key: 'nav.order' },
  { to: '/about', key: 'nav.about' },
]

// Phones and small tablets: one slim row with a burger button that opens the
// menu. From 1100px the links sit in the header row itself.
export function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="site-header__logo" onClick={close}>
          <img src={logo} alt="" width="52" height="49" />
          <span className="site-header__name">CookBox</span>
        </Link>

        <div className="site-header__lang">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={t('nav.menu')}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="burger__bars" aria-hidden="true" />
        </button>

        <nav id="site-nav" className="site-header__nav" aria-label={t('nav.label')}>
          <ul className="nav-list">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className="nav-link" onClick={close}>
                  {t(item.key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open && <button type="button" className="nav-backdrop" tabIndex={-1} aria-hidden="true" onClick={close} />}
    </header>
  )
}
