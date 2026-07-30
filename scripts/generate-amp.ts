import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import products, { Category } from '../src/data/products'
import {
  SITE_DESCRIPTION,
  SITE_HOME_DESCRIPTION,
  SITE_HOME_TITLE,
  SITE_NAME,
  SITE_URL,
} from '../src/seo/siteSeo'
import {
  getAmpPathForCollection,
  getAmpPathForHome,
  getAmpPathForProduct,
  SITE_COLLECTIONS,
} from '../src/seo/siteRoutes'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const outputDir = path.join(rootDir, 'public')

const currentYear = new Date().getFullYear()

const ampHero = {
  logo: '/logo.png',
  badge: 'SITUS TERBESAR NO.1 DI INDONESIA',
  title: `KAIZU88 STORE: Situs Online Game Terpercaya ${currentYear}`,
  subtitle: 'Slot Gacor | Slot Online | Situs Slot | Bandar Slot',
  primaryAction: {
    label: 'DAFTAR KAIZU88',
    href: 'https://globalcuturl.com/kaizu88-daftar',
  },
  secondaryAction: {
    label: 'LOGIN KAIZU88',
    href: 'https://globalcuturl.com/kaizu88',
  },
  tertiaryAction: {
    label: 'HUBUNGI LIVE CHAT',
    href: 'https://globalcuturl.com/kz88-live-chat',
  },
  image: '/amp.webp',
  imageAlt: 'PROMO KAIZU88 STORE',
}

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true })
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function money(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${SITE_NAME} ⚡️ ${title}`
}

function formatDescription(description: string) {
  return description
}

function ampDocument({
  canonical,
  title,
  description,
  body,
}: {
  canonical: string
  title: string
  description: string
  body: string
}) {
  return `<!doctype html>
<html amp lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
  <link rel="canonical" href="${canonical}">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
  <noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  <style amp-custom>
    :root{--bg:#050816;--panel:#0f172a;--panel-2:#111827;--line:#1f2937;--text:#f8fafc;--muted:#94a3b8;--gold:#f5c95c;--gold-2:#d6a13c;--gold-3:#8b5e16}
    body{margin:0;font-family:Arial,Helvetica,sans-serif;background:linear-gradient(180deg,#050816 0%,#02040d 100%);color:var(--text)}
    a{color:inherit;text-decoration:none}
    .wrap{max-width:720px;margin:0 auto;padding:16px}
    .hero{border:1px solid rgba(245,201,92,.2);border-radius:22px;background:rgba(9,7,2,.95);padding:14px;box-shadow:0 24px 80px rgba(0,0,0,.45)}
    .top-brand{display:block;width:150px;max-width:100%;margin:0 auto 14px auto}
    .cta-row{display:grid;grid-template-columns:1fr;gap:10px;margin-top:16px}
    .cta{display:block;text-align:center;padding:14px 16px;border-radius:20px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;border:1px solid rgba(245,201,92,.35)}
    .cta.primary{background:linear-gradient(180deg,#f5cc64 0%,#d6a93c 100%);color:#201404}
    .cta.secondary{border:1px solid rgba(245,201,92,.35);background:#120d04;color:#ffe29a}
    .amp-hero-image{display:block;width:100%;border-radius:18px;border:1px solid rgba(245,201,92,.18);overflow:hidden;margin-top:16px}
    .section{margin-top:18px;border:1px solid var(--line);border-radius:20px;background:rgba(15,23,42,.72);overflow:hidden}
    .section-hd{padding:14px 16px;background:linear-gradient(90deg,#a8741a 0%,#e5b94d 52%,#a8741a 100%);color:#140d03;font-weight:900;letter-spacing:.06em;text-transform:uppercase;font-size:12px}
    .section-bd{padding:16px}
    .grid{display:grid;grid-template-columns:1fr;gap:12px}
    .card{border:1px solid var(--line);border-radius:18px;background:rgba(2,6,23,.45);overflow:hidden}
    .card-bd{padding:14px}
    .kicker{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);font-weight:800}
    .h2{font-size:20px;line-height:1.2;margin:8px 0 10px;font-weight:900;color:#fff}
    .p{margin:0;color:#dbeafe;line-height:1.75;font-size:14px}
    .meta{color:var(--muted);font-size:12px}
    .list{margin:0;padding-left:18px;color:#dbeafe;line-height:1.8}
    .product{display:grid;grid-template-columns:92px 1fr;gap:12px;align-items:center}
    .product amp-img{border-radius:14px;overflow:hidden}
    .price{margin-top:8px;font-weight:900;color:var(--gold)}
    .footer{padding:18px 0 8px;color:#94a3b8;font-size:12px;text-align:center}
    .breadcrumb{font-size:12px;color:#94a3b8;margin:0 0 10px}
    .breadcrumb a{color:#f8fafc}
    .spacer{height:8px}
  </style>
</head>
<body>
  <div class="wrap">
    ${body}
    <div class="footer">© ${currentYear} ${escapeHtml(SITE_NAME)} · All Rights Reserved</div>
  </div>
</body>
</html>`
}

function promoHero() {
  return `
  <div class="hero">
    <img class="top-brand" src="${ampHero.logo}" width="300" height="105" alt="Logo ${escapeHtml(SITE_NAME)}">
    <div class="cta-row">
      <a class="cta primary" href="${escapeHtml(ampHero.primaryAction.href)}">${escapeHtml(ampHero.primaryAction.label)}</a>
      <a class="cta secondary" href="${escapeHtml(ampHero.secondaryAction.href)}">${escapeHtml(ampHero.secondaryAction.label)}</a>
    </div>
    <amp-img class="amp-hero-image" src="${ampHero.image}" width="1080" height="1350" layout="responsive" alt="${escapeHtml(ampHero.imageAlt)}"></amp-img>
    <div class="cta-row" style="margin-top:16px">
      <a class="cta secondary" href="${escapeHtml(ampHero.tertiaryAction.href)}">${escapeHtml(ampHero.tertiaryAction.label)}</a>
    </div>
  </div>`
}

function writeAmpFile(filePath: string, html: string) {
  ensureDir(path.dirname(filePath))
  fs.writeFileSync(filePath, html, 'utf8')
}

function buildHomeAmp() {
  const featured = products.slice(0, 4)
  const sections = featured
    .map(
      (product) => `
      <div class="card">
        <div class="card-bd product">
          <amp-img src="${product.image}" width="180" height="180" layout="responsive" alt="${escapeHtml(product.name)}"></amp-img>
          <div>
            <div class="kicker">${escapeHtml(product.category)}</div>
            <div class="h2">${escapeHtml(product.name)}</div>
            <p class="p">${escapeHtml(product.shortDescription)}</p>
            <div class="price">${escapeHtml(money(product.price))}</div>
            <div class="spacer"></div>
            <a class="cta secondary" href="${SITE_URL}/products/${product.id}">Lihat Produk</a>
          </div>
        </div>
      </div>`
    )
    .join('')

  const body = `
    ${promoHero()}
    <div class="section">
      <div class="section-hd">KAIZU88 STORE</div>
      <div class="section-bd">
        <div class="spacer"></div>
        <div class="grid">${sections}</div>
      </div>
    </div>
  `

  return ampDocument({
    canonical: SITE_URL,
    title: formatTitle(SITE_HOME_TITLE),
    description: formatDescription(SITE_HOME_DESCRIPTION),
    body,
  })
}

function buildProductAmp(product: (typeof products)[0]) {
  if (!product) return ''
  const features = product.features.slice(0, 5).map((feature) => `<li>${escapeHtml(feature)}</li>`).join('')
  const specs = Object.entries(product.specs)
    .slice(0, 6)
    .map(([key, value]) => `<li><strong>${escapeHtml(key)}:</strong> ${escapeHtml(value)}</li>`)
    .join('')

  const reviews = product.reviews.slice(0, 2).map((review) => `<li><strong>${escapeHtml(review.author)}:</strong> ${escapeHtml(review.comment)}</li>`).join('')

  const body = `
    ${promoHero()}
    <div class="section">
      <div class="section-hd">Konten Utama Produk</div>
      <div class="section-bd">
        <div class="breadcrumb">
          <a href="${SITE_URL}/">Beranda</a> / 
          <a href="${SITE_URL}/?cat=${encodeURIComponent(product.category)}">${escapeHtml(product.category)}</a> / 
          ${escapeHtml(product.name)}
        </div>
        <div class="card">
          <div class="card-bd">
            <amp-img src="${product.image}" width="1200" height="900" layout="responsive" alt="${escapeHtml(product.name)}"></amp-img>
            <div class="kicker" style="margin-top:12px">${escapeHtml(product.category)}</div>
            <div class="h2">${escapeHtml(product.name)}</div>
            <div class="meta">${escapeHtml(product.tagline)}</div>
            <div class="price">${escapeHtml(money(product.price))}</div>
            <p class="p" style="margin-top:10px">${escapeHtml(product.shortDescription)}</p>
          </div>
        </div>
        <div class="spacer"></div>
        <div class="card"><div class="card-bd"><div class="kicker">Fitur Utama</div><ul class="list">${features}</ul></div></div>
        <div class="spacer"></div>
        <div class="card"><div class="card-bd"><div class="kicker">Spesifikasi Ringkas</div><ul class="list">${specs}</ul></div></div>
        <div class="spacer"></div>
        <div class="card"><div class="card-bd"><div class="kicker">Ulasan Singkat</div><ul class="list">${reviews}</ul></div></div>
        <div class="spacer"></div>
        <a class="cta primary" href="${SITE_URL}/products/${product.id}">Buka Halaman Asli</a>
      </div>
    </div>
  `

  return ampDocument({
    canonical: `${SITE_URL}/products/${product.id}`,
    title: formatTitle(product.name),
    description: `${product.shortDescription} Cek harga, stok, spesifikasi, dan ulasan pelanggan sebelum checkout.`,
    body,
  })
}

import { slugify } from '../src/utils/slugify'

function buildCollectionAmp(categorySlug: string) {
  const categoryName = SITE_COLLECTIONS.find(c => slugify(c.id) === categorySlug)?.id
  if (!categoryName) return ''

  const collectionProducts = products.filter(p => p.category === categoryName)
  const sections = collectionProducts
    .map(
      (product) => `
      <div class="card">
        <div class="card-bd product">
          <amp-img src="${product.image}" width="180" height="180" layout="responsive" alt="${escapeHtml(product.name)}"></amp-img>
          <div>
            <div class="kicker">${escapeHtml(product.category)}</div>
            <div class="h2">${escapeHtml(product.name)}</div>
            <p class="p">${escapeHtml(product.shortDescription)}</p>
            <div class="price">${escapeHtml(money(product.price))}</div>
            <div class="spacer"></div>
            <a class="cta secondary" href="${SITE_URL}/products/${product.id}">Lihat Produk</a>
          </div>
        </div>
      </div>`
    )
    .join('')

  const body = `
    ${promoHero()}
    <div class="section">
      <div class="section-hd">Kategori: ${escapeHtml(categoryName)}</div>
      <div class="section-bd">
        <div class="breadcrumb">
          <a href="${SITE_URL}/">Beranda</a> / 
          ${escapeHtml(categoryName)}
        </div>
        <div class="grid">${sections}</div>
        <div class="spacer"></div>
        <a class="cta primary" href="${SITE_URL}/collections/${categorySlug}">Buka Halaman Asli</a>
      </div>
    </div>
  `

  const now = new Date()
  const year = now.getFullYear()
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]
  const month = monthNames[now.getMonth()]
  const newTitle = `${categoryName} Harga Termurah | Model Terbaru ${month} ${year}`

  return ampDocument({
    canonical: `${SITE_URL}/collections/${categorySlug}`,
    title: formatTitle(newTitle),
    description: `Pilihan Produk ${categoryName} Terlengkap dan Terbaik. Cek Promo, Ada Diskon Terbaru dan Bisa COD.`,
    body,
  })
}

const ampRoot = outputDir
writeAmpFile(
  path.join(ampRoot, `${getAmpPathForHome().slice(1)}`, 'index.html'),
  buildHomeAmp()
)

for (const product of products) {
  const productSlug = slugify(product.name)
  const ampPath = getAmpPathForProduct(productSlug).slice(1)
  const ampContent = buildProductAmp(product)
  if (ampContent) {
    writeAmpFile(path.join(ampRoot, ampPath, 'index.html'), ampContent)
  }
}

for (const collection of SITE_COLLECTIONS) {
  const categorySlug = slugify(collection.id)
  const ampPath = getAmpPathForCollection(categorySlug).slice(1)
  const ampContent = buildCollectionAmp(categorySlug)
  if (ampContent) {
    writeAmpFile(path.join(ampRoot, ampPath, 'index.html'), ampContent)
  }
}

console.log(
  `Generated AMP pages at public/amp for home, ${products.length} products, and ${SITE_COLLECTIONS.length} collections.`
)