import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContactButtons } from '../components/ContactButtons'
import { Icon } from '../components/Icon'
import { ProductImage } from '../components/ProductImage'
import { findProduct } from '../data/products'
import { useLanguage } from '../i18n/useLanguage'
import { asset } from '../utils/asset'
import { formatPrice } from '../utils/format'
import { usePageTitle } from '../utils/usePageTitle'
import { NotFoundPage } from './NotFoundPage'
import './pages.css'

export function ProductPage() {
  const { slug } = useParams()
  const product = findProduct(slug)

  if (!product) return <NotFoundPage titleKey="product.notFound" />
  // key resets the selected photo when moving between products
  return <ProductDetails key={product.slug} product={product} />
}

function ProductDetails({ product }) {
  const { t, pick } = useLanguage()
  const [active, setActive] = useState(0)
  const name = pick(product.name)
  const size = pick(product.size)
  usePageTitle(name)

  const sections = [
    { key: 'product.description', text: pick(product.description) },
    { key: 'product.cooking', text: pick(product.cooking) },
    { key: 'product.storage', text: pick(product.storage) },
  ].filter((s) => s.text)

  return (
    <div className="container">
      <Link to="/" className="back-link">
        <Icon name="arrow-left" />
        {t('product.back')}
      </Link>

      <article className="product-detail">
        <div className="product-detail__media">
          <ProductImage
            src={product.images[active]}
            alt={name}
            className="product-detail__image"
            eager
          />
          {product.images.length > 1 && (
            <div className="thumbs">
              {product.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className="thumb"
                  aria-current={i === active}
                  aria-label={`${t('product.photo')} ${i + 1}`}
                  onClick={() => setActive(i)}
                >
                  <img src={asset(src)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="product-detail__title">{name}</h1>
          {size && <p className="product-detail__size">{size}</p>}
          <p>
            <span className="price product-detail__price">{formatPrice(product.price)}</span>
          </p>

          {sections.map((s) => (
            <section key={s.key} className="info-section">
              <h2>{t(s.key)}</h2>
              <p>{s.text}</p>
            </section>
          ))}

          <section className="contact-card">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.text')}</p>
            <ContactButtons />
          </section>
        </div>
      </article>
    </div>
  )
}
