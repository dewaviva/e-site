import React, { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useCartStore } from '@/store/cartStore'
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  Sparkles,
  PhoneCall,
  ChevronRight,
} from 'lucide-react'

export const Header: React.FC = () => {
  const { items, toggleCart } = useCartStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const navigate = useNavigate()

  const totalCartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    setSearchOpen(false)
    navigate({
      to: '/',
      search: { q: searchQuery },
    } as any)
  }

  return (
    <>
      {/* Main Glass Header */}
      <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo & Branding */}
          <Link to="/" className="inline-flex flex-col items-center gap-1 group">
            <div className="h-10 sm:h-11 w-auto overflow-hidden border-0 bg-transparent shadow-none">
              <img
                src="/logo.png"
                alt="Logo KAIZU88"
                className="h-10 sm:h-11 w-auto object-contain block"
              />
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-slate-400 uppercase font-sans font-semibold leading-none text-center">
              Online Gaming Store
            </span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari Game terbaru, headphone, keyboard, monitor..."
                className="w-full bg-slate-900/90 border border-slate-800 focus:border-amber-500/60 rounded-2xl pl-10 pr-10 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </form>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <Link
              to="/"
              className="hover:text-amber-400 transition-colors py-1 [&.active]:text-amber-400 [&.active]:border-b-2 [&.active]:border-amber-400"
            >
              Katalog Produk
            </Link>
            <a
              href="#kategori"
              className="hover:text-amber-400 transition-colors py-1"
            >
              Kategori
            </a>
            <a
              href="#keunggulan"
              className="hover:text-amber-400 transition-colors py-1"
            >
              Keunggulan
            </a>
            <a
              href="#ulasan"
              className="hover:text-amber-400 transition-colors py-1"
            >
              Testimoni
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Mobile Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-slate-700 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Drawer Trigger Button */}
            <button
              onClick={toggleCart}
              className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 hover:border-amber-500/50 hover:text-amber-400 transition-all shadow-md group flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold text-slate-200 group-hover:text-amber-400">
                Keranjang
              </span>
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-amber-500 text-slate-950 font-black text-[11px] flex items-center justify-center shadow-lg shadow-amber-500/30 animate-bounce">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Overlay Bar */}
        {searchOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari Game terbaru, headphone, keyboard, monitor..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-10 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
                autoFocus
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950 p-5 space-y-4">
            <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-300">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-900 hover:text-amber-400"
              >
                <span>Katalog Produk</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </Link>
              <a
                href="#kategori"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-900 hover:text-amber-400"
              >
                <span>Kategori Produk</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
              <a
                href="#keunggulan"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-900 hover:text-amber-400"
              >
                <span>Keunggulan Layanan</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
              <a
                href="#ulasan"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-900 hover:text-amber-400"
              >
                <span>Testimoni Pelanggan</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                Layanan CS 24/7: +62 812-8000-9900
              </span>
            </div>
          </div>
        )}
      </header>
    </>
  )
}