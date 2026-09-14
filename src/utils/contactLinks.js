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
