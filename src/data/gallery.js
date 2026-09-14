import { products } from './products'

// ------------------------------------------------------------------
// GALLERY — extra photos (kitchen, packaging, team, events...).
// Put files in public/gallery/ and list them here.
// Product photos from products.js are added automatically after these.
// ------------------------------------------------------------------
const extraPhotos = [
  // { src: '/gallery/kitchen-1.jpg', alt: { hy: 'Մեր խոհանոցը', ru: 'Наша кухня' } },
]

function productPhotos() {
  const seen = new Set()
  const photos = []
  for (const product of products) {
    for (const src of product.images) {
      if (seen.has(src)) continue
      seen.add(src)
      photos.push({ src, alt: product.name })
    }
  }
  return photos
}

export const galleryPhotos = [...extraPhotos, ...productPhotos()]
