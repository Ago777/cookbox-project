// ------------------------------------------------------------------
// PRODUCTS — the only place to change products, prices and texts.
//
// slug         → part of the page URL (/product/<slug>). Latin letters, no spaces.
// name / size  → { hy, ru }. size is optional (weight or piece count).
// price        → number in AMD.
// images       → files in public/products/. Empty [] shows the CookBox placeholder.
//                The first image is the main one (used on the home page).
// description / cooking / storage → { hy, ru }. Empty text = section hidden.
//
// Source: "cookBox last menu.png" (Dec 2025). TODO(Ago): confirm prices are current.
// ------------------------------------------------------------------
export const products = [
  {
    slug: 'nrbablit',
    name: { hy: 'Նրբաբլիթ տավարի մսով', ru: 'Блинчики с говядиной' },
    price: 250,
    images: ['/products/nrbablit.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'kotlet-tavari',
    name: { hy: 'Կոտլետ տավարի մսով', ru: 'Котлета из говядины' },
    price: 600,
    images: [],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'kotlet-kievyan',
    name: { hy: 'Կոտլետ կիևյան', ru: 'Котлета по-киевски' },
    price: 600,
    images: [],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'tolma-tpov',
    name: { hy: 'Տոլմա թփով', ru: 'Толма в виноградных листьях' },
    size: { hy: '450 գ.', ru: '450 г' },
    price: 2700,
    images: ['/products/tolma.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'tolma-kaghambov',
    name: { hy: 'Տոլմա կաղամբով', ru: 'Толма в капустных листьях' },
    size: { hy: '450 գ.', ru: '450 г' },
    price: 2500,
    images: ['/products/tolma.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'shertavor-khmor',
    name: { hy: 'Շերտավոր խմոր', ru: 'Слоёное тесто' },
    price: 800,
    images: [],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'pelmeni',
    name: { hy: 'Պելմենի', ru: 'Пельмени' },
    size: { hy: '450 գ.', ru: '450 г' },
    price: 1600,
    images: ['/products/pelmeni.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'ishli-kyufta',
    name: { hy: 'Իշլի քյուֆտա', ru: 'Ишли кюфта' },
    price: 550,
    images: [],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'samsa-havi',
    name: { hy: 'Սամսա հավի մսով', ru: 'Самса с курицей' },
    price: 350,
    images: [],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'samsa-khozi',
    name: { hy: 'Սամսա խոզի մսով', ru: 'Самса со свининой' },
    price: 500,
    images: [],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'ghavurma',
    name: { hy: 'Ղավուրմա', ru: 'Гаурма' },
    size: { hy: '1 կգ.', ru: '1 кг' },
    price: 15000,
    // TODO(Ago): confirm this photo is ghavurma (could be ishli kyufta)
    images: ['/products/ghavurma.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'sari-burma',
    name: { hy: 'Սարի բուրմա', ru: 'Сари бурма' },
    size: { hy: '4 հատ', ru: '4 шт.' },
    price: 3000,
    images: [],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'ttu',
    name: { hy: 'Թթու', ru: 'Соленья' },
    price: 1000,
    images: [],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
]

export function findProduct(slug) {
  return products.find((p) => p.slug === slug)
}
