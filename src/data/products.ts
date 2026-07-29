export interface ProductVariant {
  id: string
  name: string
  type: 'color' | 'option'
  value: string // hex code for color, or label for option
  priceModifier?: number // Price change if this option selected
}

export interface ProductReview {
  id: string
  author: string
  avatar: string
  rating: number
  date: string
  comment: string
}

export interface Product {
  id: number
  name: string
  updatedAt?: string
  tagline: string
  category: 'Audio & Sound' | 'Smart Wearables' | 'Aksesori Desk' | 'Tas & Travel' | 'Smart Home'
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  badge?: 'Best Seller' | 'Baru' | 'Diskon 15%' | 'Favorit Komunitas' | 'Stok Terbatas' | 'Audio Premium' | 'Trending' | 'Wajib Punya' | 'Desain Unik'
  image: string
  gallery: string[]
  description: string
  shortDescription: string
  features: string[]
  specs: Record<string, string>
  colors: ProductVariant[]
  options?: ProductVariant[]
  stock: number
  reviews: ProductReview[]
}

export const CATEGORIES = [
  'Semua',
  'Audio & Sound',
  'Smart Wearables',
  'Aksesori Desk',
  'Tas & Travel',
  'Smart Home',
] as const

export type Category = (typeof CATEGORIES)[number]

const products: Product[] = [
  {
    id: 1,
    name: 'Kinetix SoundFlow Pro ANC Wireless',
    tagline: 'Performa Audio Audiophile dengan Pembendung Bising Tingkat Lanjut',
    category: 'Audio & Sound',
    price: 2899000,
    originalPrice: 3499000,
    rating: 4.9,
    reviewCount: 128,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=80',
    ],
    shortDescription: 'Headphone nirkabel flagship dengan Active Noise Cancelling hibrida 45dB, driver Titanium 40mm, dan daya tahan baterai hingga 50 jam.',
    description: 'Kinetix SoundFlow Pro ANC dirancang untuk pencinta audio yang menginginkan kejernihan mutlak dan kenyamanan sepanjang hari. Dilengkapi chip pemroses audio dual-core kustom, teknologi spatial audio 360°, serta bantalan telinga Memory Foam berbahan kulit protein ultra-lembut.',
    features: [
      'Active Noise Cancellation (ANC) Hibrida hingga -45dB',
      'Driver Titanium Kustom 40mm untuk bass mendalam & treble jernih',
      'Daya Tahan Baterai 50 Jam (35 Jam dengan ANC Aktif)',
      'Pengisian Cepat 10 Menit = 5 Jam Pemutaran Musik',
      'Koneksi Dual-Device Bluetooth 5.3 + Multipoint',
      'Mikrofon Quad-Beamforming dengan AI-Noise Reduction untuk panggilan jernih',
    ],
    specs: {
      'Driver Unit': '40mm Titanium Coated Dome',
      'Respon Frekuensi': '10Hz - 40,000Hz (Hi-Res Audio Certified)',
      'Versi Bluetooth': 'Bluetooth 5.3 / Codec LDAC, AAC, SBC',
      'Kapasitas Baterai': '800 mAh Li-ion',
      'Berat': '254 gram',
      'Garansi': '2 Tahun Garansi Resmi Kinetix',
    },
    colors: [
      { id: 'c-1', name: 'Obsidian Black', type: 'color', value: '#121212' },
      { id: 'c-2', name: 'Ceramic White', type: 'color', value: '#f4f4f6' },
      { id: 'c-3', name: 'Midnight Navy', type: 'color', value: '#1b263b' },
    ],
    options: [
      { id: 'o-1', name: 'Standard Edition', type: 'option', value: 'Standar' },
      { id: 'o-2', name: 'Studio Mod + Hardcase Leather', type: 'option', value: 'Studio Pack', priceModifier: 350000 },
    ],
    stock: 24,
    reviews: [
      {
        id: 'r-1',
        author: 'Rian Prasetyo',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: '14 Juli 2026',
        comment: 'Kualitas suara luar biasa! ANC-nya sangat senyap saat saya pakai bekerja di cafe yang bising. Baterainya juga awet sekali.',
      },
      {
        id: 'r-2',
        author: 'Amanda Kartika',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: '28 Juni 2026',
        comment: 'Desainnya sangat elegan dan tidak membuat telinga sakit meski dipakai marathon meeting 4 jam lebih.',
      },
    ],
  },
  {
    id: 2,
    name: 'Kinetix CyberWatch Ultra AMOLED',
    tagline: 'Smartwatch Titanium Tangguh dengan Fitur Kesehatan & Outdoor Canggih',
    category: 'Smart Wearables',
    price: 4250000,
    originalPrice: 4999000,
    rating: 4.8,
    reviewCount: 94,
    badge: 'Baru',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1000&q=80',
    ],
    shortDescription: 'Smartwatch petualang berbahan Titanium kelas penerbangan dengan layar Sapphire Crystal AMOLED 1.95 inci dan GPS Dual-Frequency.',
    description: 'CyberWatch Ultra dibuat untuk bertahan di lingkungan paling ekstrem. Dibekali bodi titanium berketahanan militer STD-810H, sensor kesehatan optik generasi ke-5 untuk detak jantung, SpO2, pemantauan tidur AI, serta daya tahan baterai hingga 14 hari pemakaian normal.',
    features: [
      'Bodi Titanium Aerospasial & Kaca Safir Anti-Gores',
      'Layar Ultra Bright AMOLED 1.95" 2000 nits Peak Brightness',
      'Sistem GPS Dual-Frequency L1+L5 Akurasi Tinggi',
      'Water Resistant 10ATM (Ketahanan Kedalaman 100m)',
      'Lebih dari 110+ Mode Olahraga Profesional & AI Coach',
      'Baterai Hingga 14 Hari dalam Sekali Pengisian',
    ],
    specs: {
      'Material Case': 'Aerospace Grade Titanium Alloy',
      'Layar': '1.95" LTPO AMOLED 410x502px, Always-On Display',
      'Ketahanan Air': '10 ATM (100 Meter)',
      'Sensor': 'ECG, SpO2, Heart Rate, Barometer, Gyro, Compass',
      'Konektivitas': 'Bluetooth 5.3, Wi-Fi 2.4GHz, NFC',
      'Baterai': 'Baterai 580 mAh / Wireless Magnetic Fast Charge',
    },
    colors: [
      { id: 'cw-1', name: 'Titanium Silver', type: 'color', value: '#d1d5db' },
      { id: 'cw-2', name: 'Space Black', type: 'color', value: '#1e293b' },
      { id: 'cw-3', name: 'Alpine Orange', type: 'color', value: '#ea580c' },
    ],
    options: [
      { id: 'cwo-1', name: 'Ukuran Case 42mm', type: 'option', value: '42mm' },
      { id: 'cwo-2', name: 'Ukuran Case 46mm (+Strap Trail)', type: 'option', value: '46mm', priceModifier: 250000 },
    ],
    stock: 18,
    reviews: [
      {
        id: 'r-3',
        author: 'Bagus Setyawan',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: '20 Juli 2026',
        comment: 'Sangat mantap untuk naik gunung dan trail run. Akurasi GPS-nya tepat banget dan fisiknya sangat kokoh!',
      },
    ],
  },
  {
    id: 3,
    name: 'Kinetix Lumos Mechanical Keyboard 75%',
    tagline: 'Sensasi Ketikan Mewah dengan Gasket Mount & Switch Hotswap',
    category: 'Aksesori Desk',
    price: 1750000,
    originalPrice: 1990000,
    rating: 4.9,
    reviewCount: 210,
    badge: 'Favorit Komunitas',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541140597013-ac2be7b23a22?auto=format&fit=crop&w=1000&q=80',
    ],
    shortDescription: 'Keyboard mekanis kustom layout 75% nirkabel tri-mode dengan bodi aluminium CNC, gasket mount elastis, dan tombol PBT double-shot.',
    description: 'Didesain khusus bagi para kreator, programmer, dan gamer yang menghargai akustik serta kenyamanan mengetik tingkat tinggi. Memiliki 5 lapis foam peredam suara (Poron + IXPE), knob aluminium serbaguna untuk kontrol volume, serta pencahayaan RGB Per-Key yang dapat disesuaikan.',
    features: [
      'Struktur Flex-Cut Gasket Mount untuk ketikan empuk & berakustik "Thock"',
      'Koneksi Tri-Mode: Bluetooth 5.1 / 2.4G Wireless (1ms) / Type-C Cable',
      'Full Key Hot-Swappable (3-pin & 5-pin Switch Compatible)',
      'Keycaps PBT Dye-Sub Cherry Profile Tebal 1.5mm',
      'Baterai Raksasa 8000 mAh (Tahan hingga 300 jam tanpa RGB)',
      'Knob Aluminium CNC Multifungsi untuk Media & LED Control',
    ],
    specs: {
      'Layout': '75% Compact (81 Keys + CNC Knob)',
      'Case Material': 'Anodized CNC Aluminum Frame',
      'Switch Option': 'Kinetix Custom Creamy Linear / Tactile Brown',
      'Plate': 'FR4 Flex-Cut PCB',
      'Baterai': '8000 mAh Lithium Rechargeable',
      'Kesesuaian OS': 'Windows, MacOS, iOS, Android',
    },
    colors: [
      { id: 'k-1', name: 'Retro Industrial', type: 'color', value: '#64748b' },
      { id: 'k-2', name: 'Chalk White', type: 'color', value: '#e2e8f0' },
      { id: 'k-3', name: 'Vaporwave Purple', type: 'color', value: '#7e22ce' },
    ],
    options: [
      { id: 'sw-1', name: 'Linear Creamy Switch (Suara Halus & Empuk)', type: 'option', value: 'Creamy Linear' },
      { id: 'sw-2', name: 'Tactile Moss Switch (Umpan Balik Taktil)', type: 'option', value: 'Tactile Moss' },
      { id: 'sw-3', name: 'Silent Pink Switch (Sangat Hening untuk Kantor)', type: 'option', value: 'Silent Pink', priceModifier: 120000 },
    ],
    stock: 32,
    reviews: [
      {
        id: 'r-4',
        author: 'Dicky Firmansyah',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: '02 Juli 2026',
        comment: 'Suaranya thocky banget tanpa perlu modding sama sekali! Build quality aluminium terasa sangat premium.',
      },
    ],
  },
  {
    id: 4,
    name: 'Kinetix Voyager Modular Backpack 30L',
    tagline: 'Tas Punggung Urban & Travel Kedap Air dengan Kompartemen Pintar',
    category: 'Tas & Travel',
    price: 1490000,
    originalPrice: 1850000,
    rating: 4.7,
    reviewCount: 86,
    badge: 'Stok Terbatas',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1000&q=80',
    ],
    shortDescription: 'Tas backpack serbaguna berbahan Cordura® 1000D waterproof dengan kapasitas fleksibel 24L-30L, slot laptop 16 inci, dan fitur Anti-Theft.',
    description: 'Voyager Modular Backpack diciptakan bagi profesional muda dan komuter modern. Memiliki pembukaan ala koper 180°, kantong tersembunyi ber-RFID blocking untuk paspor/kartu, bantalan punggung bernapas Ergoflow, serta strap koper bawaan untuk kemudahan perjalanan udara.',
    features: [
      'Bahan Cordura® 1000D Ballistic Nylon Tahan Air & Sobekan',
      'Kompartemen Laptop Suspensi Melayang (Fit hingga MacBook Pro 16")',
      'Ekspansi Kapasitas Fleksibel dari 24L ke 30L',
      'Sistem Resleting YKK® Aquaguard Kedap Air',
      'Saku Tersembunyi RFID Safe & Gantungan Kunci Magnetik Fidlock®',
      'Panel Punggung Busa 3D Mesh Ergonomis Kurangi Beban Pundak',
    ],
    specs: {
      'Material Utama': 'Ballistic Cordura® Nylon 1000D + PU Coating',
      'Dimensi': '48cm x 32cm x 18-24cm',
      'Kapasitas': '24L - 30L (Expandable)',
      'Kesesuaian Laptop': 'Hingga 16 Inci (Laptop Compartment Dimensions: 39x27cm)',
      'Berat Kosong': '1.1 kg',
      'Fitur Khusus': 'Fidlock® Magnetic Buckle, Trolley Sleeve',
    },
    colors: [
      { id: 'b-1', name: 'Stealth Black', type: 'color', value: '#0f172a' },
      { id: 'b-2', name: 'Olive Drab', type: 'color', value: '#3f6212' },
      { id: 'b-3', name: 'Graphite Grey', type: 'color', value: '#475569' },
    ],
    options: [
      { id: 'bo-1', name: 'Standard Backpack Only', type: 'option', value: 'Standard' },
      { id: 'bo-2', name: 'Bundle + Tech Pouch & Rain Cover', type: 'option', value: 'Travel Bundle', priceModifier: 200000 },
    ],
    stock: 15,
    reviews: [
      {
        id: 'r-5',
        author: 'Siti Nurhaliza',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: '05 Mei 2026',
        comment: 'Sangat muat banyak barang untuk business trip 3 hari! Slot laptopnya terlindungi sangat aman.',
      },
    ],
  },
  {
    id: 5,
    name: 'Kinetix Horizon ScreenBar LED Light',
    tagline: 'Pencahayaan Presisi Bebas Silau untuk Kenyamanan Mata di Meja Kerja',
    category: 'Aksesori Desk',
    price: 899000,
    originalPrice: 1050000,
    rating: 4.8,
    reviewCount: 67,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80',
    ],
    shortDescription: 'Lampu gantung monitor pintar berpenjepit gravitasi aluminium dengan teknologi optic asimetris dan remote kendali sentuh nirkabel.',
    description: 'Bekerja atau bermain game hingga larut malam tanpa lelah mata. Kinetix Horizon mengarahkan cahaya secara khusus ke area meja tanpa memantulkan sinar pada kaca layar monitor. Dilengkapi sensor otomatis pencahayaan ruangan dan Indeks Reproduksi Warna tinggi (CRI Ra>95).',
    features: [
      'Optik Asimetris 45°: Nol Pantulan Layar & Bebas Silau',
      'Color Rendering Index (CRI) Ra>95 untuk Warna Alami Asli',
      'Pengaturan Temperatur Warna Luas (2700K Warm - 6500K Cool White)',
      'Remote Control Nirkabel Rotasi 2.4G Dial Puck',
      'Sensor Cerdas Auto-Dimming Menyesuaikan Cahaya Ruangan',
      'Penjepit Kontra-Bobot Gravitasi Cocok untuk Monitor Datar & Lengkung',
    ],
    specs: {
      'Daya Input': 'USB Type-C (5V / 1.5A)',
      'Konsumsi Daya': '7.5 Watt',
      'Temperatur Warna': '2700K - 6500K Stepless Adjustment',
      'CRI': 'Ra ≥ 95',
      'Bahan Bodi': 'Anodized Aluminum Alloy',
      'Panjang Bar': '45cm (Cocok untuk monitor 15"-34")',
    },
    colors: [
      { id: 'l-1', name: 'Matte Space Gray', type: 'color', value: '#334155' },
      { id: 'l-2', name: 'Silver Frost', type: 'color', value: '#cbd5e1' },
    ],
    options: [
      { id: 'lo-1', name: 'Touch Control Bar', type: 'option', value: 'Touch Bar' },
      { id: 'lo-2', name: 'With Wireless Desktop Puck Remote', type: 'option', value: 'Wireless Puck', priceModifier: 150000 },
    ],
    stock: 40,
    reviews: [
      {
        id: 'r-6',
        author: 'Eko Prasetya',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: '11 Juni 2026',
        comment: 'Mata tidak cepat lelah saat koding malam hari. Puck controller-nya sangat estetik di meja kerja!',
      },
    ],
  },
  {
    id: 6,
    name: 'Kinetix Prism Studio 360 Speaker',
    tagline: 'Speaker Ruangan Nirkabel Hi-Res dengan Akustik Kamar Otomatis',
    category: 'Audio & Sound',
    price: 3199000,
    originalPrice: 3699000,
    rating: 4.9,
    reviewCount: 53,
    badge: 'Audio Premium',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=1000&q=80',
    ],
    shortDescription: 'Speaker Hi-Fi nirkabel 360 derajat dengan konstruksi kayu walnut asli, amplifier Class-D 80W, Wi-Fi AirPlay 2, dan Spotify Connect.',
    description: 'Menghadirkan suara omnidirectional yang mengisi seluruh ruangan secara seimbang. Prism Studio dilengkapi kalibrasi akustik ruangan bertenaga AI yang mendeteksi pantulan dinding dan menyesuaikan equalizer secara otomatis.',
    features: [
      'Penyebaran Suara 360° Omnidirectional Hi-Res Audio Certified',
      'Dual Custom Woofer + Quad Silk Dome Tweeter (Peak Power 80W)',
      'Konektivitas Lengkap: Wi-Fi AirPlay 2, Spotify Connect, Bluetooth 5.3, AUX, Optical',
      'Kalibrasi Akustik Ruangan Otomatis Cerdas',
      'Material Kayu Walnut Asli & Kain Akustik Kvadrat® Denmark',
      'Baterai Internal 10.000 mAh (Dapat Digunakan Portabel Hingga 20 Jam)',
    ],
    specs: {
      'Output Power': '80W RMS (Class-D Digital Amplifier)',
      'Respon Frekuensi': '38Hz - 24,000Hz',
      'Konektivitas Nirkabel': 'Wi-Fi 2.4G/5G, Bluetooth 5.3, AirPlay 2, Chromecast',
      'Baterai': '10,000 mAh Li-ion Rechargeable',
      'Dimensi': 'D: 16cm x T: 28cm',
      'Berat': '2.8 kg',
    },
    colors: [
      { id: 'sp-1', name: 'Walnut & Warm Beige', type: 'color', value: '#78350f' },
      { id: 'sp-2', name: 'Ash Wood & Smoked Black', type: 'color', value: '#1c1917' },
    ],
    options: [
      { id: 'spo-1', name: 'Single Speaker Unit', type: 'option', value: 'Single' },
      { id: 'spo-2', name: 'Stereo Pair Bundle (2 Unit True Wireless)', type: 'option', value: 'Stereo Pair', priceModifier: 2800000 },
    ],
    stock: 10,
    reviews: [
      {
        id: 'r-7',
        author: 'Hendra Wijaya',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: '19 Juni 2026',
        comment: 'Bass-nya dalam sekali dan vokal terdengar sangat hangat. Estetika kayunya sangat mempercantik ruang tamu.',
      },
    ],
  },
  {
    id: 7,
    name: 'Kinetix Aura Ambient Smart Glow Lamp',
    tagline: 'Lampu Meja Cerdas RGBIC dengan Efek Dinamis & Kontrol Suara Matter',
    category: 'Smart Home',
    price: 1150000,
    originalPrice: 1399000,
    rating: 4.6,
    reviewCount: 42,
    badge: 'Desain Unik',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80',
    ],
    shortDescription: 'Lampu atmosfer pintar bersilinder kaca tiup dengan teknologi RGBIC segmented, sinkronisasi musik real-time, serta kompatibilitas Matter / Apple HomeKit.',
    description: 'Transformasikan suasana ruangan kerja atau kamar tidur Anda dengan gradasi warna yang mengalir lembut. Kinetix Aura mendukung 16 juta warna, adegan alam terintegrasi (Aurora, Fireplace, Sunset), serta mikrofon internal untuk mengikuti ritme musik secara presisi.',
    features: [
      'Teknologi RGBIC Multi-Segment: Tampilkan banyak warna sekaligus',
      'Kompatibel dengan Protokol Matter, Apple HomeKit, Google Home, & Alexa',
      'Mode Music Sync Real-time dengan Mikrofon Ekstra Sensitif Internal',
      'Kaca Buram Satin Buatan Tangan & Bodi Base Aluminium Anodized',
      'Fitur Circadian Rhythm untuk Bantu Tidur Lebih Nyenyak & Bangun Segar',
      'Kontrol Aplikasi Smartphone Kinetix Smart Life via Wi-Fi & Bluetooth',
    ],
    specs: {
      'Konektivitas': 'Wi-Fi 2.4GHz / Bluetooth 5.0 / Matter Over Wi-Fi',
      'Luminansi': 'Standar 650 Lumens Adjustable',
      'Daya': '12W Power Adapter Included',
      'Jumlah LED': '60 Segmented RGBIC Beads',
      'Bahan': 'Blown Satin Glass + Anodized Base',
      'Dimensi': 'Tinggi 24cm, Diameter 11cm',
    },
    colors: [
      { id: 'al-1', name: 'Satin Brass Gold', type: 'color', value: '#d97706' },
      { id: 'al-2', name: 'Smoked Titanium', type: 'color', value: '#334155' },
    ],
    options: [
      { id: 'alo-1', name: 'Standard Aura Lamp', type: 'option', value: 'Standard' },
      { id: 'alo-2', name: 'Aura Tall Tower (+Base Kayu)', type: 'option', value: 'Tall Tower', priceModifier: 250000 },
    ],
    stock: 22,
    reviews: [
      {
        id: 'r-8',
        author: 'Clara Sinta',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        rating: 4,
        date: '10 Mei 2026',
        comment: 'Gradasi warnanya sangat halus dan tidak menyilaukan. Integrasi dengan Apple HomeKit langsung mulus!',
      },
    ],
  },
  {
    id: 8,
    name: 'Kinetix VoltDock Mag-Charge Trio Station',
    tagline: 'Stasiun Pengisian Daya Nirkabel Magnetik 3-in-1 Rapi & Cepat 15W',
    category: 'Aksesori Desk',
    price: 799000,
    originalPrice: 950000,
    rating: 4.8,
    reviewCount: 115,
    badge: 'Wajib Punya',
    image: 'https://www.cellularline.com/medias/WIR3IN1MAGQI2W_01_MAIN_HR.jpg?context=bWFzdGVyfHJvb3R8MzE1MjQ0fGltYWdlL2pwZWd8aGZlL2gwNy85ODk0NjM0NDIyMzAyLmpwZ3xkMzBhYTAxNWU3MzdiOTY4YWM3NGE4YjZhZTBmNzYzNTI1ZDkzMmMyMjQzZDY3NDA2ZTQ2N2JlZjJiNDEzMTNi',
    gallery: [
      'https://www.cellularline.com/medias/WIR3IN1MAGQI2W_01_MAIN_HR.jpg?context=bWFzdGVyfHJvb3R8MzE1MjQ0fGltYWdlL2pwZWd8aGZlL2gwNy85ODk0NjM0NDIyMzAyLmpwZ3xkMzBhYTAxNWU3MzdiOTY4YWM3NGE4YjZhZTBmNzYzNTI1ZDkzMmMyMjQzZDY3NDA2ZTQ2N2JlZjJiNDEzMTNi',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1000&q=80',
    ],
    shortDescription: 'Pengisi daya magnetik 3-in-1 lipat berbahan aluminium CNC murni untuk smartphone, smartwatch, dan TWS dalam satu stasiun elegan.',
    description: 'Bebaskan meja kerja Anda dari kekacauan kabel. VoltDock Mag-Charge Trio dilengkapi magnet Neodymium N52 ekstra kuat yang menopang smartphone baik dalam posisi vertikal maupun horisontal (StandBy Mode).',
    features: [
      'Isi Daya 3 Perangkat Sekaligus: Smartphone 15W, Smartwatch 5W, Earbuds 5W',
      'Magnetik Neodymium N52 Super Kuat: Presisi snap instant tanpa meleset',
      'Desain Lipat Ringkas (Travel-Friendly) Hanya Setebal 1.5cm',
      'Konstruksi Bobot Murni Aluminium CNC dengan Pad Silikon Anti-Slip',
      'Proteksi Keselamatan Cerdas MultiProtect (Suhu Over-heat, Over-voltage, FOD)',
      'Indikator LED Lembut Ramah Tidur di Malam Hari',
    ],
    specs: {
      'Input Port': 'USB Type-C (Daya Rekomendasi ≥ 30W Adapter)',
      'Output Smartphone': 'MagSafe Compatible 15W / 10W / 7.5W',
      'Output Smartwatch': '5W Fast Charge',
      'Output Earbuds': '5W Wireless Pad',
      'Bahan': 'Aircraft Grade CNC Aluminum + Soft Touch Silicone',
      'Berat': '210 gram',
    },
    colors: [
      { id: 'v-1', name: 'Dark Space Gray', type: 'color', value: '#1e293b' },
      { id: 'v-2', name: 'Glacier Silver', type: 'color', value: '#e2e8f0' },
    ],
    options: [
      { id: 'vo-1', name: 'Dock Station Only', type: 'option', value: 'Dock Only' },
      { id: 'vo-2', name: 'Includes 65W GaN Fast Charger & Nylon Cable', type: 'option', value: 'Power Pack 65W', priceModifier: 180000 },
    ],
    stock: 50,
    reviews: [
      {
        id: 'r-9',
        author: 'Fajar Nugraha',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: '15 Juli 2026',
        comment: 'Sangat praktis dibawa traveling karena bisa dilipat tipis. Meja kerja jadi bebas kabel membelit!',
      },
    ],
  },
]

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export default products