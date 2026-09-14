import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { usePageTitle } from '../utils/usePageTitle'
import './pages.css'

export function NotFoundPage({ titleKey = 'notFound.title' }) {
  const { t } = useLanguage()
  usePageTitle(t(titleKey))

  return (
    <div className="container narrow not-found">
      <h1 className="page-title">{t(titleKey)}</h1>
      <Link to="/" className="btn btn--primary">
        {t('notFound.back')}
      </Link>
    </div>
  )
}
