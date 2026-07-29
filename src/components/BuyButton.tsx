import { useState } from 'react'
import { getWhatsAppUrl, isWhatsAppEnabled } from '@/lib/stripe'

export function BuyButton({
  productId,
  className = '',
}: {
  productId: number
  className?: string
}) {
  const [loading, setLoading] = useState(false)
  const whatsAppEnabled = isWhatsAppEnabled()

  const handleClick = () => {
    setLoading(true)
    const url = getWhatsAppUrl(productId)
    if (url) {
      window.open(url, '_blank')
    }
    setLoading(false)
  }

  if (whatsAppEnabled === false) {
    return (
      <button
        disabled
        className={`px-6 py-2 rounded-lg border ${className}`}
        title="Checkout is not available"
      >
        Checkout Unavailable
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`px-6 py-2 rounded-lg border disabled:cursor-wait ${className}`}
    >
      {loading ? 'Opening WhatsApp...' : 'Order via WhatsApp'}
    </button>
  )
}