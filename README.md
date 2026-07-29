# KINETIX — Modern E-Commerce Store

**KINETIX** adalah aplikasi toko e-commerce modern yang responsif dan elegan untuk perangkat seluler dan desktop. Didesain khusus untuk menjual produk perlengkapan teknologi, audio audiophile, smartwatch, dan barang gaya hidup urban berkualitas tinggi.

---

## 🌟 Fitur Utama

- **Navigasi & Branding Modern**: Header glassmorphism yang responsif, pencarian cepat, pengumuman promo, serta menu navigasi seluler.
- **Katalog Produk & Grid Filter**:
  - Filter pencarian kata kunci real-time.
  - Filter kategori ("Audio & Sound", "Smart Wearables", "Aksesori Desk", "Tas & Travel", "Smart Home").
  - Pengurutan berdasarkan rekomendasi, harga (terendah/tertinggi), dan rating.
  - Filter rentang harga dinamis.
  - Kartu produk interaktif dengan indikator varian warna, rating, dan tombol tambah cepat ke keranjang.
- **Halaman Detail Produk (PDP)**:
  - Galeri gambar utama interaktif dengan baris thumbnail dan modal lightbox perbesar gambar.
  - Informasi harga transparan dengan kalkulasi diskon otomatis.
  - Pemilih varian warna (dengan swatch warna) dan paket/spesifikasi (dengan penyesuaian harga).
  - Kontrol jumlah pesanan dengan pemeriksaan stok.
  - Tab informasi lengkap (Deskripsi & Fitur, Spesifikasi Teknis, Ulasan Pelanggan, Garansi & Pengiriman).
  - Tombol wishlist/favorit interaktif.
  - Rekomendasi produk serupa.
- **Keranjang Belanja Slide-Over**:
  - Panel drawer keranjang dari samping yang dapat diakses dari mana saja.
  - Pengaturan jumlah (+ / -) dan penghapusan item.
  - Input kode promo/kupon diskon (`KINETIX10` atau `PROMO15`) dengan rincian biaya transparan.
  - Perhitungan ongkos kirim (Gratis Ongkir untuk belanja > Rp 1.000.000).
  - Alur checkout terintegrasi dengan halaman konfirmasi pesanan (`/checkout/success`).
- **Sistem Notifikasi Floating Toast**:
  - Feedback visual langsung saat pengguna menambahkan produk, mengubah jumlah, atau menerapkan kode kupon.

---

## 🛠️ Teknologi Yang Digunakan

- **Framework**: [TanStack Start](https://tanstack.com/router) & React 19
- **Routing**: TanStack Router (File-based type-safe routing)
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand (dengan persitensi `localStorage`)
- **Icons**: Lucide React
- **Language**: TypeScript (Strict Mode)
- **Deployment**: Netlify

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Install dependensi**:
   ```bash
   pnpm install
   ```

2. **Jalankan server pengembangan**:
   ```bash
   pnpm dev
   ```

3. **Buka browser**:
   Akses aplikasi di `http://localhost:3000`.
