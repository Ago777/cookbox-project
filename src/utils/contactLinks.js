import { contacts } from '../data/contacts'

// Messenger/social channels in display order. Channels with an empty value are skipped.
const CHANNELS = [
  { id: 'whatsapp', label: 'WhatsApp', href: (v) => `https://wa.me/${v}` },
  { id: 'viber', label: 'Viber', href: (v) => `viber://chat?number=${encodeURIComponent(v)}` },
  { id: 'telegram', label: 'Telegram', href: (v) => `https://t.me/${v}` },
  { id: 'facebook', label: 'Facebook', href: (v) => v },
  { id: 'instagram', label: 'Instagram', href: (v) => v },
]

export const phoneHref = contacts.phone ? `tel:${contacts.phone}` : ''

export const messengerLinks = CHANNELS.filter((c) => contacts[c.id]).map((c) => ({
  id: c.id,
  label: c.label,
  href: c.href(contacts[c.id]),
}))

// "https://www.facebook.com/profile.php?id=123" → "123", ".../cookbox_arm" → "cookbox_arm"
function handleFromUrl(url) {
  try {
    const u = new URL(url)
    return u.searchParams.get('id') || u.pathname.split('/').filter(Boolean).pop() || ''
  } catch {
    return ''
  }
}

// Direct-message links for the "order" buttons. `text` is a ready-made first
// message ("Hello, I want to order …"). Messenger and WhatsApp accept it;
// Instagram and Telegram only open the chat, the customer types the message.
const ORDER_HREF = {
  whatsapp: (v, text) => `https://wa.me/${v}?text=${encodeURIComponent(text)}`,
  viber: (v) => `viber://chat?number=${encodeURIComponent(v)}`,
  telegram: (v) => `https://t.me/${v}`,
  // The standard "message us" link used by websites: https://m.me/<page>.
  // Tested on a phone: it asks "Open in Messenger" once (Facebook's own screen)
  // and then opens the real page chat. messenger.com/t/<id> opened an empty chat
  // where sending fails, so do not use it.
  facebook: (v) => `https://m.me/${handleFromUrl(v)}`,
  instagram: (v) => `https://ig.me/m/${handleFromUrl(v)}`,
}

export function orderLinks(text) {
  return CHANNELS.filter((c) => contacts[c.id]).map((c) => ({
    id: c.id,
    label: c.label,
    href: ORDER_HREF[c.id](contacts[c.id], text),
  }))
}
