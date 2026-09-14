import { useState } from 'react'
import logo from '../assets/brand/logo-color.svg'
import { useLanguage } from '../i18n/useLanguage'
import { asset } from '../utils/asset'
import './ProductImage.css'

// Shows the photo, or a branded placeholder when there is no photo or it fails to load.
export function ProductImage({ src, alt, className = '', eager = false }) {
  const { t } = useLanguage()
  const [failedSrc, setFailedSrc] = useState(null)
  const showPhoto = src && failedSrc !== src

  return (
    <div className={`product-image ${className}`}>
      {showPhoto ? (
        <img
          src={asset(src)}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailedSrc(src)}
        />
      ) : (
        <div className="product-image__placeholder" role="img" aria-label={alt}>
          <img src={logo} alt="" />
          <span>{t('product.photoSoon')}</span>
        </div>
      )}
    </div>
  )
}
