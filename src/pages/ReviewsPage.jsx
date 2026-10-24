import { ReviewCard } from '../components/ReviewCard'
import { reviews } from '../data/reviews'
import { useLanguage } from '../i18n/useLanguage'
import { usePageTitle } from '../utils/usePageTitle'
import './pages.css'
import './ReviewsPage.css'

export function ReviewsPage() {
  const { t } = useLanguage()
  usePageTitle(t('nav.reviews'))

  return (
    <div className="reviews-page">
      {/* ── Hero banner ── */}
      <div className="reviews-hero">
        <div className="container">
          <span className="reviews-hero__quote" aria-hidden="true">"</span>
          <h1 className="reviews-hero__title">{t('reviews.homeTitle')}</h1>
          <p className="reviews-hero__sub">{t('reviews.intro')}</p>
        </div>
      </div>

      <div className="container">
        {reviews.length === 0 ? (
          <p className="empty-state">{t('reviews.empty')}</p>
        ) : (
          <ul className="reviews-grid reviews-grid--page">
            {reviews.map((review) => (
              <li key={review.id}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
