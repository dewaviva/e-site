import { createFileRoute, Link } from '@tanstack/react-router'
import products, { CATEGORIES } from '../../data/products'
import { ProductCard } from '../../components/ProductCard'
import { buildSeoMeta } from '../../seo/buildSeoMeta'
import { SITE_URL } from '../../seo/siteSeo'
import { getAmpUrlForCollection } from '../../seo/siteRoutes'
import { useMemo, useState } from 'react'
import { Search, Layers } from 'lucide-react'
import { slugify } from '../../utils/slugify'

// Helper to find original category name from its slug
const findCategoryBySlug = (slug: string) => {
  return CATEGORIES.find(cat => slugify(cat) === slug)
}

export const Route = createFileRoute('/collections/$category')({
  loader: ({ params }) => {
    const categorySlug = params.category
    const categoryName = findCategoryBySlug(categorySlug)

    if (!categoryName) {
      throw new Error('Category not found') // Or handle as a 404
    }

    const filteredProducts = products.filter((p) => p.category === categoryName)
    
    return { filteredProducts, category: categoryName, categorySlug }
  },
  head: ({ params }) => {
    const categorySlug = params.category
    const categoryName = findCategoryBySlug(categorySlug) || 'Kategori'
    const path = `/collections/${categorySlug}`

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

    return buildSeoMeta({
      title: `${categoryName} Harga Termurah | Model Terbaru ${month} ${year}`,
      description: `Pilihan Produk ${categoryName} Terlengkap dan Terbaik. Cek Promo, Ada Diskon Terbaru dan Bisa COD.`,
      path,
      amphtml: getAmpUrlForCollection(categorySlug),
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: SITE_URL,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: categoryName,
              item: `${SITE_URL}${path}`,
            },
          ],
        },
      ],
    })
  },
  component: CollectionPage,
})

function CollectionPage() {
  const { filteredProducts, category } = Route.useLoaderData()
  const [searchQuery, setSearchQuery] = useState('')

  const displayedProducts = useMemo(() => {
    if (!searchQuery) return filteredProducts
    return filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [filteredProducts, searchQuery])

  return (
    <div className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Layers className="w-4 h-4" />
            <span>Katalog Kategori</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-2">
            {category}
          </h1>
          <p className="mt-4 text-base text-slate-400 max-w-2xl">
            Menampilkan semua produk dalam kategori "{category}". Gunakan
            pencarian di bawah untuk mempersempit hasil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-10">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Search within category */}
              <div>
                <label
                  htmlFor="search-input"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Cari di dalam {category}
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    placeholder="Cari produk..."
                  />
                </div>
              </div>

              {/* Other categories */}
              <div>
                <h3 className="text-sm font-medium text-slate-300 mb-3">
                  Kategori Lainnya
                </h3>
                <ul className="space-y-2">
                  {CATEGORIES.filter(cat => cat !== 'Semua').map((cat) => (
                    <li key={cat}>
                      <Link
                        to="/collections/$category"
                        params={{ category: slugify(cat) }}
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                          category === cat
                            ? 'bg-amber-500/10 text-amber-400 font-bold'
                            : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-900 rounded-2xl border border-slate-800">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-semibold text-gray-300">
                  Tidak Ada Produk Ditemukan
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Tidak ada produk yang cocok dengan pencarian "{searchQuery}" di
                  kategori ini.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}