import React from 'react'
import { Link } from '@tanstack/react-router'
import { SITE_NAME } from '@/seo/siteSeo'
import { CATEGORIES } from '@/data/products'
import { slugify } from '@/utils/slugify'
import {
  Zap,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Lock,
  CreditCard,
} from 'lucide-react'

export const Footer: React.FC = () => {
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
                alt="Logo KAIZU88"
                className="h-10 w-auto object-contain block"
              />
            </div>
          </Link>

          <p className="text-slate-400 leading-relaxed max-w-sm">
            {SITE_NAME} adalah surga bagi para gamer di Indonesia. Kami adalah platform online terkemuka yang menyediakan berbagai macam game terbaru, konsol, aksesoris gaming, dan merchandise eksklusif.
          </p>

          <div className="flex items-center gap-2 text-slate-300 font-semibold pt-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Sistem Pembayaran Terenkripsi 256-Bit SSL</span>
          </div>

          <div className="flex items-center gap-2 text-slate-300 font-semibold pt-2">
            <CreditCard className="w-4 h-4 text-emerald-400" />
            <span>Menerima E-wallet, QRIS, Transfer Bank & Paylater</span>
          </div>
        </div>

        {/* Col 2: Kategori Quick Links */}
        <div className="md:col-span-2 space-y-3">
          <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Kategori
          </h5>
          <ul className="space-y-2 text-slate-400">
            {CATEGORIES.filter(cat => cat !== 'Semua').map(category => (
              <li key={category}>
                <Link
                  to="/collections/$category"
                  params={{ category: slugify(category) }}
                  className="hover:text-amber-400 transition-colors"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Layanan & Informasi */}
        <div className="md:col-span-2 space-y-3">
          <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Bantuan
          </h5>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link to="/lacak-pesanan" className="hover:text-amber-400 transition-colors">
                Lacak Pesanan
              </Link>
            </li>
            <li>
              <Link to="/ketentuan-garansi" className="hover:text-amber-400 transition-colors">
                Ketentuan Garansi
              </Link>
            </li>
            <li>
              <Link to="/kebijakan-privasi" className="hover:text-amber-400 transition-colors">
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link to="/syarat-dan-ketentuan" className="hover:text-amber-400 transition-colors">
                Syarat & Ketentuan
              </Link>
            </li>
            <li>
              <Link to="/hubungi-kami" className="hover:text-amber-400 transition-colors">
                Hubungi Kami
              </Link>
            </li>
            <li>
              <Link to="/tentang-kami" className="hover:text-amber-400 transition-colors">
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Lokasi Toko */}
        <div className="md:col-span-4 space-y-3">
          <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Lokasi Toko
          </h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.860360398955!2d110.8556973153492!3d-6.76597069510841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70dbdcfd92f03f%3A0x254c621285fb256e!2sKAIZU88!5e0!3m2!1sen!2sid!4v1672563456789!5m2!1sen!2sid"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 KAIZU88 STORE. Hak Cipta Dilindungi Undang-Undang.</p>
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