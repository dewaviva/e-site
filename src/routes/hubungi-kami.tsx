import { createFileRoute } from '@tanstack/react-router'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export const Route = createFileRoute('/hubungi-kami')({
  component: HubungiKami,
})

function HubungiKami() {
  const adminPhoneNumber = '6281234567890'
  const adminEmail = 'admin@kaizu88.com'

  const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent('Halo, saya butuh bantuan terkait KAIZU88.')}`

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg dark:prose-invert max-w-full">
        <h1 className="text-3xl md:text-4xl font-bold">Hubungi Kami</h1>
        <p>
          Punya pertanyaan atau butuh bantuan? Tim kami siap membantu Anda. Silakan pilih salah satu cara di bawah ini untuk menghubungi kami.
        </p>

        <div className="mt-8 not-prose grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors no-underline"
          >
            <FaWhatsapp size={24} />
            <span>Chat via WhatsApp</span>
          </a>
          <a
            href={`mailto:${adminEmail}`}
            className="flex items-center justify-center gap-3 p-4 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors no-underline"
          >
            <FaEnvelope size={24} />
            <span>Kirim Email</span>
          </a>
        </div>

        <div className="mt-8">
          <p>
            Tim layanan pelanggan kami siap melayani Anda <strong>24 jam setiap hari (24/7)</strong>. Jangan ragu untuk menghubungi kami kapan pun Anda butuh bantuan.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold">Pertanyaan yang Sering Diajukan (FAQ)</h2>
          <ol className="list-decimal !pl-6 space-y-4 mt-4">
            <li>
              <strong>Bagaimana cara memesan produk?</strong>
              <p className="!mt-2">
                Anda dapat memesan produk dengan mengklik tombol "Beli via WhatsApp" pada halaman detail produk. Anda akan langsung terhubung dengan admin kami untuk menyelesaikan proses pemesanan.
              </p>
            </li>
            <li>
              <strong>Kapan pesanan saya akan dikirim?</strong>
              <p className="!mt-2">
                Pesanan akan diproses dan dikirim dalam waktu 1-2 hari kerja setelah pembayaran dikonfirmasi. Nomor resi akan dikirimkan melalui email atau WhatsApp setelah paket diserahkan ke kurir.
              </p>
            </li>
            <li>
              <strong>Bagaimana cara klaim garansi?</strong>
              <p className="!mt-2">
                Untuk klaim garansi, silakan hubungi kami melalui WhatsApp atau email dengan menyertakan nomor pesanan dan bukti pembelian (faktur). Informasi lebih lanjut dapat dilihat di halaman <a href="/ketentuan-garansi">Ketentuan Garansi</a>.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}