// ------------------------------------------------------------------
// PRODUCTS — the only place to change products, prices and texts.
//
// slug         → part of the page URL (/product/<slug>). Latin letters, no spaces.
// name / size  → { hy, ru }. size is optional (weight or piece count).
// price        → number in AMD.
// images       → files in public/products/. Empty [] shows the CookBox placeholder.
//                The first image is the main one (used on the home page).
//                Each photo also needs a "-sm" version for phones, e.g.
//                tolma-tpov-1.jpg + tolma-tpov-1-sm.jpg
// description / cooking / storage → { hy, ru }. Empty text = section hidden.
//
// Prices: approved menu "smm-marketing/approved/menu-v1.png" (Oct 2026).
// Long term the source of truth is the "CookBox Products" Google Sheet.
// ------------------------------------------------------------------
export const products = [
  {
    slug: 'tolma-tpov',
    name: { hy: 'Թփով տոլմա', ru: 'Толма в виноградных листьях' },
    size: { hy: '0.5 կգ', ru: '0,5 кг' },
    price: 3200,
    images: ['/products/tolma-tpov.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'tolma-kaghambov',
    name: { hy: 'Կաղամբով տոլմա', ru: 'Толма в капустных листьях' },
    size: { hy: '0.5 կգ', ru: '0,5 кг' },
    price: 3000,
    images: ['/products/tolma-kaghambov.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'tolma-brndzov',
    name: { hy: 'Բրնձով տոլմա', ru: 'Толма с рисом' },
    size: { hy: '0.5 կգ', ru: '0,5 кг' },
    price: 1600,
    images: ['/products/tolma-brndzov.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'tolma-pasuts',
    name: { hy: 'Պասուց տոլմա', ru: 'Пасуц толма' },
    size: { hy: '1 կգ', ru: '1 кг' },
    price: 2500,
    images: ['/products/tolma-pasuts.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'kotlet-tavari',
    name: { hy: 'Տավարի կոտլետ', ru: 'Котлета из говядины' },
    size: { hy: '1 հատ', ru: '1 шт.' },
    price: 750,
    images: ['/products/kotlet-tavari.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'blinchik',
    name: { hy: 'Բլինչիկ տավարի մսով', ru: 'Блинчики с говядиной' },
    size: { hy: '1 հատ', ru: '1 шт.' },
    price: 320,
    images: ['/products/blinchik.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'nagets',
    name: { hy: 'Նագետս', ru: 'Наггетсы' },
    size: { hy: '0.5 կգ', ru: '0,5 кг' },
    price: 3000,
    images: ['/products/nagets.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'ishli-kyufta',
    name: { hy: 'Իշլի քյուֆթա (մեծ)', ru: 'Ишли кюфта (большая)' },
    size: { hy: '1 հատ', ru: '1 шт.' },
    price: 600,
    images: ['/products/ishli-kyufta.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'pelmeni',
    name: { hy: 'Պելմենի', ru: 'Пельмени' },
    size: { hy: '0.5 կգ', ru: '0,5 кг' },
    price: 2000,
    images: ['/products/pelmeni.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'kotlet-kievyan',
    name: { hy: 'Կիևյան կոտլետ', ru: 'Котлета по-киевски' },
    size: { hy: '1 հատ', ru: '1 шт.' },
    price: 650,
    images: ['/products/kotlet-kievyan.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'ishli-kyufta-pokr',
    name: { hy: 'Փոքր իշլի քյուֆթա', ru: 'Малая ишли кюфта' },
    size: { hy: '10 հատ (միջուկը կարագով)', ru: '10 шт. (начинка с маслом)' },
    price: 1500,
    images: ['/products/ishli-kyufta-pokr.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'ghavurma',
    name: { hy: 'Ղավուրմա', ru: 'Гаурма' },
    size: { hy: '0.5 կգ', ru: '0,5 кг' },
    price: 10000,
    images: ['/products/ghavurma.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'shertavor-khmor',
    name: { hy: 'Շերտավոր խմոր', ru: 'Слоёное тесто' },
    size: { hy: '1 հատ', ru: '1 шт.' },
    price: 800,
    images: ['/products/shertavor-khmor.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'khachapuri-panrov',
    name: { hy: 'Պանրով խաչապուրի', ru: 'Хачапури с сыром' },
    size: { hy: '6 հատ', ru: '6 шт.' },
    price: 1800,
    images: ['/products/khachapuri-panrov.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'sari-burma',
    name: { hy: 'Սարի բուրմա', ru: 'Сари бурма' },
    size: { hy: '4 հատ', ru: '4 шт.' },
    price: 3000,
    images: ['/products/sari-burma.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'karmir-ttu',
    name: { hy: 'Կարմիր թթու', ru: 'Красные соленья' },
    size: { hy: '1 հատ', ru: '1 шт.' },
    price: 1000,
    images: ['/products/karmir-ttu.jpg'],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'samsa-khozi',
    name: { hy: 'Սամսա խոզի մսով', ru: 'Самса со свининой' },
    size: { hy: '1 հատ', ru: '1 шт.' },
    price: 500,
    // TODO(Ago): no photo yet — add files to public/products/ and list them here
    images: [],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
  {
    slug: 'samsa-havi',
    name: { hy: 'Սամսա հավի մսով', ru: 'Самса с курицей' },
    size: { hy: '1 հատ', ru: '1 шт.' },
    price: 350,
    // TODO(Ago): no photo yet — add files to public/products/ and list them here
    images: [],
    description: { hy: '', ru: '' },
    cooking: { hy: '', ru: '' },
    storage: { hy: '', ru: '' },
  },
]

export function findProduct(slug) {
  return products.find((p) => p.slug === slug)
}
