import { Link } from 'react-router-dom'
import { findProduct } from '../data/products'
import { useLanguage } from '../i18n/useLanguage'
import './ReviewCard.css'

const DATE_LOCALE = { hy: 'hy-AM', ru: 'ru-RU' }

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
              {new Date(review.date).toLocaleDateString(DATE_LOCALE[lang], {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </figcaption>
      </div>
    </figure>
  )
}
