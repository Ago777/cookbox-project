import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { formatPrice } from '../utils/format'
import { Icon } from './Icon'
import { ProductImage } from './ProductImage'
import './ProductCard.css'

// Card order follows the usual shop pattern: photo → name → size → price + action.
// The whole card is one link, so it is a big, forgiving tap target.
export function ProductCard({ product }) {
  const { t, pick } = useLanguage()
  const name = pick(product.name)
  const size = pick(product.size)

  return (
    <Link to={`/product/${product.slug}`} className="product-card">
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

        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          <span className="product-card__cta">
            {t('product.details')}
            <Icon name="chevron-right" size={18} />
          </span>
        </div>
      </div>
    </Link>
  )
}
