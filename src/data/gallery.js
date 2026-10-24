import { products } from './products'

// ------------------------------------------------------------------
// GALLERY — extra photos (kitchen, packaging, team, events...).
// Put files in public/gallery/ and list them here.
// Product photos from products.js are added automatically after these.
// ------------------------------------------------------------------
const extraPhotos = [
  { src: '/gallery/tolma-mix-a.jpg',      alt: { hy: 'Տոլմա',               ru: 'Толма' } },
  { src: '/gallery/tolma-mix-b.jpg',      alt: { hy: 'Տոլմա',               ru: 'Толма' } },
  { src: '/gallery/tolma-tpov-a.jpg',     alt: { hy: 'Թփով տոլմա',          ru: 'Толма в виноградных листьях' } },
  { src: '/gallery/tolma-tpov-b.jpg',     alt: { hy: 'Թփով տոլմա',          ru: 'Толма в виноградных листьях' } },
  { src: '/gallery/tolma-brndzov-a.jpg',  alt: { hy: 'Բրնձով տոլմա',        ru: 'Толма с рисом' } },
  { src: '/gallery/tolma-brndzov-b.jpg',  alt: { hy: 'Բրնձով տոլմա',        ru: 'Толма с рисом' } },
  { src: '/gallery/tolma-pasuts-a.jpg',   alt: { hy: 'Պասուց տոլմա',         ru: 'Пасуц толма' } },
  { src: '/gallery/kievyan-a.jpg',        alt: { hy: 'Կիևյան կոտլետ',        ru: 'Котлета по-киевски' } },
  { src: '/gallery/kievyan-b.jpg',        alt: { hy: 'Կիևյան կոտլետ',        ru: 'Котлета по-киевски' } },
  { src: '/gallery/tavari-a.jpg',         alt: { hy: 'Տավարի կոտլետ',        ru: 'Говяжья котлета' } },
  { src: '/gallery/tavari-b.jpg',         alt: { hy: 'Տավարի կոտլետ',        ru: 'Говяжья котлета' } },
  { src: '/gallery/ishli-a.jpg',          alt: { hy: 'Իշլի քյուֆթա',         ru: 'Ишли кюфта' } },
  { src: '/gallery/ishli-b.jpg',          alt: { hy: 'Իշլի քյուֆթա',         ru: 'Ишли кюфта' } },
  { src: '/gallery/ishli-c.jpg',          alt: { hy: 'Իշլի քյուֆթա',         ru: 'Ишли кюфта' } },
  { src: '/gallery/ishli-pokr-a.jpg',     alt: { hy: 'Փոքր իշլի քյուֆթա',   ru: 'Малая ишли кюфта' } },
  { src: '/gallery/blinchik-a.jpg',       alt: { hy: 'Բլինչիկ',              ru: 'Блинчики' } },
  { src: '/gallery/blinchik-b.jpg',       alt: { hy: 'Բլինչիկ',              ru: 'Блинчики' } },
  { src: '/gallery/pelmeni-a.jpg',        alt: { hy: 'Պելմենի',              ru: 'Пельмени' } },
  { src: '/gallery/nagets-a.jpg',         alt: { hy: 'Նագետս',               ru: 'Наггетсы' } },
  { src: '/gallery/ghavurma-a.jpg',       alt: { hy: 'Ղավուրմա',             ru: 'Гавурма' } },
  { src: '/gallery/khachapuri-a.jpg',     alt: { hy: 'Խաչապուրի',            ru: 'Хачапури' } },
  { src: '/gallery/khmor-a.jpg',          alt: { hy: 'Շերտավոր խմոր',        ru: 'Слоёное тесто' } },
  { src: '/gallery/khmor-b.jpg',          alt: { hy: 'Շերտավոր խմոր',        ru: 'Слоёное тесто' } },
  { src: '/gallery/sari-burma-a.jpg',     alt: { hy: 'Սարի բուրմա',          ru: 'Сари бурма' } },
  { src: '/gallery/karmir-ttu-a.jpg',     alt: { hy: 'Կարմիր թթու',          ru: 'Красные соленья' } },
  { src: '/gallery/karmir-ttu-b.jpg',     alt: { hy: 'Կարմիր թթու',          ru: 'Красные соленья' } },
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
