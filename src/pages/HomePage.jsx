import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import { useLanguage } from '../i18n/useLanguage'
import { asset } from '../utils/asset'
import { usePageTitle } from '../utils/usePageTitle'
import './pages.css'

export function HomePage() {
  const { t } = useLanguage()
  usePageTitle(t('hero.title'))

  return (
    <>
      {/* Thin banner: products start right below it, so no "see products" button is needed */}
      <section className="container hero">
        <div className="hero__card">
          <div className="hero__content">
            <h1 className="hero__title">{t('hero.title')}</h1>
            <p className="hero__text">{t('hero.text')}</p>
          </div>
          <img className="hero__image" src={asset('/products/tolma.jpg')} alt="" width="573" height="343" />
        </div>
      </section>

      <section id="products" className="container section">
        <h2 className="section-title">{t('products.title')}</h2>
        <ul className="product-grid">
          {products.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
