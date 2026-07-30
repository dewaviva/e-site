import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/syarat-dan-ketentuan')({
  component: SyaratDanKetentuan,
})

function SyaratDanKetentuan() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg dark:prose-invert max-w-full">
        <h1 className="text-3xl md:text-4xl font-bold">Syarat & Ketentuan KAIZU88 STORE</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Terakhir diperbarui: 30 Juli 2024</p>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold">PENDAHULUAN</h2>
          <div className="mt-4 space-y-4">
            <p>
              Selamat datang di Platform KAIZU88 STORE. Ketentuan Penggunaan Platform ini mengatur penggunaan Anda atas Platform. Mohon luangkan waktu sejenak untuk membaca dan memahami Ketentuan Penggunaan Platform ini.
            </p>
            <p>
              Dengan mengakses dan/atau menggunakan Platform, Pengguna setuju untuk tunduk dan terikat pada Ketentuan Platform dan oleh karenanya Ketentuan Platform membentuk perjanjian yang mengikat secara hukum antara Pengguna dan KAIZU88 STORE. Jika Anda tidak setuju, mohon jangan mengakses atau menggunakan Platform.
            </p>
            <p>
              Anda menyatakan dan menjamin bahwa Anda telah cakap secara hukum untuk mengakses atau menggunakan Platform. Jika Pengguna di bawah umur atau belum cakap secara hukum berdasarkan Hukum Yang Berlaku, Pengguna menyatakan telah memperoleh persetujuan dari orang tua atau wali Pengguna dan oleh karenanya bertanggungjawab atas:
            </p>
            <ul className="list-none !pl-6 space-y-1">
              <li>(i) tindakan Pengguna;</li>
              <li>(ii) biaya yang terkait dengan penggunaan Platform atau pembelian Produk; dan</li>
              <li>(iii) penerimaan dan kepatuhan Pengguna sesuai dengan Ketentuan Platform.</li>
            </ul>
            <p>
              Seluruh huruf kapital yang digunakan dalam Ketentuan Platform adalah sebagaimana didefinisikan di dalam bagian Definisi pada Ketentuan Penggunaan Platform ini.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold">PENDAFTARAN DAN AKUN</h2>
          <div className="mt-4 space-y-4">
            <h3>Pembuatan dan Kepemilikan Akun</h3>
            <ol className="list-decimal !pl-6 space-y-2">
              <li>Layanan atau bagian tertentu di Platform memerlukan akses menggunakan Akun.</li>
              <li>Username dan password dapat: (i) ditentukan dan diberikan oleh KAIZU88 STORE; atau (ii) ditentukan dan diberikan oleh Pengguna dan diterima oleh KAIZU88 STORE dengan tunduk pada diskresi tunggal dan kebijakan KAIZU88 STORE.</li>
              <li>Pengguna setuju untuk memenuhi seluruh persyaratan dan/atau ketentuan yang ditetapkan sehubungan dengan pembuatan dan pengoperasian Akun, termasuk namun tidak terbatas pada ketentuan pembuatan password atau pemberian informasi yang dibutuhkan.</li>
              <li>Pengguna bertanggung jawab atas setiap informasi yang disediakan pada saat pembuatan dan/atau penggunaan Akun dan menjamin bahwa informasi tersebut adalah akurat dan termutakhir setiap saat dan dari waktu ke waktu.</li>
              <li>Akun hanya dapat digunakan oleh Pengguna yang tercatat dan tidak dapat dialihkan kepada orang lain dengan alasan apapun. KAIZU88 STORE berhak menolak untuk memfasilitasi penyediaan bagian atau layanan tertentu pada Platform atau membatasi akses Akun jika KAIZU88 STORE mengetahui atau mempunyai alasan yang cukup untuk menduga bahwa Pengguna telah mengalihkan atau membiarkan Akunnya digunakan oleh orang lain.</li>
            </ol>

            <h3>Keamanan Akun dan Password</h3>
            <ol className="list-decimal !pl-6 space-y-2">
              <li>Pengguna bertanggung jawab penuh atas keamanan Akun, termasuk menjaga kerahasiaan username dan password Akun.</li>
              <li>Pengguna wajib secara berkala mengubah/memperbarui password dan tidak diperbolehkan untuk membagikan informasi Akun kepada pihak manapun tanpa terkecuali, termasuk kepada pihak yang mengaku sebagai KAIZU88 STORE.</li>
              <li>Pengguna setuju bahwa setiap penggunaan Platform dengan nama pengguna dan kata sandi Pengguna (termasuk Verifikasi Biometrik) akan dianggap dilakukan oleh Pengguna.</li>
              <li>Keamanan dan kerahasiaan data yang tersimpan dalam Akun sepenuhnya merupakan tanggung jawab pribadi Pengguna. Segala Kerugian dan risiko yang ada akibat kelalaian Pengguna dalam menjaga keamanan dan kerahasiaan tersebut, ditanggung sepenuhnya oleh Pengguna sendiri.</li>
              <li>Apabila Pengguna mengetahui bahwa terdapat pelanggaran keamanan atau penggunaan tidak sah terhadap Akun, segera laporkan hal tersebut kepada KAIZU88 STORE.</li>
              <li>KAIZU88 STORE memiliki hak untuk melakukan tindakan yang diperlukan jika terdapat aktivitas yang mencurigakan pada Akun.</li>
              <li>Pengguna dengan ini menyatakan dan menjamin bahwa KAIZU88 STORE tidak bertanggung jawab atas Kerugian atau kendala pada Akun yang timbul atas penyalahgunaan Akun yang diakibatkan oleh kelalaian Pengguna sendiri.</li>
            </ol>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold">KEWAJIBAN PENGGUNA</h2>
          <div className="mt-4 space-y-4">
            <p>Dalam mengakses atau menggunakan Platform:</p>
            <ol className="list-decimal !pl-6 space-y-2">
              <li>Pengguna wajib mematuhi semua Hukum Yang Berlaku ketika mengakses atau menggunakan Platform.</li>
              <li>Pengguna wajib mematuhi setiap dan semua pedoman, pemberitahuan, aturan operasi, dan kebijakan serta instruksi yang berkaitan dengan Platform, termasuk Ketentuan Platform serta setiap perubahan yang dikeluarkan oleh KAIZU88 STORE dari waktu ke waktu.</li>
              <li>Pengguna berkewajiban untuk segera menyediakan dan menyampaikan setiap informasi tambahan yang diperlukan sebagaimana diminta oleh KAIZU88 STORE melalui saluran komunikasi resminya.</li>
              <li>Pengguna bertanggung jawab atas semua data dan informasi yang dikomunikasikan, disampaikan, dikirim, atau disediakan selama Pengguna mengakses atau menggunakan Platform baik kepada KAIZU88 STORE atau pihak ketiga. Setiap data dan informasi yang disampaikan tersebut adalah akurat, termutakhir dan tidak menyesatkan.</li>
              <li>Pengguna wajib berkomunikasi secara hormat dan profesional dengan pengguna lain, termasuk Penjual, Pembeli, dan/atau karyawan atau agen dari KAIZU88 STORE.</li>
            </ol>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold">AKTIVITAS YANG DILARANG</h2>
          <div className="mt-4 space-y-4">
            <p>Dalam mengakses atau menggunakan Platform, Pengguna dilarang:</p>
            <ol className="list-decimal !pl-6 space-y-2">
              <li>
                <strong>Akses Tidak Sah:</strong> Pengguna tidak boleh mengakses Platform melalui program komputer selain dari Platform itu sendiri atau suatu program klien KAIZU88 STORE terkait yang disediakan oleh KAIZU88 STORE.
              </li>
              <li>
                <strong>Peniruan Identitas dan Informasi Palsu:</strong> Pengguna tidak boleh meniru identitas orang lain atau memberikan informasi palsu.
              </li>
              <li>
                <strong>Penggunaan Ilegal:</strong> Pengguna dilarang menggunakan Platform untuk tujuan ilegal atau kegiatan yang melanggar Hukum Yang Berlaku.
              </li>
              <li>
                <strong>Pelanggaran Kekayaan Intelektual:</strong> Pengguna tidak boleh melanggar Kekayaan Intelektual milik KAIZU88 STORE atau pihak ketiga lainnya.
              </li>
              <li>
                <strong>Aktivitas Penipuan:</strong> Pengguna dilarang terlibat dalam aktivitas penipuan seperti penipuan pembayaran, pencurian identitas, atau peretasan akun.
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold">HAK KAIZU88 STORE</h2>
          <div className="mt-4 space-y-4">
            <p>
              Jika Pengguna melanggar Ketentuan Platform, KAIZU88 STORE berhak mengambil tindakan yang dianggap perlu, termasuk:
            </p>
            <ol className="list-decimal !pl-6 space-y-2">
              <li>Membatasi atau memblokir akses Anda ke Platform.</li>
              <li>Menghapus setiap konten yang melanggar.</li>
              <li>Membatalkan Pesanan atau Produk.</li>
              <li>Membekukan atau menghapus Akun Anda.</li>
              <li>Melaporkan aktivitas mencurigakan kepada pihak berwenang.</li>
              <li>Mengambil tindakan hukum yang diperlukan.</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  )
}