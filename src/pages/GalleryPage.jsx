import { useState } from 'react'
import { Lightbox } from '../components/Lightbox'
import { galleryPhotos } from '../data/gallery'
import { useLanguage } from '../i18n/useLanguage'
import { asset } from '../utils/asset'
import { usePageTitle } from '../utils/usePageTitle'
import './pages.css'

export function GalleryPage() {
  const { t, pick } = useLanguage()
  const [openIndex, setOpenIndex] = useState(null)
  usePageTitle(t('gallery.title'))

  return (
    <div className="container">
      <h1 className="page-title">{t('gallery.title')}</h1>

      {galleryPhotos.length === 0 ? (
        <p className="empty-state">{t('gallery.empty')}</p>
      ) : (
        <ul className="gallery-grid">
          {galleryPhotos.map((photo, i) => (
            <li key={photo.src}>
              <button
                type="button"
                className="gallery-item"
                aria-label={`${t('gallery.open')}: ${pick(photo.alt)}`}
                onClick={() => setOpenIndex(i)}
              >
                <img src={asset(photo.src)} alt="" loading="lazy" decoding="async" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {openIndex !== null && (
        <Lightbox
          photos={galleryPhotos}
          index={openIndex}
          onChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  )
}
