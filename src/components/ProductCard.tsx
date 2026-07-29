import React from 'react'
import { Link } from '@tanstack/react-router'
import { Product, formatRupiah } from '@/data/products'
import { useCartStore } from '@/store/cartStore'
import { Star, ShoppingBag, Eye, ArrowUpRight } from 'lucide-react'
import { slugify } from '@/utils/slugify'

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore()

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Add default first color and first option if available
    addItem(product, product.colors[0], product.options?.[0], 1)
  }

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group relative bg-slate-900/80 rounded-3xl border border-slate-800/90 overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1">
      <div>
        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          {product.badge ? (
            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md">
              {product.badge}
            </span>
          ) : (
            <span />
          )}

          {discountPercent > 0 && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-red-500 text-white shadow-md">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Product Image Container */}
        <Link
          to="/products/$productSlug"
          params={{ productSlug: slugify(product.name) }}
          className="block relative aspect-[4/3] sm:aspect-square bg-slate-950 overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors" />

          {/* Quick Hover Overlay Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-amber-500/50 text-amber-400 text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-4 h-4" />
              Lihat Detail
            </span>
          </div>
        </Link>

        {/* Card Content */}
        <div className="p-5 space-y-3">
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-md">
              {product.category}
            </span>

            <div className="flex items-center gap-1 font-semibold text-slate-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-500 text-[11px]">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          {/* Title */}
          <Link
            to="/products/$productSlug"
            params={{ productSlug: slugify(product.name) }}
            className="block"
          >
            <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Color Swatches Preview */}
          <div className="flex items-center gap-1.5 pt-1">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
              Warna:
            </span>
            <div className="flex items-center gap-1">
              {product.colors.map((color) => (
                <span
                  key={color.id}
                  title={color.name}
                  className="w-3 h-3 rounded-full border border-slate-700 shadow-sm"
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Price & Add Button */}
      <div className="p-5 pt-0 mt-auto border-t border-slate-800/60 flex items-center justify-between gap-2">
        <div>
          {product.originalPrice && (
            <span className="block text-[11px] text-slate-500 line-through">
              {formatRupiah(product.originalPrice)}
            </span>
          )}
          <span className="text-base font-extrabold text-white font-mono">
            {formatRupiah(product.price)}
          </span>
        </div>

        <button
          onClick={handleQuickAdd}
          className="p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 flex items-center gap-1.5"
          title="Tambah Cepat ke Keranjang"
        >
          <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
          <span className="text-xs hidden sm:inline">Tambah</span>
        </button>
      </div>
    </div>
  )
}