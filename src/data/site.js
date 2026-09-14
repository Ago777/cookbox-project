// ------------------------------------------------------------------
// SITE TEXTS — About page, delivery info, working hours.
// Every text is { hy, ru }. Empty text = that line/section is hidden.
// ------------------------------------------------------------------
export const site = {
  // TODO(Ago): neutral draft — rewrite in your own words (story, quality, why CookBox).
  about: {
    hy: [
      'CookBox-ը պատրաստում է սառեցված կիսաֆաբրիկատներ՝ տոլմա, պելմենի, նրբաբլիթ, սամսա, կոտլետներ և ավելին։',
      'Պատվերներն ընդունում ենք հեռախոսով, ինչպես նաև Facebook-ում, Instagram-ում, WhatsApp-ում, Telegram-ում և Viber-ում։',
    ],
    ru: [
      'CookBox готовит замороженные полуфабрикаты: толму, пельмени, блинчики, самсу, котлеты и многое другое.',
      'Заказы принимаем по телефону, а также в Facebook, Instagram, WhatsApp, Telegram и Viber.',
    ],
  },

  // TODO(Ago): fill in. Empty lines are not shown; if all are empty the whole block is hidden.
  delivery: {
    area: { hy: '', ru: '' },
    cost: { hy: '', ru: '' },
    minOrder: { hy: '', ru: '' },
    payment: { hy: '', ru: '' },
  },

  // TODO(Ago): e.g. { hy: 'Երկ–Կիր՝ 10:00–20:00', ru: 'Пн–Вс: 10:00–20:00' }
  hours: { hy: '', ru: '' },
}
