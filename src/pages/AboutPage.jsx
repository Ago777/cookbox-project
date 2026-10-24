import { site } from '../data/site'
import { useLanguage } from '../i18n/useLanguage'
import { asset } from '../utils/asset'
import { usePageTitle } from '../utils/usePageTitle'
import './pages.css'
import './AboutPage.css'

const svg = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

const ICONS = {
  meat: svg(<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />),
  order: svg(
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </>,
  ),
  frozen: svg(<path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9 4l3 2 3-2M9 20l3-2 3 2" />),
  pin: svg(
    <>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>,
  ),
  tag: svg(
    <>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </>,
  ),
  truck: svg(
    <>
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </>,
  ),
}

const PHOTOS = ['kievyan-a', 'nagets-a', 'pelmeni-a']

export function AboutPage() {
  const { t, pick } = useLanguage()
  usePageTitle(t('about.title'))

  const lead = (pick(site.about) || [])[0]
  const since = pick(site.since)
  const towns = (pick(site.delivery.area) || '').split(',').map((s) => s.trim()).filter(Boolean)
  const cost = pick(site.delivery.cost)
  const time = pick(site.delivery.time)
  const minOrder = pick(site.delivery.minOrder)

  const facts = [
    { icon: 'tag', label: t('about.cost'), text: cost },
    { icon: 'truck', label: t('about.time'), text: time },
    { icon: 'tag', label: t('about.minOrder'), text: minOrder },
  ].filter((f) => f.text)

  return (
    <div className="about-page">
      {/* photo banner */}
      <section className="container about-hero-wrap">
        <div className="about-hero">
          <img
            src={asset('/gallery/tolma-mix-a.jpg')}
            srcSet={`${asset('/gallery/tolma-mix-a-sm.jpg')} 500w, ${asset('/gallery/tolma-mix-a.jpg')} 1000w`}
            sizes="(min-width: 900px) 860px, 100vw"
            alt=""
            width="1000"
            height="1000"
            fetchPriority="high"
          />
          <div className="about-hero__text">
            <h1>{t('about.title')}</h1>
          </div>
        </div>
      </section>

      <div className="container narrow">
        {/* story + the 2025 badge */}
        <section className="about-intro">
          {lead && <p className="about-intro__text">{lead}</p>}
          {since && <p className="about-intro__text">{since}</p>}
        </section>

        {/* short facts */}
        <ul className="about-facts">
          {site.highlights.map((h) => (
            <li key={h.icon} className="about-fact">
              <span className="about-fact__icon">{ICONS[h.icon]}</span>
              <span className="about-fact__title">{pick(h.title)}</span>
            </li>
          ))}
        </ul>

        {/* photos */}
        <ul className="about-photos">
          {PHOTOS.map((name) => (
            <li key={name}>
              <img
                src={asset(`/gallery/${name}-sm.jpg`)}
                alt=""
                width="500"
                height="500"
                loading="lazy"
              />
            </li>
          ))}
        </ul>

        {/* delivery */}
        <section className="about-delivery" aria-labelledby="about-delivery-title">
          <h2 id="about-delivery-title" className="about-delivery__title">
            {t('about.delivery')}
          </h2>

          {towns.length > 0 && (
            <div className="about-towns">
              <p className="about-towns__label">
                <span className="about-towns__icon">{ICONS.pin}</span>
                {t('about.area')}
              </p>
              <ul className="about-towns__list">
                {towns.map((town) => (
                  <li key={town}>{town}</li>
                ))}
              </ul>
            </div>
          )}

          {facts.length > 0 && (
            <ul className="about-delivery__facts">
              {facts.map((f) => (
                <li key={f.label}>
                  <span className="about-towns__icon">{ICONS[f.icon]}</span>
                  <div>
                    <p className="about-delivery__fact-label">{f.label}</p>
                    <p className="about-delivery__fact-text">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}
