import React, { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useCartStore } from '@/store/cartStore'
import { formatRupiah } from '@/data/products'
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  Trash2,
  Tag,
  ArrowRight,
  ShieldCheck,
  Truck,
} from 'lucide-react'

// Fungsi untuk generate WhatsApp URL dari semua item di cart
const getCartWhatsAppUrl = (items: any[], total: number) => {
  const phoneNumber = '6281234567890' // Ganti dengan nomor WhatsApp kamu
  let itemsList = items.map(item => 
    `• ${item.product.name} (${item.selectedColor.name}) x${item.quantity} - ${formatRupiah(item.unitPrice * item.quantity)}`
  ).join('\n')
  
  const message = encodeURIComponent(
    `Halo, saya ingin memesan produk berikut:\n\n` +
    `${itemsList}\n\n` +
    `💰 Total: ${formatRupiah(total)}\n\n` +
    `Mohon informasikan langkah selanjutnya untuk pemesanan. Terima kasih!`
  )
  
  return `https://wa.me/${phoneNumber}?text=${message}`
}

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    discountCode,
    discountPercentage,
    applyDiscountCode,
  } = useCartStore()

  const [couponInput, setCouponInput] = useState('')

  if (!isOpen) return null

  const subtotal = items.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  )
  const discountAmount = Math.round((subtotal * discountPercentage) / 100)
  const isFreeShipping = subtotal >= 1000000 || items.length === 0
  const shippingFee = isFreeShipping ? 0 : 35000
  const total = Math.max(0, subtotal - discountAmount + (items.length > 0 ? shippingFee : 0))

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    if (!couponInput) return
    applyDiscountCode(couponInput)
  }

  const handleCheckout = () => {
    closeCart()
    const url = getCartWhatsAppUrl(items, total)
    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 text-slate-100 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Keranjang Belanja
                </h3>
                <p className="text-xs text-slate-400">
                  {items.length === 0
                    ? 'Keranjang masih kosong'
                    : `${items.reduce((acc, item) => acc + item.quantity, 0)} item dipilih`}
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-500 mb-4">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h4 className="text-base font-semibold text-slate-200 mb-1">
                  Belum Ada Produk
                </h4>
                <p className="text-xs text-slate-400 max-w-xs mb-6 leading-relaxed">
                  Jelajahi katalog produk kami dan tambahkan perlengkapan impian Anda ke keranjang.
                </p>
                <button
                  onClick={closeCart}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm rounded-xl transition-all shadow-lg shadow-amber-500/20"
                >
                  Mulai Belanja
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.cartItemId}
                  className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex gap-3.5 items-center hover:border-slate-600 transition-all"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-xl object-cover border border-slate-700 shrink-0 bg-slate-900"
                  />

                  <div className="flex-1 min-w-0">
                    <Link
                      to="/products/$productId"
                      params={{ productId: item.product.id.toString() }}
                      onClick={closeCart}
                      className="text-sm font-semibold text-white hover:text-amber-400 transition-colors line-clamp-1"
                    >
                      {item.product.name}
                    </Link>

                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900 text-[11px] font-medium text-slate-300 border border-slate-700">
                        <span
                          className="w-2 h-2 rounded-full inline-block"
                          style={{ backgroundColor: item.selectedColor.value }}
                        />
                        {item.selectedColor.name}
                      </span>
                      {item.selectedOption && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-900 text-[11px] font-medium text-amber-300 border border-slate-700">
                          {item.selectedOption.value}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="text-sm font-bold text-amber-400">
                        {formatRupiah(item.unitPrice)}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-slate-900 rounded-lg border border-slate-700 p-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity - 1)
                          }
                          className="w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white px-1 min-w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity + 1)
                          }
                          className="w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.cartItemId)}
                    className="p-2 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors self-start"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-800 bg-slate-950/80 space-y-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Kode kupon (ex: KINETIX10)"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-amber-400 rounded-xl transition-colors"
                >
                  Terapkan
                </button>
              </form>

              {/* Price Calculation */}
              <div className="space-y-2 text-xs border-t border-slate-800/80 pt-3">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-200">
                    {formatRupiah(subtotal)}
                  </span>
                </div>

                {discountPercentage > 0 && (
                  <div className="flex justify-between text-amber-400">
                    <span>Diskon ({discountPercentage}% - {discountCode})</span>
                    <span className="font-semibold">
                      -{formatRupiah(discountAmount)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-slate-400">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-slate-500" />
                    Ongkos Kirim
                  </span>
                  <span className="font-semibold text-slate-200">
                    {isFreeShipping ? (
                      <span className="text-emerald-400 font-bold">GRATIS</span>
                    ) : (
                      formatRupiah(shippingFee)
                    )}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm font-bold text-white pt-2 border-t border-slate-800">
                  <span>Total Pembayaran</span>
                  <span className="text-lg text-amber-400">
                    {formatRupiah(total)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garansi Resmi 100% Original & Transaksi Aman via WhatsApp</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold text-sm rounded-xl transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-2"
              >
                <span>Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}