import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ketentuan-garansi')({
  component: KetentuanGaransi,
})

function KetentuanGaransi() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg dark:prose-invert max-w-full">
        <h1 className="text-3xl md:text-4xl font-bold">Ketentuan Garansi KAIZU88 STORE</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Terakhir diperbarui: 30 Juli 2024</p>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold">Informasi Garansi</h2>
          <p>
            Untuk meningkatkan kenyamanan Anda, kami menyediakan informasi garansi untuk semua produk yang dijual di KAIZU88 STORE. Jika Anda memiliki kesulitan atau pertanyaan lebih lanjut, silakan hubungi layanan pelanggan kami.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold">Masa Berlaku Garansi</h2>
          <p>
            Kami memberikan garansi selama <strong>2 tahun (24 bulan)</strong> untuk semua produk yang dijual di KAIZU88 STORE.
          </p>
          <p className="text-sm mt-2">
            <strong>Catatan:</strong> Masa garansi dihitung sejak tanggal pembelian yang tertera pada bukti pembelian (faktur).
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold">Jaminan Berlaku Bila:</h2>
          <ol className="list-decimal !pl-6 space-y-2">
            <li>Jaminan ini berlaku sesuai dengan jangka waktu yang telah ditetapkan oleh KAIZU88 STORE.</li>
            <li>Jaminan diberikan untuk produk yang dijual oleh KAIZU88 STORE dan berlaku di seluruh wilayah Indonesia.</li>
            <li>Apabila dalam masa jaminan produk mengalami kerusakan fungsional, pembeli tidak akan dikenakan biaya suku cadang dan/atau jasa perbaikan.</li>
            <li>Klaim garansi wajib menyertakan bukti pembelian yang sah (faktur asli).</li>
          </ol>
        </div>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold">Jaminan Tidak Berlaku Bila:</h2>
          <ol className="list-decimal !pl-6 space-y-2">
            <li>Nomor seri atau IMEI produk telah dihapus, diubah, atau tidak dapat dibaca.</li>
            <li>Kerusakan disebabkan oleh penggunaan yang salah atau tidak sesuai dengan buku petunjuk (contoh: jatuh, terkena cairan, tegangan listrik tidak stabil).</li>
            <li>Kerusakan akibat bencana alam (force majeure) seperti banjir, gempa bumi, atau sambaran petir.</li>
            <li>Segel garansi pada produk telah rusak, atau produk pernah dibuka/diperbaiki oleh pihak yang tidak berwenang.</li>
            <li>Perangkat lunak maupun perangkat keras telah dimodifikasi oleh pengguna.</li>
            <li>Kerusakan fisik seperti goresan, retak, atau penyok yang disebabkan oleh penggunaan sehari-hari.</li>
            <li>Jangka waktu jaminan telah berakhir.</li>
          </ol>
        </div>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold">Ketentuan Lainnya</h2>
          <ul className="list-disc !pl-6 space-y-2">
            <li>KAIZU88 STORE tidak bertanggung jawab atas kehilangan data milik pengguna yang tersimpan di dalam produk. Pengguna disarankan untuk melakukan backup data secara berkala.</li>
            <li>Untuk produk yang dibeli dari luar negeri, ketentuan garansi mungkin berbeda dan perbaikan dapat dikenakan biaya tambahan tergantung ketersediaan suku cadang.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}