import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/lacak-pesanan')({
  component: LacakPesanan,
})

function LacakPesanan() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingResult, setTrackingResult] = useState(null)
  const [error, setError] = useState('')

  const handleTrackOrder = (e) => {
    e.preventDefault()
    setError('')

    if (!trackingNumber.trim()) {
      setError('Silakan masukkan nomor resi atau pesanan Anda.')
      return
    }

    const phoneNumber = '6281234567890' // Nomor admin dari stripe.ts
    const message = encodeURIComponent(
      `Halo, saya ingin melacak pesanan dengan nomor resi: ${trackingNumber}`
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg dark:prose-invert max-w-full">
        <h1 className="text-3xl md:text-4xl font-bold">Lacak Pesanan Anda</h1>
        <p>
          Masukkan nomor resi atau nomor pesanan Anda di bawah ini untuk melihat status pengiriman paket Anda secara real-time.
        </p>

        <div className="mt-8 not-prose">
          <form onSubmit={handleTrackOrder} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Contoh: KAIZU88-12345"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Lacak
            </button>
          </form>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>

        

        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold">Pertanyaan yang Sering Diajukan (FAQ)</h2>
          <ol className="list-decimal !pl-6 space-y-4 mt-4">
            <li>
              <strong>Di mana saya bisa melihat status pesanan saya?</strong>
              <p className="!mt-2">
                Anda dapat melacak status pesanan Anda secara langsung di halaman ini dengan memasukkan nomor resi yang kami kirimkan melalui email setelah pesanan Anda dikonfirmasi. Status juga dapat dilihat di halaman "Akun Saya" jika Anda terdaftar sebagai pengguna.
              </p>
            </li>
            <li>
              <strong>Mengapa nomor resi saya tidak bisa dilacak?</strong>
              <p className="!mt-2">
                Nomor resi biasanya memerlukan waktu hingga 1x24 jam setelah paket diserahkan ke kurir untuk dapat dilacak. Jika setelah waktu tersebut nomor resi Anda masih belum bisa dilacak, silakan hubungi layanan pelanggan kami untuk bantuan lebih lanjut.
              </p>
            </li>
            <li>
              <strong>Apakah saya bisa mengubah alamat pengiriman?</strong>
              <p className="!mt-2">
                Sayangnya, alamat pengiriman tidak dapat diubah setelah pesanan dikonfirmasi untuk menghindari kesalahan pengiriman. Mohon pastikan alamat Anda sudah benar sebelum menyelesaikan pembayaran.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}