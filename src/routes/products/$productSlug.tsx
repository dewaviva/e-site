import React, { useState } from 'react'
import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import products, { Product, ProductVariant, formatRupiah } from '../../data/products'
import { ProductGallery } from '../../components/ProductGallery'
import { ProductVariantSelector } from '../../components/ProductVariantSelector'
import { ProductCard } from '../../components/ProductCard'
import { useCartStore } from '../../store/cartStore'
import { buildSeoMeta } from '../../seo/buildSeoMeta'
import { SITE_URL, getAmpUrlForProduct } from '../../seo/siteRoutes'
import {
  Star,
  ShoppingBag,
  Heart,
  ChevronRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  Plus,
  Minus,
  MessageSquare,
  Sparkles,
} from 'lucide-react'
import { slugify } from '../../utils/slugify'

const findProductBySlug = (slug: string) => {
  return products.find(p => slugify(p.name) === slug)
}

export const Route = createFileRoute('/products/$productSlug')({
  head: ({ params }) => {
    const product = findProductBySlug(params.productSlug)

    if (!product) {
      return buildSeoMeta({
        title: 'Produk Tidak Ditemukan',
        description: 'Halaman produk tidak ditemukan.',
        path: `/products/${params.productSlug}`,
        noindex: true,
      })
    }

    const productSlug = slugify(product.name)

    return buildSeoMeta({
      title: product.name,
      description: `${product.shortDescription} Cek harga, stok, spesifikasi, dan ulasan pelanggan sebelum checkout.`,
      path: `/products/${productSlug}`,
      ogImage: product.image,
      amphtml: getAmpUrlForProduct(productSlug),
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.shortDescription,
          image: product.image,
          sku: product.id.toString(),
          brand: {
            '@type': 'Brand',
            name: 'KAIZU88',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'IDR',
            price: product.price,
            availability:
              product.stock > 0
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            url: `${SITE_URL}/products/${productSlug}`,
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Beranda',
              item: SITE_URL,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: product.category,
              item: `${SITE_URL}/collections/${slugify(product.category)}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: product.name,
              item: `${SITE_URL}/products/${productSlug}`,
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: `Apakah ${product.name} tersedia stok?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  product.stock > 0
                    ? `Ya, stok ${product.name} tersedia.`
                    : `Saat ini stok ${product.name} sedang habis.`,
              },
            },
            {
              '@type': 'Question',
              name: `Apakah ${product.name} memiliki garansi?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ya, produk ini memiliki garansi resmi sesuai kebijakan toko.',
              },
            },
          ],
        },
      ],
    })
  },
  component: ProductDetailPage,
  loader: async ({ params }) => {
    const product = findProductBySlug(params.productSlug)
    if (!product) {
      throw new Error('Produk tidak ditemukan')
    }
    return product
  },
})

function ProductDetailPage() {
  const product = Route.useLoaderData()
  const { addItem, addToast } = useCartStore()
  const navigate = useNavigate()

  // Local PDP State
  const [selectedColor, setSelectedColor] = useState<ProductVariant>(
    product.colors[0]
  )
  const [selectedOption, setSelectedOption] = useState<ProductVariant | undefined>(
    product.options?.[0]
  )
  const [quantity, setQuantity] = useState<number>(1)
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews' | 'shipping'>('desc')
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false)

  // Calculate final unit price including variant modifier
  const optionModifier = selectedOption?.priceModifier || 0
  const finalUnitPrice = product.price + optionModifier

  const handleAddToCart = () => {
    addItem(product, selectedColor, selectedOption, quantity)
  }

  const handleBuyNow = () => {
    addItem(product, selectedColor, selectedOption, quantity)
    navigate({ to: '/checkout/success' })
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    addToast(
      !isWishlisted ? 'Ditambahkan ke Favorit' : 'Dihapus dari Favorit',
      `${product.name} ${!isWishlisted ? 'telah disimpan ke wishlist Anda.' : 'dihapus dari wishlist.'}`
    )
  }

  // Related products from same category or catalog
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="space-y-12 pb-20 pt-6">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link
            to="/collections/$category"
            params={{ category: slugify(product.category) }}
            className="hover:text-amber-400 transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Main PDP Stage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Gallery Stage (lg: 6 cols) */}
          <div className="lg:col-span-6">
            <ProductGallery
              gallery={product.gallery}
              productName={product.name}
            />
          </div>

          {/* Right Column: Product Specs & Actions (lg: 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                  {product.category}
                </span>

                {product.badge && (
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-200 font-bold text-[11px] border border-slate-700">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {product.name}
              </h1>
              <p className="text-xs text-slate-400 mt-1">{product.tagline}</p>

              {/* Rating Summary */}
              <div className="flex items-center gap-3 mt-3 text-xs">
                <div className="flex items-center gap-1 font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-lg">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-slate-400">
                  Berdasarkan <strong className="text-slate-200">{product.reviewCount} ulasan</strong> pembeli
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Stok Tersedia ({product.stock} unit)
                </span>
              </div>
            </div>

            {/* Price Display */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">
                  Harga Varian Terpilih:
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                    {formatRupiah(finalUnitPrice)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-500 line-through">
                      {formatRupiah(product.originalPrice + optionModifier)}
                    </span>
                  )}
                </div>
              </div>

              {product.originalPrice && (
                <div className="text-right">
                  <span className="px-3 py-1 bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold rounded-xl block">
                    Hemat {formatRupiah(product.originalPrice - product.price)}
                  </span>
                </div>
              )}
            </div>

            {/* Short Description */}
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
              {product.shortDescription}
            </p>

            {/* Variant Selectors */}
            <ProductVariantSelector
              colors={product.colors}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
              options={product.options}
              selectedOption={selectedOption}
              onSelectOption={setSelectedOption}
            />

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-400">
                  Jumlah:
                </span>
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-xl p-1.5">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-white font-mono">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                    className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-[11px] text-slate-500">
                  Maks. {product.stock} unit per transaksi
                </span>
              </div>

              {/* Add to Cart & Buy Now Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="sm:col-span-7 py-4 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-2xl transition-all shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2.5"
                >
                  <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
                  <span>Tambah ke Keranjang</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="sm:col-span-3 py-4 px-4 bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-400 font-bold text-sm rounded-2xl transition-all hover:border-amber-400 flex items-center justify-center"
                >
                  Beli Sekarang
                </button>

                <button
                  onClick={handleToggleWishlist}
                  className={`sm:col-span-2 p-4 rounded-2xl border flex items-center justify-center transition-all ${
                    isWishlisted
                      ? 'bg-red-500/20 border-red-500 text-red-400'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                  title={isWishlisted ? 'Hapus dari Wishlist' : 'Tambah ke Wishlist'}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-400' : ''}`} />
                </button>
              </div>
            </div>

            {/* Guarantee / Shipping Mini Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300">Bebas Ongkir min. Rp 1.000.000</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">Garansi Resmi 2 Tahun</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section: Deskripsi, Spesifikasi, Ulasan, Pengiriman */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-slate-900/60 rounded-3xl border border-slate-800 overflow-hidden">
          {/* Tab Navigation Header */}
          <div className="flex items-center gap-2 border-b border-slate-800 overflow-x-auto p-3 bg-slate-950/50">
            <button
              onClick={() => setActiveTab('desc')}
              className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === 'desc'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Deskripsi Lengkap
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === 'specs'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Spesifikasi Teknis
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === 'reviews'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Ulasan Pembeli ({product.reviewCount})
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === 'shipping'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Garansi &amp; Pengiriman
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="p-6 sm:p-8">
            {activeTab === 'desc' && (
              <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p>{product.description}</p>
                </div>

                {product.features.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                      Fitur Utama Produk
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs"
                        >
                          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-2xl">
                <h3 className="text-base font-bold text-white mb-4">
                  Tabel Spesifikasi Detail
                </h3>
                <div className="divide-y divide-slate-800 border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/80 text-xs">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="grid grid-cols-12 p-3.5 hover:bg-slate-900/50 transition-colors"
                    >
                      <span className="col-span-5 font-semibold text-slate-400">
                        {key}
                      </span>
                      <span className="col-span-7 font-mono text-slate-200">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6 max-w-3xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Ulasan Pelanggan
                    </h3>
                    <p className="text-xs text-slate-400">
                      Rata-rata kepuasan {product.rating} dari 5 bintang
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {product.reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={rev.avatar}
                            alt={rev.author}
                            className="w-8 h-8 rounded-full object-cover border border-slate-700"
                          />
                          <div>
                            <h5 className="text-xs font-bold text-white">
                              {rev.author}
                            </h5>
                            <span className="text-[10px] text-slate-500">
                              {rev.date}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < rev.rating
                                  ? 'text-amber-400 fill-amber-400'
                                  : 'text-slate-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {rev.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Informasi Garansi
                  </h3>
                  <p>
                    Semua produk yang dijual di KAIZU88 dilindungi oleh garansi resmi.
                    Produk ini memiliki garansi penggantian unit baru 1-to-1 selama 2 tahun jika ditemukan cacat produksi.
                    Kerusakan akibat kesalahan pengguna (jatuh, terkena air, dll.) tidak termasuk dalam cakupan garansi.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Kebijakan Pengiriman
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Pengiriman dilakukan setiap hari kerja (Senin-Jumat).</li>
                    <li>Pesanan sebelum jam 15:00 WIB akan dikirim di hari yang sama.</li>
                    <li>Kami menawarkan bebas ongkos kirim untuk pesanan di atas Rp 1.000.000.</li>
                    <li>Resi pengiriman akan diupdate secara otomatis melalui email dan akun Anda.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              Produk Terkait Lainnya
            </h2>
            <p className="text-xs text-slate-400">
              Jelajahi produk lain yang mungkin Anda sukai.
            </p>
          </div>
          <Link
            to="/"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
          >
            Lihat Semua
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}