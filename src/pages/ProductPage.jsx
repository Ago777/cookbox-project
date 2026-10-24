import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContactButtons } from '../components/ContactButtons'
import { Icon } from '../components/Icon'
import { ProductCard } from '../components/ProductCard'
import { ProductImage } from '../components/ProductImage'
import { findProduct } from '../data/products'
import { relatedProducts } from '../data/related'
import { useLanguage } from '../i18n/useLanguage'
import { useOrderLinks } from '../utils/useOrderLinks'
import { smallAsset } from '../utils/asset'
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
  const links = useOrderLinks(name)
  const related = relatedProducts(product.slug)

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
            sizes="(min-width: 900px) 600px, 100vw"
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
                  <img src={smallAsset(src)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="product-detail__head">
            <h1 className="product-detail__title">{name}</h1>
            {/* phones: price and size sit next to the name */}
            <p className="product-head__meta">
              <strong>{formatPrice(product.price)}</strong>
              {size && <span>{size}</span>}
            </p>
          </div>
          {size && <p className="product-detail__size">{size}</p>}
          <p className="product-detail__pricerow">
            <span className="price product-detail__price">{formatPrice(product.price)}</span>
          </p>

          {/* phones: a hint and two order buttons */}
          <div className="product-order">
            <p className="product-order__hint">{t('product.orderHint')}</p>
            <div className="product-order__btns">
              {links.map((link) => (
                <a
                  key={link.id}
                  className={`product-order__btn brand-fill--${link.id}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={link.id} size={18} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {sections.map((s) => (
            <section key={s.key} className="info-section">
              <h2>{t(s.key)}</h2>
              <p>{s.text}</p>
            </section>
          ))}

          <section className="contact-card product-contact">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.text')}</p>
            <ContactButtons links={links} />
          </section>
        </div>
      </article>

      {related.length > 0 && (
        <section className="related">
          <h2 className="section-title">{t('product.related')}</h2>
          <ul className="product-grid related__grid">
            {related.map((p) => (
              <li key={p.slug}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
