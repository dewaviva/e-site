import React from 'react'
import { useCartStore } from '@/store/cartStore'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useCartStore()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full px-4 sm:px-0 pointer-events-none">
      {toasts.map((toast) => {
        const isError = toast.type === 'error'
        const isInfo = toast.type === 'info'

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-2xl border transition-all duration-300 transform translate-y-0 opacity-100 backdrop-blur-md ${
              isError
                ? 'bg-red-950/90 border-red-800 text-red-100'
                : isInfo
                ? 'bg-blue-950/90 border-blue-800 text-blue-100'
                : 'bg-slate-900/95 border-amber-500/40 text-slate-100'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {isError ? (
                <AlertCircle className="w-5 h-5 text-red-400" />
              ) : isInfo ? (
                <Info className="w-5 h-5 text-blue-400" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white leading-tight">
                {toast.title}
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
