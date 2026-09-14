import { BRAND_ICONS } from './brandIcons'

// Simple line icons (Feather-style, 24×24). Always paired with a visible text label.
const PATHS = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  'arrow-left': (
    <>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </>
  ),
  close: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
  'chevron-left': <polyline points="15 18 9 12 15 6" />,
  'chevron-right': <polyline points="9 18 15 12 9 6" />,
}

export function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    focusable: 'false',
  }

  // Real WhatsApp / Viber / Telegram / Facebook / Instagram logos — older users
  // recognise the actual logo much faster than a generic chat icon.
  if (BRAND_ICONS[name]) {
    return (
      <svg {...common} fill="currentColor">
        <path d={BRAND_ICONS[name]} />
      </svg>
    )
  }

  return (
    <svg
      {...common}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {PATHS[name]}
    </svg>
  )
}
