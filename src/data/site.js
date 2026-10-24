// ------------------------------------------------------------------
// SITE TEXTS — About page, delivery info, working hours.
// Every text is { hy, ru }. Empty text = that line/section is hidden.
// ------------------------------------------------------------------
export const site = {
  // TODO(Ago): draft based on project-docs/about-cookbox.md — rewrite in your own words.
  about: {
    hy: [
      'CookBox-ը պատրաստում է տնական համով կիսաֆաբրիկատներ՝ տոլմա, պելմենի, բլինչիկ, կոտլետ, խաչապուրի և ավելին։',
      'Ամեն ինչ պատրաստվում է պատվերով, թարմ մթերքից։ Պատվիրելու համար գրեք մեզ Facebook-ով կամ Instagram-ով։',
    ],
    ru: [
      'CookBox готовит полуфабрикаты с домашним вкусом: толму, пельмени, блинчики, котлеты, хачапури и многое другое.',
      'Всё готовится под заказ, из свежих продуктов. Чтобы заказать, напишите нам в Facebook или Instagram.',
    ],
  },

  delivery: {
    area: { hy: 'Երևան', ru: 'Ереван' },
    cost: {
      hy: 'Անվճար առաքում Երևանում՝ 5000 դրամից սկսած',
      ru: 'Бесплатная доставка по Еревану от 5000 ֏',
    },
    // TODO(Ago): minimum order — not decided yet
    minOrder: { hy: '', ru: '' },
    payment: { hy: 'Կանխիկ՝ առաքման պահին', ru: 'Наличными при доставке' },
  },

  // TODO(Ago): e.g. { hy: 'Երկ–Կիր՝ 10:00–20:00', ru: 'Пн–Вс: 10:00–20:00' }
  hours: { hy: '', ru: '' },
}
