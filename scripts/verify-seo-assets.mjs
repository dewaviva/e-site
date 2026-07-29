import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { SITE_URL } from '../src/seo/siteSeo.ts'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(fullPath)
    return fullPath.match(/\.(html|xml|txt)$/) ? [fullPath] : []
  })
}

const files = walk(publicDir)
const offenders = []

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  if (content.includes('kaizu88.com')) {
    offenders.push(path.relative(rootDir, file))
  }
  if (file.endsWith('robots.txt') && !content.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
    offenders.push(path.relative(rootDir, file))
  }
}

if (offenders.length > 0) {
  console.error('SEO asset verification failed.')
  for (const file of offenders) {
    console.error(`- ${file}`)
  }
  process.exit(1)
}

console.log(`Verified SEO assets against ${SITE_URL}.`)
