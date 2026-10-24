import { findProduct, products } from './products'

// ------------------------------------------------------------------
// "You may also like" — hand-picked 3 products shown under each product.
// Rule used: same family first (other tolma, other cutlets...), then one
// from a neighbouring family, so a customer who orders one thing sees the
// natural extra. Only products with photos are suggested.
// ------------------------------------------------------------------
const RELATED = {
  'tolma-tpov': ['tolma-kaghambov', 'tolma-brndzov', 'karmir-ttu'],
  'tolma-kaghambov': ['tolma-tpov', 'tolma-pasuts', 'ishli-kyufta'],
  'tolma-brndzov': ['tolma-tpov', 'tolma-pasuts', 'pelmeni'],
  'tolma-pasuts': ['tolma-tpov', 'tolma-kaghambov', 'sari-burma'],
  'kotlet-tavari': ['kotlet-kievyan', 'nagets', 'pelmeni'],
  'kotlet-kievyan': ['kotlet-tavari', 'nagets', 'blinchik'],
  blinchik: ['pelmeni', 'nagets', 'kotlet-kievyan'],
  nagets: ['kotlet-kievyan', 'kotlet-tavari', 'blinchik'],
  'ishli-kyufta': ['ishli-kyufta-pokr', 'ghavurma', 'tolma-tpov'],
  'ishli-kyufta-pokr': ['ishli-kyufta', 'ghavurma', 'pelmeni'],
  pelmeni: ['blinchik', 'kotlet-kievyan', 'ishli-kyufta'],
  ghavurma: ['ishli-kyufta', 'khachapuri-panrov', 'karmir-ttu'],
  'shertavor-khmor': ['khachapuri-panrov', 'sari-burma', 'pelmeni'],
  'khachapuri-panrov': ['shertavor-khmor', 'sari-burma', 'ghavurma'],
  'sari-burma': ['khachapuri-panrov', 'shertavor-khmor', 'tolma-tpov'],
  'karmir-ttu': ['ghavurma', 'tolma-tpov', 'ishli-kyufta'],
}

const FALLBACK = ['khachapuri-panrov', 'shertavor-khmor', 'sari-burma']

export function relatedProducts(slug, count = 3) {
  const slugs = RELATED[slug] || FALLBACK
  const picked = slugs.map(findProduct).filter((p) => p && p.slug !== slug && p.images.length > 0)
  // top up if a listed product was removed
  for (const p of products) {
    if (picked.length >= count) break
    if (p.slug !== slug && p.images.length > 0 && !picked.includes(p)) picked.push(p)
  }
  return picked.slice(0, count)
}
