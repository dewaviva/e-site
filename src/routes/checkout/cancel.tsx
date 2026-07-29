import React from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { AlertCircle, ShoppingBag, ArrowLeft } from 'lucide-react'
import { buildSeoMeta } from '@/seo/buildSeoMeta'

export const Route = createFileRoute('/checkout/cancel')({
  head: () =>
    buildSeoMeta({
      title: 'Checkout Dibatalkan',
      description: 'Transaksi dibatalkan. Keranjang belanja Anda tetap aman dan bisa dilanjutkan kapan saja.',
      path: '/checkout/cancel',
      noindex: true,
    }),
  component: CheckoutCancelPage,
})

function CheckoutCancelPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6 text-slate-100">
      <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
        <AlertCircle className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Transaksi Dibatalkan
        </h1>
        <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
          Proses pembayaran Anda belum diselesaikan. Item di keranjang belanja Anda masih tersimpan dengan aman.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Kembali ke Keranjang</span>
        </Link>
      </div>
    </div>
  )
}
