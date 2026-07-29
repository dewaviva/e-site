import React, { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useCartStore } from '@/store/cartStore'
import {
  Zap,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Send,
  CreditCard,
  Lock,
} from 'lucide-react'

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const { addToast } = useCartStore()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    addToast(
      'Berhasil Berlangganan!',
      'Terima kasih telah bergabung. Kode promo eksklusif telah dikirimkan ke email Anda.'
    )
    setEmail('')
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Value Proposition Highlights Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">100% Produk Original</h5>
              <p className="text-slate-500 mt-0.5">Garansi resmi hingga 2 tahun</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">Pengiriman Cepat</h5>
              <p className="text-slate-500 mt-0.5">Bebas ongkir min. Rp 1 Juta</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">7 Hari Pengembalian</h5>
              <p className="text-slate-500 mt-0.5">Jaminan tukar unit baru</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">Dukungan CS 24/7</h5>
              <p className="text-slate-500 mt-0.5">Respon ramah & solutif</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Col 1: Branding & Bio */}
        <div className="md:col-span-4 space-y-4">
          <Link to="/" className="inline-flex items-center">
            <div className="h-10 w-auto overflow-hidden rounded-none border-0 bg-transparent shadow-none">
              <img
                src="/logo.png"
                alt="Logo KINETIX"
                className="h-10 w-auto object-contain block"
              />
            </div>
          </Link>

          <p className="text-slate-400 leading-relaxed max-w-sm">
            KAIZU88 adalah destinasi belanja perlengkapan teknologi, audio audiophile, aksesori meja kerja, dan peralatan gaya hidup modern dengan kurasi desain tertinggi.
          </p>

          <div className="flex items-center gap-2 text-slate-300 font-semibold pt-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Sistem Pembayaran Terenkripsi 256-Bit SSL</span>
          </div>
        </div>

        {/* Col 2: Kategori Quick Links */}
        <div className="md:col-span-2 space-y-3">
          <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Kategori
          </h5>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors">
                Audio & Sound
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors">
                Smart Wearables
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors">
                Aksesori Desk
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors">
                Tas & Travel
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors">
                Smart Home
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Layanan & Informasi */}
        <div className="md:col-span-2 space-y-3">
          <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Bantuan
          </h5>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Lacak Pesanan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Ketentuan Garansi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Syarat & Ketentuan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter Box */}
        <div className="md:col-span-4 space-y-3">
          <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Buletin Eksklusif
          </h5>
          <p className="text-slate-400">
            Dapatkan voucher diskon Rp 100.000 untuk transaksi pertama dan info perilisan produk terbaru.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan alamat email Anda..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-4 pr-10 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-2 pt-2 text-slate-500">
            <CreditCard className="w-4 h-4 text-slate-400" />
            <span>Menerima E-wallet, QRIS, Transfer Bank & Paylater</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 KAIZU88 Equipment Studio. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              YouTube
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              TikTok
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}