import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { ProductCard } from '../components/ProductCard'
import { ReviewCard } from '../components/ReviewCard'
import { products } from '../data/products'
import { reviews } from '../data/reviews'
import { useLanguage } from '../i18n/useLanguage'
import { asset } from '../utils/asset'
import { usePageTitle } from '../utils/usePageTitle'
import './pages.css'

const HOME_REVIEWS = 3

export function HomePage() {
  const { t } = useLanguage()
  usePageTitle(t('home.pageTitle'))
  const topReviews = reviews.slice(0, HOME_REVIEWS)

  return (
    <>
      {/* Thin photo banner: a dark scrim keeps the text readable while the food
          stays visible on the right. Products start right below it. */}
      <section className="container hero">
        <div className="hero__card">
          <img
            className="hero__bg"
            src={asset('/hero.jpg')}
            srcSet={`${asset('/hero-sm.jpg')} 900w, ${asset('/hero.jpg')} 1600w`}
            sizes="100vw"
            alt=""
            width="1600"
            height="600"
            fetchPriority="high"
          />
          <div className="hero__content">
            <h1 className="hero__title">{t('hero.title')}</h1>
            <p className="hero__text">{t('hero.text')}</p>
            <p className="hero__chip hero__chip--accent">{t('hero.chipDelivery')}</p>
          </div>
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

        <p className="menu-download-wrap">
          <a className="menu-download" href={asset('/cookbox-menu.jpg')} download="CookBox-menu.jpg">
            <Icon name="download" />
            {t('menu.download')}
          </a>
        </p>
      </section>

      {topReviews.length > 0 && (
        <section className="container section">
          <div className="section-head">
            <h2 className="section-title">{t('reviews.homeTitle')}</h2>
            <Link className="section-link" to="/reviews">
              {t('reviews.seeAll')}
            </Link>
          </div>
          <ul className="reviews-grid">
            {topReviews.map((review) => (
              <li key={review.id}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
