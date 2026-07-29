import React, { useState } from 'react'
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductGalleryProps {
  gallery: string[]
  productName: string
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  gallery,
  productName,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const activeImage = gallery[selectedIndex] || gallery[0]

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      {/* Main Image Stage */}
      <div className="relative group bg-slate-950 rounded-3xl border border-slate-800/80 overflow-hidden aspect-[4/3] sm:aspect-square flex items-center justify-center shadow-2xl">
        <img
          src={activeImage}
          alt={`${productName} - Foto ${selectedIndex + 1}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        />

        {/* Lightbox Zoom Trigger */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute top-4 right-4 p-2.5 bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          title="Perbesar Gambar"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Previous / Next Arrow Controls */}
        {gallery.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/70 hover:bg-slate-900 text-white rounded-xl backdrop-blur-sm border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/70 hover:bg-slate-900 text-white rounded-xl backdrop-blur-sm border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Carousel Row */}
      {gallery.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {gallery.map((imgUrl, index) => {
            const isSelected = selectedIndex === index
            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border-2 transition-all duration-200 ${
                  isSelected
                    ? 'border-amber-400 ring-2 ring-amber-400/30 scale-105'
                    : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            )
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 text-slate-400 hover:text-white bg-slate-900 rounded-full border border-slate-800"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center">
            <img
              src={activeImage}
              alt={productName}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />

            {gallery.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-slate-900 text-white rounded-2xl border border-slate-700"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-slate-900 text-white rounded-2xl border border-slate-700"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
