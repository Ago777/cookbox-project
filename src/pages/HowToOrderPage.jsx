import { ContactButtons } from '../components/ContactButtons'
import { site } from '../data/site'
import { useLanguage } from '../i18n/useLanguage'
import { usePageTitle } from '../utils/usePageTitle'
import './pages.css'
import './steps.css'

const STEPS = ['choose', 'write', 'get']

const DELIVERY_ROWS = [
  { field: 'area', key: 'about.area' },
  { field: 'cost', key: 'about.cost' },
  { field: 'minOrder', key: 'about.minOrder' },
  { field: 'payment', key: 'about.payment' },
]

// There is no cart on this site, so the next step has to be spelled out.
export function HowToOrderPage() {
  const { t, pick } = useLanguage()
  usePageTitle(t('order.title'))

  const hours = pick(site.hours)
  const delivery = DELIVERY_ROWS.map((row) => ({
    ...row,
    text: pick(site.delivery[row.field]),
  })).filter((row) => row.text)

  return (
    <div className="container narrow">
      <h1 className="page-title">{t('order.title')}</h1>
      <p className="lead reviews-intro">{t('order.intro')}</p>

      <ol className="steps steps--page">
        {STEPS.map((step, i) => (
          <li key={step} className="step">
            <span className="step__num" aria-hidden="true">
              {i + 1}
            </span>
            <div>
              <h2 className="step__title">{t(`order.${step}.title`)}</h2>
              <p className="step__text">{t(`order.${step}.text`)}</p>
            </div>
          </li>
        ))}
      </ol>

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
