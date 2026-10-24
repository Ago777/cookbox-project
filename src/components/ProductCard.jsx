import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { formatPrice } from '../utils/format'
import { ProductImage } from './ProductImage'
import './ProductCard.css'

// The whole card opens the product page; the orange button says «Details».
// Ordering happens on the product page and with the floating chat buttons.
export function ProductCard({ product }) {
  const { t, pick } = useLanguage()
  const name = pick(product.name)
  const size = pick(product.size)

  return (
    <article className="product-card">
      <Link to={`/product/${product.slug}`} className="product-card__link">
        <div className="product-card__media">
          <ProductImage
            src={product.images[0]}
            alt={name}
            sizes="(min-width: 1100px) 320px, (min-width: 720px) 33vw, 50vw"
          />
        </div>

        <div className="product-card__body">
          <h3 className="product-card__name">{name}</h3>
          {size && <p className="product-card__size">{size}</p>}
        </div>
      </Link>

      <div className="product-card__footer">
        <span className="product-card__price">{formatPrice(product.price)}</span>
        <Link to={`/product/${product.slug}`} className="product-card__cta">
          {t('product.details')}
        </Link>
      </div>
    </article>
  )
}
