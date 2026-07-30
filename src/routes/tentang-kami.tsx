import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tentang-kami')({
  component: TentangKami,
})

function TentangKami() {
  return (
    <div className="container mx-auto max-w-4xl p-4 md:p-8">
      <div className="prose prose-lg dark:prose-invert max-w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Tentang KAIZU88 STORE
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold border-b pb-2">
            Profil Perusahaan
          </h2>
          <p>
            KAIZU88 STORE adalah surga bagi para gamer di Indonesia. Kami adalah
            platform online terkemuka yang menyediakan berbagai macam game
            terbaru, konsol, aksesoris gaming, dan merchandise eksklusif.
            Didirikan oleh para gamer untuk para gamer, kami berkomitmen untuk
            menyediakan produk otentik dan berkualitas tinggi untuk meningkatkan
            pengalaman bermain Anda.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold border-b pb-2">
            Sejarah Kami
          </h2>
          <p>
            Perjalanan KAIZU88 STORE dimulai pada tahun 2018 sebagai sebuah komunitas
            kecil yang bersemangat tentang dunia game. Kami melihat adanya
            kebutuhan akan sebuah toko yang tidak hanya menjual produk, tetapi
            juga membangun sebuah ekosistem yang mendukung para gamer. Dari
            sana, kami berevolusi menjadi sebuah toko online yang berdedikasi
            untuk menyediakan akses mudah ke produk-produk gaming terbaik dari
            seluruh dunia, sambil terus membina komunitas yang kuat dan suportif.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold border-b pb-2">
            Visi & Misi
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold">Visi</h3>
              <p>
                Menjadi pusat gaming terlengkap dan paling tepercaya di Asia
                Tenggara, yang memberdayakan setiap gamer untuk mencapai potensi
                terbaik mereka.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Misi</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Menyediakan koleksi game dan aksesoris gaming terlengkap dan
                  terbaru.
                </li>
                <li>
                  Menjamin keaslian dan kualitas setiap produk yang kami jual.
                </li>
                <li>
                  Memberikan pengalaman belanja online yang cepat, aman, dan
                  memuaskan.
                </li>
                <li>
                  Membangun dan mendukung komunitas gamer yang positif dan
                  inklusif.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold border-b pb-2">
            Nilai-Nilai Kami
          </h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong>Passion for Gaming:</strong> Kami hidup dan bernapas
              dalam dunia game. Semangat ini mendorong kami untuk selalu
              memberikan yang terbaik bagi sesama gamer.
            </li>
            <li>
              <strong>Keaslian Produk:</strong> Kami berkomitmen penuh pada
              integritas. Semua produk yang kami tawarkan dijamin asli dan
              berkualitas.
            </li>
            <li>
              <strong>Customer First:</strong> Kepuasan Anda adalah misi kami.
              Tim kami siap memberikan layanan pelanggan yang responsif dan
              solutif.
            </li>
            <li>
              <strong>Inovasi Berkelanjutan:</strong> Kami terus mengikuti tren
              dan teknologi terbaru di industri game untuk memberikan Anda
              pengalaman terbaik.
            </li>
            <li>
              <strong>Komunitas:</strong> Kami percaya bahwa game lebih seru
              jika dimainkan bersama. Kami berdedikasi untuk membangun ruang
              yang aman dan menyenangkan bagi para gamer untuk terhubung.
            </li>
          </ol>
        </section>
      </div>
    </div>
  )
}