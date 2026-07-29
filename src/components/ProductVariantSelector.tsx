import React from 'react'
import { ProductVariant, formatRupiah } from '@/data/products'
import { Check } from 'lucide-react'

interface ProductVariantSelectorProps {
  colors: ProductVariant[]
  selectedColor: ProductVariant
  onSelectColor: (color: ProductVariant) => void
  options?: ProductVariant[]
  selectedOption?: ProductVariant
  onSelectOption?: (option: ProductVariant) => void
}

export const ProductVariantSelector: React.FC<ProductVariantSelectorProps> = ({
  colors,
  selectedColor,
  onSelectColor,
  options,
  selectedOption,
  onSelectOption,
}) => {
  return (
    <div className="space-y-6">
      {/* Color Selection */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-slate-400">Pilih Warna Varian:</span>
          <span className="text-amber-400 font-bold">{selectedColor.name}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {colors.map((color) => {
            const isSelected = selectedColor.id === color.id
            return (
              <button
                key={color.id}
                type="button"
                onClick={() => onSelectColor(color)}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400 text-white ring-2 ring-amber-400/20 shadow-lg'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full border border-slate-700 shadow-inner flex items-center justify-center shrink-0"
                  style={{ backgroundColor: color.value }}
                >
                  {isSelected && (
                    <Check
                      className={`w-2.5 h-2.5 ${
                        color.value === '#f4f4f6' || color.value === '#e2e8f0'
                          ? 'text-slate-950 stroke-[3]'
                          : 'text-white stroke-[3]'
                      }`}
                    />
                  )}
                </span>
                <span className="text-xs font-medium">{color.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Option / Size / Bundle Selection */}
      {options && options.length > 0 && onSelectOption && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-400">Pilih Paket / Spesifikasi:</span>
            {selectedOption && (
              <span className="text-amber-400 font-bold">
                {selectedOption.name}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {options.map((option) => {
              const isSelected = selectedOption?.id === option.id
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onSelectOption(option)}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between gap-2 ${
                    isSelected
                      ? 'bg-slate-900 border-amber-400 text-white ring-2 ring-amber-400/20 shadow-lg'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold block line-clamp-1">
                      {option.name}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {option.value}
                    </span>
                  </div>

                  {option.priceModifier ? (
                    <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-lg shrink-0">
                      +{formatRupiah(option.priceModifier)}
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-lg shrink-0">
                      Standar
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
