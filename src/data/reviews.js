// ------------------------------------------------------------------
// CUSTOMER REVIEWS (Կարծիքներ)
//
// Taken from real customer messages that were saved inside the photos in
// smm-marketing/content/. Messages written in Armenian with Latin letters
// ("Barev dzez...") were rewritten in Armenian script; the Russian one was
// translated to Armenian and kept in Russian for the Russian version.
// Nothing was invented and no customer names are shown.
//
// text    → { hy, ru }
// product → optional product slug, shows a link to that product
// date    → optional ISO date, only when the screenshot showed one
// source  → the file the message came from (for your reference only)
// ------------------------------------------------------------------
export const reviews = [
  {
    id: 'kievyan-1',
    text: {
      hy: 'Բարև Ձեզ։ Ձեր պատրաստած սնունդը շատ համեղ էր և որակով։ Շնորհակալ ենք Ձեզ 😊 Խնդրում ենք որակը չփոխեք, մենք էլ վստահ կպատվիրենք և բոլորին խորհուրդ կտանք օգտվել Ձեր սննդի կետից։ Ձեր գալիք բոլոր տոները շնորհավոր։ 🥰',
      ru: 'Здравствуйте. Приготовленная вами еда была очень вкусной и качественной. Спасибо вам 😊 И просим не менять качество — мы будем заказывать и всем советовать. Поздравляем вас с наступающими праздниками. 🥰',
    },
    product: 'kotlet-kievyan',
    source: 'կիևյան-կոտլետ-3.JPG',
  },
  {
    id: 'tolma-1',
    text: {
      hy: 'Մեզ շատ դուր եկավ՝ այն ամենը, ինչ նախկինում պատվիրել ենք, գերազանց որակի էր։ Եթե պետք է որևէ տեղ հրապարակային անկեղծ կարծիք թողնել, գրեք։ ❤️',
      ru: 'Нам очень понравилось, всё что заказывали ранее — отличное качество. Если надо где-то оставить публичный честный отзыв, напишите. ❤️',
    },
    product: 'tolma-tpov',
    source: 'թփով-և-կաղամբով-տոլմա-2.JPG',
  },
  {
    id: 'pelmeni-1',
    text: {
      hy: 'Բարև ձեզ։ Շատ համով էին, իսկական տնական ուտելիք։ Շնորհակալություն ❤️',
      ru: 'Здравствуйте. Было очень вкусно, настоящая домашняя еда. Спасибо ❤️',
    },
    product: 'pelmeni',
    source: 'պելմենի-2.JPG',
  },
  {
    id: 'nagets-1',
    text: {
      hy: 'Շնորհակալություն, ես երեկ գնել եմ, շատ եմ հավանել։',
      ru: 'Спасибо, я вчера купила — очень понравилось.',
    },
    product: 'nagets',
    source: 'նագետս-4.JPG / փոքր-իշլի-քյուֆթա-2.JPG',
  },
  {
    id: 'ishli-1',
    text: {
      hy: 'Շատ համեղ էր, շնորհակալություն 🌹',
      ru: 'Было очень вкусно, спасибо 🌹',
    },
    product: 'ishli-kyufta',
    date: '2025-12-28',
    source: 'իշլի-քյուֆթա-1.JPG',
  },
  {
    id: 'ishli-2',
    text: {
      hy: 'Մենակ շատ եմ խնդրում՝ նույն որակից լինի։',
      ru: 'Только очень прошу — чтобы было того же качества.',
    },
    product: 'ishli-kyufta',
    source: 'իշլի-քյուֆթա-5.JPG',
  },
]
