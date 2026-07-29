import products from '@/data/products'

// WhatsApp checkout function
export const getWhatsAppUrl = (productId: number) => {
  const product = products.find((p) => p.id === productId)
  if (!product) return null
  
  const phoneNumber = '6281234567890' // Ganti dengan nomor WhatsApp kamu
  const message = encodeURIComponent(
    `Halo, saya ingin membeli produk:\n\n` +
    `📦 Produk: ${product.name}\n` +
    `💰 Harga: $${product.price}\n` +
    `ℹ️ ${product.shortDescription}\n\n` +
    `Mohon informasikan langkah selanjutnya untuk pemesanan. Terima kasih!`
  )
  
  return `https://wa.me/${phoneNumber}?text=${message}`
}

export const isWhatsAppEnabled = () => true