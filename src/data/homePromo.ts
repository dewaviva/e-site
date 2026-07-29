export interface PromoLink {
  label: string
  href: string
}

export interface HomePromoConfig {
  storageKey: string
  heroBadge: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction: {
    label: string
    href: string
  }
  footerAction?: {
    label: string
    href: string
  }
  stats: Array<{
    value: string
    label: string
  }>
  links: PromoLink[]
  note: string
}

const homePromo: HomePromoConfig = {
  image: '/pop-up.png',
  imageAlt: 'Promosi utama KAIZU88',
  primaryAction: {
    label: 'DAFTAR KAIZU88',
    href: 'https://globalcuturl.com/kaizu88-daftar',
  },
  secondaryAction: {
    label: 'LOGIN KAIZU88',
    href: 'https://globalcuturl.com/kaizu88',
  },
  footerAction: {
    label: 'HUBUNGI LIVE CHAT',
    href: 'https://globalcuturl.com/kz88-live-chat',
  },
  stats: [
  ],
  links: [
    { label: 'Link Alternatif Kaizu88 1', href: 'https://kaizu88.net' },
    { label: 'Link Alternatif Kaizu88 2', href: 'https://kaizu88.homes' },
    { label: 'Link Alternatif Kaizu88 3', href: 'https://kaizu88nakama.world' },
  ],
  note: '© 2026 · KAIZU88 | 18+',
}

export default homePromo