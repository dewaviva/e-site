import React, { useEffect, useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useCartStore } from '@/store/cartStore'
import { formatRupiah } from '@/data/products'
import { buildSeoMeta } from '@/seo/buildSeoMeta'
import {
  CheckCircle2,
  Package,
  Truck,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Calendar,
} from 'lucide-react'

export const Route = createFileRoute('/checkout/success')({
  head: () =>
    buildSeoMeta({
      title: 'Pesanan Berhasil Dibuat',
      description: 'Konfirmasi pesanan, ringkasan item, dan estimasi pengiriman Anda di KAIZU88.',
      path: '/checkout/success',
      noindex: true,
    }),
  component: CheckoutSuccessPage,
})

function CheckoutSuccessPage() {
  const { items, clearCart } = useCartStore()
  const [orderId, setOrderId] = useState('')
  const [purchasedItems, setPurchasedItems] = useState(items)

  useEffect(() => {
    // Generate random realistic Indonesian order ID
    const randomNum = Math.floor(100000 + Math.random() * 900000)
    setOrderId(`KNX-${randomNum}`)

    if (items.length > 0) {
      setPurchasedItems(items)
      clearCart()
    }
  }, [])

  const subtotal = purchasedItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  )

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-100">
      {/* Top Banner Success Icon */}
      <div className="text-center space-y-4 bg-slate-900/60 p-8 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-md">
        <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
          <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
        </div>

        <div>
          <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold rounded-full">
            No. Pesanan: {orderId || 'KNX-829104'}
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-3">
            Pembayaran Berhasil!
          </h1>
          <p className="text-xs text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
            Terima kasih telah berbelanja di KINETIX Equipment Studio. Pesanan Anda sedang disiapkan oleh tim logistik kami.
          </p>
        </div>
      </div>

      {/* Order Summary Breakdown */}
      {purchasedItems.length > 0 && (
        <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
            <Package className="w-4 h-4 text-amber-400" />
            Rincian Produk Dipesan
          </h3>

          <div className="divide-y divide-slate-800">
            {purchasedItems.map((item) => (
              <div
                key={item.cartItemId}
                className="py-3 flex items-center justify-between gap-4 text-xs"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-800 shrink-0 bg-slate-950"
                  />
                  <div className="min-w-0">
                    <h5 className="font-bold text-white truncate">
                      {item.product.name}
                    </h5>
                    <span className="text-slate-400 text-[11px]">
                      Warna: {item.selectedColor.name} {item.selectedOption ? `(${item.selectedOption.value})` : ''} x{item.quantity}
                    </span>
                  </div>
                </div>

                <span className="font-mono font-bold text-amber-400 shrink-0">
                  {formatRupiah(item.unitPrice * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-sm font-bold text-white">
            <span>Total Pembayaran</span>
            <span className="text-lg text-amber-400 font-mono">
              {formatRupiah(subtotal)}
            </span>
          </div>
        </div>
      )}

      {/* Shipping & Delivery Timeline Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <Truck className="w-4 h-4" />
            <span>Estimasi Pengiriman</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Pesanan dijadwalkan tiba dalam 1 - 3 hari kerja melalui ekspedisi kurir instant / reguler.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Jaminan Kinetix</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Bukti konfirmasi transaksi &amp; faktur resmi garansi telah dikirimkan ke email Anda.
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-2xl transition-all shadow-xl shadow-amber-500/20"
        >
          <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
          <span>Kembali ke Katalog Produk</span>
        </Link>
      </div>
    </div>
  )
}
