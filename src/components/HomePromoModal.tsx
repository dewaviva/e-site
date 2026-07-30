import React from 'react'
import { Sparkles, X, ChevronRight, MessageSquareText, LockKeyhole } from 'lucide-react'
import homePromo from '@/data/homePromo'

interface HomePromoModalProps {
  open: boolean
  onClose: () => void
}

export function HomePromoModal({ open, onClose }: HomePromoModalProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 py-4 backdrop-blur-md sm:px-4 sm:py-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="home-promo-title"
        className="relative w-full max-w-[420px] rounded-[22px] border border-amber-500/25 bg-[#120d04] text-[#f6d37f] shadow-2xl shadow-black/70 sm:max-w-[520px]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-0 -top-4 z-10 inline-flex h-8 w-8 translate-x-full items-center justify-center rounded-full border-2 border-[#120d04] bg-white text-slate-800 transition hover:bg-slate-200"
          aria-label="Tutup pop up"
        >
          <X className="h-5 w-5" />
        </button>

        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        <div className="no-scrollbar max-h-[90vh] overflow-y-auto">
          <div className="space-y-4 p-4 sm:p-5">


            <div className="overflow-hidden rounded-[18px] border border-amber-500/20 bg-black">
              <img
                src={homePromo.image}
                alt={homePromo.imageAlt}
                className="w-full"
              />
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <a
                href={homePromo.primaryAction.href}
                className="inline-flex transform items-center justify-center gap-2 rounded-[18px] border border-[#7a5412] bg-gradient-to-b from-[#f5cc64] to-[#d6a93c] px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#201404] shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition hover:scale-105 hover:brightness-110"
              >
                <MessageSquareText className="h-4 w-4" />
                {homePromo.primaryAction.label}
              </a>
              <a
                href={homePromo.secondaryAction.href}
                className="inline-flex transform items-center justify-center gap-2 rounded-[18px] border border-slate-600/80 bg-gradient-to-b from-slate-300 to-slate-500 px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-900 shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition hover:scale-105 hover:brightness-110"
              >
                <LockKeyhole className="h-4 w-4" />
                {homePromo.secondaryAction.label}
              </a>
            </div>

            {homePromo.footerAction && (
              <a
                href={homePromo.footerAction.href}
                className="inline-flex w-full transform items-center justify-center rounded-[18px] border border-orange-800/80 bg-gradient-to-b from-orange-500 to-orange-700 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition hover:scale-105 hover:brightness-110"
              >
                {homePromo.footerAction.label}
              </a>
            )}

            <div className="rounded-[18px] border border-amber-500/20 bg-[#1a1307] p-3 sm:p-4">
              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-green-500">
                  LINK ALTERNATIF KAIZU88
                </span>
              </div>

              <div className="mt-3 space-y-2">
                {homePromo.links.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex w-full transform items-center justify-center rounded-2xl border border-amber-500/15 bg-black/25 p-4 text-center text-sm font-semibold text-[#f7e4b1] transition hover:scale-105 hover:border-amber-600 hover:bg-amber-500 hover:font-bold hover:text-[#1a1205]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pb-1 text-center text-[11px] font-medium text-[#a88840]">
              {homePromo.note}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}