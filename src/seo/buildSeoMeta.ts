import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_ORGANIZATION_SCHEMA,
  SITE_WEBSITE_SCHEMA,
} from './siteSeo'

type SeoOptions = {
  title: string
  description?: string
  path?: string
  canonical?: string
  amphtml?: string
  noindex?: boolean
  ogImage?: string
  schema?: Record<string, unknown> | Array<Record<string, unknown>>
}

function normalizePath(path?: string) {
  if (!path) return '/'
  return path.startsWith('/') ? path : `/${path}`
}

function absoluteUrl(path?: string) {
  const normalized = normalizePath(path)
  if (normalized === '/') {
    return SITE_ORIGIN.toString().replace(/\/$/, '')
  }
  return new URL(normalized, SITE_ORIGIN).toString()
}

export function buildSeoMeta(options: SeoOptions) {
  const title = options.title.includes(SITE_NAME)
    ? options.title
    : `${SITE_NAME} ⚡️ ${options.title}`

  const description = options.description ?? SITE_DESCRIPTION
  const ogImage = options.ogImage ?? DEFAULT_OG_IMAGE

  const meta = [
    { title },
    { name: 'description', content: description },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: new URL(ogImage, SITE_ORIGIN).toString() },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: new URL(ogImage, SITE_ORIGIN).toString() },
  ]

  const links = []
  const canonical = options.canonical ?? (options.path ? absoluteUrl(options.path) : null)

  if (canonical) {
    links.push({ rel: 'canonical', href: canonical })
    meta.push({ property: 'og:url', content: canonical })
  }

  if (options.amphtml) {
    links.push({ rel: 'amphtml', href: options.amphtml })
  }

  if (options.noindex) {
    meta.push({ name: 'robots', content: 'noindex, nofollow' })
  }

  const schemaEntries = [
    {
      ...SITE_ORGANIZATION_SCHEMA,
      description: SITE_DESCRIPTION,
    },
    SITE_WEBSITE_SCHEMA,
  ]
  if (options.schema) {
    schemaEntries.push(...(Array.isArray(options.schema) ? options.schema : [options.schema]))
  }

  const scripts = [
    {
      type: 'application/ld+json',
      children: JSON.stringify(schemaEntries.length === 1 ? schemaEntries[0] : schemaEntries),
    },
  ]

  return { meta, links, scripts }
}