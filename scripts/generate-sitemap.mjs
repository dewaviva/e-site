import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { getSiteRoutes } from '../src/seo/siteRoutes.ts'
import { SITE_URL } from '../src/seo/siteSeo.ts'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const outputFile = path.join(rootDir, 'public', 'sitemap.xml')
const robotsOutputFile = path.join(rootDir, 'public', 'robots.txt')
const lastmod = new Date().toISOString().slice(0, 10)
const siteRoutes = getSiteRoutes()

const urls = [
  { loc: siteRoutes.home, changefreq: 'daily', priority: '1.0', lastmod },
  ...siteRoutes.collections.map((loc) => ({
    loc,
    changefreq: 'weekly',
    priority: '0.8',
    lastmod,
  })),
  ...siteRoutes.products.map((loc) => ({
    loc,
    changefreq: 'weekly',
    priority: '0.9',
    lastmod,
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map(
    (entry) =>
      `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`
  )
  .join('\n')}\n</urlset>\n`

fs.writeFileSync(outputFile, xml, 'utf8')
fs.writeFileSync(
  robotsOutputFile,
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  'utf8'
)
console.log(`Generated sitemap with ${urls.length} URLs at ${path.relative(rootDir, outputFile)}`)
