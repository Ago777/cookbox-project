import { useState } from 'react'
import logo from '../assets/brand/logo-color.svg'
import { useLanguage } from '../i18n/useLanguage'
import { asset, photoSrcSet } from '../utils/asset'
import './ProductImage.css'

// Shows the photo, or a branded placeholder when there is no photo or it fails to load.
// `sizes` tells the browser how wide the image will be, so it picks the smaller file on phones.
export function ProductImage({ src, alt, className = '', eager = false, sizes = '50vw' }) {
  const { t } = useLanguage()
  const [failedSrc, setFailedSrc] = useState(null)
  const showPhoto = src && failedSrc !== src

  return (
    <div className={`product-image ${className}`}>
      {showPhoto ? (
        <img
          src={asset(src)}
          srcSet={photoSrcSet(src)}
          sizes={sizes}
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
