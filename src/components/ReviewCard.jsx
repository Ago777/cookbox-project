import { Link } from 'react-router-dom'
import { findProduct } from '../data/products'
import { useLanguage } from '../i18n/useLanguage'
import './ReviewCard.css'

const HY_MONTHS = [
  'հունվարի', 'փետրվարի', 'մարտի', 'ապրիլի', 'մայիսի', 'հունիսի',
  'հուլիսի', 'օգոստոսի', 'սեպտեմբերի', 'հոկտեմբերի', 'նոյեմբերի', 'դեկտեմբերի',
]

// Browsers often lack Armenian date data and fall back to English, so
// the Armenian date is built by hand.
function formatDate(iso, lang) {
  const date = new Date(iso)
  if (lang === 'hy') {
    return `${date.getUTCDate()} ${HY_MONTHS[date.getUTCMonth()]}, ${date.getUTCFullYear()}`
  }
  return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}

// Shared by the Reviews page and the short strip on the home page.
export function ReviewCard({ review }) {
  const { pick, lang } = useLanguage()
  const product = review.product ? findProduct(review.product) : null

  return (
    <figure className="review-card">
      <div className="review-card__inner">
        <span className="review-card__mark" aria-hidden="true">"</span>
        <blockquote className="review-card__text">{pick(review.text)}</blockquote>
        <figcaption className="review-card__meta">
          {product && (
            <Link className="review-card__product" to={`/product/${product.slug}`}>
              {pick(product.name)}
            </Link>
          )}
          {review.date && (
            <time className="review-card__date" dateTime={review.date}>
              {formatDate(review.date, lang)}
            </time>
          )}
        </figcaption>
      </div>
    </figure>
  )
}
