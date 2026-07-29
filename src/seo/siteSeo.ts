export const SITE_NAME = 'KAIZU88'
export const SITE_DESCRIPTION = 'Toko online game murah di Indonesia dengan koleksi game original dan aksesori gaming resmi berkualitas tinggi.'
export const SITE_URL = 'https://kaizu88max.space'
export const SITE_ORIGIN = new URL(SITE_URL)
export const DEFAULT_OG_IMAGE = '/logo.png'
export const SITE_SOCIAL_PROFILES = [
  'https://www.instagram.com/kaizu88',
  'https://www.facebook.com/kaizu88',
  'https://www.youtube.com/@kaizu88',
]

export const SITE_ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: SITE_SOCIAL_PROFILES,
}

export const SITE_WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export const SITE_TITLE_TEMPLATE = `${SITE_NAME} | Gaming Store`
export const SITE_HOME_TITLE = 'Game Original & Aksesori Gaming Resmi'
export const SITE_HOME_DESCRIPTION = 'KAIZU88 adalah toko online terpercaya di Indonesia yang menyediakan ribuan game original dari berbagai vendor untuk PC, handphone, dan konsol berkualitas tinggi dengan garansi resmi.'