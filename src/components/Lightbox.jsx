import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import { asset } from '../utils/asset'
import { Icon } from './Icon'
import './Lightbox.css'

// Native <dialog>: focus trap, Esc-to-close and top-layer stacking for free.
export function Lightbox({ photos, index, onChange, onClose }) {
  const { t, pick } = useLanguage()
  const dialogRef = useRef(null)
  const photo = photos[index]
  const hasMany = photos.length > 1

  // No close() in cleanup: removing the element already leaves the top layer, and a
  // cleanup close() would fire onClose during StrictMode's dev re-mount.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
  }, [])

  const go = (step) => onChange((index + step + photos.length) % photos.length)

  const onKeyDown = (e) => {
    if (!hasMany) return
    if (e.key === 'ArrowLeft') go(-1)
    if (e.key === 'ArrowRight') go(1)
  }

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={pick(photo.alt)}
      onClose={onClose}
      onKeyDown={onKeyDown}
    >
      <div className="lightbox__top">
        <span className="lightbox__counter">
          {index + 1} / {photos.length}
        </span>
        <button type="button" className="btn btn--primary" onClick={onClose} autoFocus>
          <Icon name="close" />
          {t('gallery.close')}
        </button>
      </div>

      <div className="lightbox__stage">
        <img src={asset(photo.src)} alt={pick(photo.alt)} />
      </div>
      <p className="lightbox__caption">{pick(photo.alt)}</p>

      {hasMany && (
        <div className="lightbox__nav">
          <button type="button" className="btn btn--secondary" onClick={() => go(-1)}>
            <Icon name="chevron-left" />
            {t('gallery.prev')}
          </button>
          <button type="button" className="btn btn--secondary" onClick={() => go(1)}>
            {t('gallery.next')}
            <Icon name="chevron-right" />
          </button>
        </div>
      )}
    </dialog>
  )
}
