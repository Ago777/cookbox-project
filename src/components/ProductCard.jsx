import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { formatPrice } from '../utils/format'
import { Icon } from './Icon'
import { ProductImage } from './ProductImage'
import './ProductCard.css'

// The whole card is one link — a big, forgiving tap target.
export function ProductCard({ product }) {
  const { pick } = useLanguage()
  const name = pick(product.name)
  const size = pick(product.size)

  return (
    <Link to={`/product/${product.slug}`} className="product-card">
      <ProductImage src={product.images[0]} alt={name} />
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        {size && <p className="product-card__size">{size}</p>}
        <div className="product-card__footer">
          <span className="price">{formatPrice(product.price)}</span>
          <span className="product-card__arrow" aria-hidden="true">
            <Icon name="chevron-right" size={18} />
          </span>
        </div>
      </div>
    </Link>
  )
}
