import { ContactButtons } from '../components/ContactButtons'
import { site } from '../data/site'
import { useLanguage } from '../i18n/useLanguage'
import { usePageTitle } from '../utils/usePageTitle'
import './pages.css'

const DELIVERY_ROWS = [
  { field: 'area', key: 'about.area' },
  { field: 'cost', key: 'about.cost' },
  { field: 'minOrder', key: 'about.minOrder' },
  { field: 'payment', key: 'about.payment' },
]

export function AboutPage() {
  const { t, pick } = useLanguage()
  usePageTitle(t('about.title'))

  const paragraphs = pick(site.about) || []
  const hours = pick(site.hours)
  const delivery = DELIVERY_ROWS.map((row) => ({ ...row, text: pick(site.delivery[row.field]) })).filter(
    (row) => row.text,
  )

  return (
    <div className="container narrow">
      <h1 className="page-title">{t('about.title')}</h1>
      {paragraphs.map((text) => (
        <p key={text} className="lead">
          {text}
        </p>
      ))}

      {(delivery.length > 0 || hours) && (
        <section className="info-section">
          <h2>{t('about.delivery')}</h2>
          <dl className="details-list">
            {delivery.map((row) => (
              <div key={row.field}>
                <dt>{t(row.key)}</dt>
                <dd>{row.text}</dd>
              </div>
            ))}
            {hours && (
              <div>
                <dt>{t('about.hours')}</dt>
                <dd>{hours}</dd>
              </div>
            )}
          </dl>
        </section>
      )}

      <section className="contact-card">
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.text')}</p>
        <ContactButtons />
      </section>
    </div>
  )
}
