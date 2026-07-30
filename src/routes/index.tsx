import React, { useEffect, useMemo, useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import products, { CATEGORIES } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { HomePromoModal } from '../components/HomePromoModal'
import { buildSeoMeta } from '../seo/buildSeoMeta'
import { getAmpUrlForHome } from '../seo/siteRoutes'
import { SITE_NAME, SITE_HOME_DESCRIPTION, SITE_HOME_TITLE } from '../seo/siteSeo'
import {
  Search,
  X,
  Sparkles,
  ArrowDownUp,
  RotateCcw,
  Zap,
  CheckCircle2,
  TrendingUp,
  Layers,
  Award,
} from 'lucide-react'
import { slugify } from '../utils/slugify'

export const Route = createFileRoute('/')({
  head: ({ search = {} }) => {
    const { cat } = search
    const isFiltered = !!cat

    const path = isFiltered ? `/?cat=${cat}` : '/'

    const now = new Date()
    const year = now.getFullYear()
    const monthNames = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ]
    const month = monthNames[now.getMonth()]

    const discountPercentages = ['25%', '35%', '50%']
    const currentDiscount = discountPercentages[now.getMonth() % 3]

    const homePageTitle = `${SITE_NAME} ⚡️ Game & Aksesori Murah Promo ${month} ${year} Diskon ${currentDiscount}`

    const homePageDescription = `Serbu Diskon spesial ${currentDiscount} dan Gratis Ongkir tanpa syarat minimum order. Checkout sekarang, waktu terbatas!`

    const title = isFiltered
      ? `Kategori ${cat} - ${SITE_HOME_TITLE}`
      : homePageTitle
    const description = isFiltered
      ? `Pilihan Produk ${cat} Terlengkap dan Terbaik. Cek Promo, Ada Diskon Terbaru dan Bisa COD.`
      : homePageDescription

    return buildSeoMeta({
      title,
      description,
      path,
      amphtml: isFiltered ? undefined : getAmpUrlForHome(),
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Apa saja yang dijual di KAIZU88 STORE?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'KAIZU88 STORE menjual perlengkapan teknologi, audio, smartwatch, aksesori desk, tas travel, dan smart home.',
              },
            },
            {
              '@type': 'Question',
              name: 'Apakah produk di KAIZU88 STORE bergaransi?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ya, produk di KAIZU88 STORE dilengkapi garansi resmi sesuai kategori produk yang dijual.',
              },
            },
            {
              '@type': 'Question',
              name: 'Apakah situs ini ramah mobile?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ya, tampilan dirancang responsif agar nyaman di perangkat mobile maupun desktop.',
              },
            },
          ],
        },
      ],
    })
  },
  component: ProductsIndex,
})

function ProductsIndex() {
  const { q: initialSearchQuery } = Route.useSearch()

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery ?? '')
  const [sortBy, setSortBy] = useState('featured')
  const [priceMax, setPriceMax] = useState<number>(5000000)
  const [isPromoOpen, setIsPromoOpen] = useState(false)



  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const storageKey = 'kinetix-home-promo-seen'

    if (window.localStorage.getItem(storageKey) === 'true') {
      return
    }

    const timer = window.setTimeout(() => {
      setIsPromoOpen(true)
    }, 250)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isPromoOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPromoOpen(false)
        window.localStorage.setItem('kinetix-home-promo-seen', 'true')
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isPromoOpen])

  const closePromo = () => {
    setIsPromoOpen(false)
    window.localStorage.setItem('kinetix-home-promo-seen', 'true')
  }

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())

      // Price filter
      const matchesPrice = product.price <= priceMax

      return matchesSearch && matchesPrice
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return a.id - b.id // featured / default
    })
  }, [searchQuery, sortBy, priceMax])

  const hasActiveFilters =
    searchQuery !== '' ||
    priceMax < 5000000

  const handleResetFilters = () => {
    setSearchQuery('')
    setSortBy('featured')
    setPriceMax(5000000)
  }

  return (
    <div className="space-y-16 pb-20">
      <HomePromoModal open={isPromoOpen} onClose={closePromo} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pt-8 pb-16 border-b border-slate-800/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Koleksi Eksklusif Tahun 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Game Terbaru &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Aksesoris Terbaik
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Akurasi presisi tinggi dengan estetika masa kini. Dirancang khusus untuk kenyamanan bermain, kualitas audio jernih, gambar tajam, fps tinggi.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#katalog"
                className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Jelajahi Produk</span>
                <Zap className="w-4 h-4 fill-slate-950" />
              </a>

            </div>
          </div>

          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-12 mt-12 border-t border-slate-900">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs font-medium text-slate-300">
                Garansi Resmi 2 Tahun
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs font-medium text-slate-300">
                Pengiriman Instant &amp; Bebas Ongkir
              </span>
            </div>
            <div className="flex items-center gap-3 col-span-2 md:col-span-1">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs font-medium text-slate-300">
                Layanan Purna Jual Respon Cepat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Search/Filter Section */}
      <section id="katalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
              <Layers className="w-4 h-4" />
              <span>Katalog Terbaru</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Temukan Setup Impian Anda
            </h2>
          </div>

          <div className="text-xs text-slate-400">
            Menampilkan <strong className="text-white font-bold">{filteredProducts.length}</strong> dari {products.length} produk
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 bg-slate-900/60 p-5 rounded-3xl border border-slate-800 backdrop-blur-md">
          {/* Row 1: Category Filter Tabs */}
          <div id="kategori" className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((category) => {
              if (category === 'Semua') {
                return (
                  <button
                    key={category}
                    className="px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                  >
                    {category}
                  </button>
                )
              }
              return (
                <Link
                  key={category}
                  to="/collections/$category"
                  params={{ category: slugify(category) }}
                  className="px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 bg-slate-950/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white"
                >
                  {category}
                </Link>
              )
            })}
          </div>

          {/* Row 2: Search Input & Sort Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2">
            {/* Search Bar Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berdasarkan nama produk, kata kunci, atau fitur..."
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-10 pr-10 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-3 relative">
              <ArrowDownUp className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500 appearance-none cursor-pointer"
              >
                <option value="featured">Urutkan: Unggulan &amp; Rekomendasi</option>
                <option value="price-asc">Urutkan: Harga Terendah</option>
                <option value="price-desc">Urutkan: Harga Tertinggi</option>
                <option value="rating">Urutkan: Rating Tertinggi</option>
              </select>
            </div>

            {/* Price Max Slider Filter */}
            <div className="md:col-span-3 flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-2xl px-4 py-2">
              <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap">
                Maks: {(priceMax / 1000000).toFixed(1)}Jt
              </span>
              <input
                type="range"
                min={800000}
                max={5000000}
                step={200000}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Active Filter Tags Bar */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
              <span className="text-[11px] font-semibold text-slate-400">Filter Aktif:</span>



              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                  <span>Cari: "{searchQuery}"</span>
                  <button onClick={() => setSearchQuery('')}>
                    <X className="w-3 h-3 hover:text-white" />
                  </button>
                </span>
              )}

              {priceMax < 5000000 && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                  <span>Maks Harga: Rp {(priceMax / 1000000).toFixed(1)}Jt</span>
                  <button onClick={() => setPriceMax(5000000)}>
                    <X className="w-3 h-3 hover:text-white" />
                  </button>
                </span>
              )}

              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white ml-auto underline"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Product Grid Display */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-slate-900/40 rounded-3xl border border-slate-800/80 p-8">
            <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-500 mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Tidak Ada Produk yang Cocok
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
              Cobalah mengubah kata kunci pencarian atau mengatur ulang filter kategori dan kisaran harga Anda.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20"
            >
              Tampilkan Semua Produk
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Value Propositions / Why Choose Kinetix Section */}
      <section id="keunggulan" className="bg-slate-900/40 border-y border-slate-800/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
              <Award className="w-4 h-4" />
              <span>Standar Kualitas</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Mengapa Memilih Produk KAIZU88 STORE?
            </h2>
            <p className="text-xs text-slate-400">
              Komitmen kami terhadap material premium, pengerjaan presisi, dan pengalaman pengguna tanpa kompromi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950/80 p-6 rounded-3xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Desain Ergonomis &amp; Presisi</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Setiap produk dirancang melalui riset ergonomi mendalam untuk memastikan kenyamanan bermain dalam jangka panjang.
              </p>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-3xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Material Kelas Kedirgantaraan</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Menggunakan aluminium CNC anodized, titanium, dan kain bersertifikasi tinggi yang tahan banting serta estetik.
              </p>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-3xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Dukungan Garansi 1-to-1 Replace</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Jaminan ganti unit baru langsung jika terjadi kerusakan manufaktur selama masa garansi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}