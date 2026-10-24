import { ContactButtons } from '../components/ContactButtons'
import { ReviewCard } from '../components/ReviewCard'
import { reviews } from '../data/reviews'
import { useLanguage } from '../i18n/useLanguage'
import { usePageTitle } from '../utils/usePageTitle'
import './pages.css'

export function ReviewsPage() {
  const { t } = useLanguage()
  usePageTitle(t('nav.reviews'))

  return (
    <div className="container">
      <h1 className="page-title">{t('nav.reviews')}</h1>
      <p className="lead reviews-intro">{t('reviews.intro')}</p>

      {reviews.length === 0 ? (
        <p className="empty-state">{t('reviews.empty')}</p>
      ) : (
        <ul className="reviews-grid">
          {reviews.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      )}

      <section className="contact-card">
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.text')}</p>
        <ContactButtons />
      </section>
    </div>
  )
}
