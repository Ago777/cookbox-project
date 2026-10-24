import { ContactButtons } from '../components/ContactButtons'
import { site } from '../data/site'
import { useLanguage } from '../i18n/useLanguage'
import { usePageTitle } from '../utils/usePageTitle'
import './pages.css'
import './steps.css'
import './HowToOrderPage.css'

const STEPS = ['choose', 'write', 'get']

// Step icons as inline SVG paths (simple, friendly)
const STEP_ICONS = {
  choose: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  write: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  get: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
    </svg>
  ),
}

const DELIVERY_ROWS = [
  { field: 'area',     key: 'about.area' },
  { field: 'cost',     key: 'about.cost' },
  { field: 'minOrder', key: 'about.minOrder' },
  { field: 'time', key: 'about.time' },
  { field: 'hours',    key: 'about.hours', fromSite: 'hours' },
]

export function HowToOrderPage() {
  const { t, pick } = useLanguage()
  usePageTitle(t('order.title'))

  const deliveryRows = DELIVERY_ROWS.map((row) => {
    const text = row.fromSite ? pick(site[row.fromSite]) : pick(site.delivery[row.field])
    return { ...row, text }
  }).filter((row) => row.text)

  return (
    <div className="order-page">
      <div className="container narrow">
        <header className="order-head">
          <h1 className="order-head__title">{t('order.title')}</h1>
          <p className="order-head__lead">{t('order.intro')}</p>
        </header>

        {/* ── 3 steps ── */}
        <ol className="steps steps--page">
          {STEPS.map((step, i) => (
            <li key={step} className="step step--rich">
              <div className="step__icon" aria-hidden="true">
                {STEP_ICONS[step]}
                <span className="step__num">{i + 1}</span>
              </div>
              <div className="step__body">
                <h2 className="step__title">{t(`order.${step}.title`)}</h2>
                <p className="step__text">{t(`order.${step}.text`)}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* ── Delivery info chips ── */}
        {deliveryRows.length > 0 && (
          <section className="delivery-info" aria-label={t('about.delivery')}>
            <h2 className="delivery-info__title">{t('about.delivery')}</h2>
            <ul className="delivery-chips">
              {deliveryRows.map((row) => (
                <li key={row.field} className="delivery-chip">
                  <span className="delivery-chip__label">{t(row.key)}</span>
                  <span className="delivery-chip__value">{row.text}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── CTA / messenger section ── */}
        <section className="order-cta">
          <div className="order-cta__text">
            <h2 className="order-cta__title">{t('order.cta.title')}</h2>
            <p className="order-cta__desc">{t('order.cta.text')}</p>
          </div>
          <ContactButtons />
        </section>

      </div>
    </div>
  )
}
