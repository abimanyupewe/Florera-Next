import doc1 from "./doc1.jpg";
import doc2 from "./doc2.jpg";
import doc3 from "./doc3.jpg";
import doc4 from "./doc4.jpg";
import doc5 from "./doc5.jpg";

export const blogAssets = [
  {
    id: "1",
    title: "5 Tips Merawat Tanaman Hias untuk Pemula",
    date: "29 Mei 2025",
    author: {
      name: "Admin TanamanHias",
      email: "admin@tanamanhias.com",
      profileImage: "admin_profile.jpg"
    },
    category: "Tanaman Hias",
    tags: ["tanaman", "hias", "perawatan", "rumah", "pemula"],
    slug: "tips-merawat-tanaman-hias",
    coverImage: doc1,
    seo: {
      metaTitle: "5 Tips Merawat Tanaman Hias untuk Pemula yang Mudah dan Efektif",
      metaDescription: "Pelajari 5 tips mudah merawat tanaman hias agar tumbuh subur dan sehat di rumah Anda. Panduan lengkap untuk pemula.",
      keywords: ["tanaman hias", "perawatan tanaman hias", "tips tanaman hias", "tanaman rumah"]
    },
    content: [
      {
        tip: 1,
        title: "Pilih Tanaman yang Sesuai dengan Lingkungan",
        description: "Pastikan Anda memilih tanaman hias yang sesuai dengan kondisi cahaya dan suhu di rumah Anda. Tanaman seperti kaktus dan sukulen cocok untuk ruangan yang terang, sementara tanaman seperti monstera dan lidah mertua cocok untuk tempat yang teduh.",
        images: [doc1, doc2]
      },
      {
        tip: 2,
        title: "Siram Tanaman dengan Air Secukupnya",
        description: "Jangan terlalu sering atau terlalu jarang menyiram tanaman. Cek tingkat kelembaban tanah terlebih dahulu. Sebagai patokan, siram saat tanah mulai kering pada lapisan atas.",
        images: []
      },
      {
        tip: 3,
        title: "Gunakan Media Tanam yang Tepat",
        description: "Media tanam yang baik membantu akar tanaman berkembang dengan maksimal. Gunakan campuran tanah, kompos, dan bahan organik lainnya yang memungkinkan drainase air baik.",
        images: [doc1, doc2]
      },
      {
        tip: 4,
        title: "Pemupukan Rutin",
        description: "Berikan pupuk cair atau pupuk kandang secara berkala, sekitar sekali dalam dua minggu, untuk menjaga nutrisi tanaman tetap terpenuhi.",
        images: []
      },
      {
        tip: 5,
        title: "Perhatikan Serangan Hama dan Penyakit",
        description: "Periksa tanaman secara rutin dan segera tangani jika ditemukan hama seperti kutu daun atau jamur dengan menggunakan insektisida alami atau sabun tanaman.",
        images: [doc1, doc2]
      }
    ],
    comments: [
      {
        id: 101,
        name: "Siti Nurhaliza",
        date: "2023-12-01T14:30:00Z",
        comment: "Tipsnya sangat membantu, tanaman saya jadi tumbuh lebih subur!",
        likes: 15
      },
      {
        id: 102,
        name: "Budi Santoso",
        date: "31 Mei 2025",
        comment: "Informasi lengkap dan mudah dimengerti. Terima kasih!",
        likes: 8
      }
    ],
    relatedPosts: [
      {
        id: 2,
        title: "Cara Memilih Tanaman Hias untuk Ruangan Kecil",
        slug: "cara-memilih-tanaman-hias-ruangan-kecil",
        date: "15 Mei 2025"
      },
      {
        id: 3,
        title: "Jenis Tanaman Hias yang Cocok di Iklim Tropis",
        slug: "jenis-tanaman-hias-iklim-tropis",
        date: "20 Mei 2025"
      }
    ]
  },

  {
    _id: 2,
    title: "Tips Berkebun di Rumah",
    date: "15 Januari 2024",
    relase : "2 minuted ago",
    excerpt: "Berbagai tips dan trik untuk memulai berkebun di rumah, bahkan di lahan terbatas.",
    category: "Berkebun",
    slug: "tips-berkebun-di-rumah",
    coverImage: doc2
  },
  {
    _id: 3,
    title: "Manfaat Tanaman untuk Kesehatan",
    date: "20 Januari 2024",
    relase : "3 minuted ago",
    excerpt: "Artikel ini menjelaskan berbagai manfaat tanaman untuk kesehatan dan kesejahteraan.",
    category: "Kesehatan",
    slug: "manfaat-tanaman-untuk-kesehatan",
    coverImage: doc3
  },
  {
    _id: 4,
    title: "Cara Merawat Tanaman Hias Indoor",
    date: "25 Januari 2024",
    relase : "4 minuted ago",
    excerpt: "Panduan lengkap untuk merawat tanaman hias indoor agar tetap sehat dan tumbuh dengan baik.",
    category: "Tanaman Hias",
    slug: "cara-merawat-tanaman-hias-indoor",
    coverImage: doc4
  },
  {

    _id: 5,
    title: "Tanaman Hias yang Cocok untuk Ruangan Sempit",
    date: "30 Januari 2024",
    relase : "5 minuted ago",
    excerpt: "Rekomendasi tanaman hias yang cocok untuk diletakkan di ruangan sempit.",
    category: "Tanaman Hias",
    slug: "tanaman-hias-yang-cocok-untuk-ruangan-sempit",
    coverImage: doc5
  }

  // {
  //   id: "1",
  //   title: "Mengenal Urban Farming: Solusi Ruang Terbuka Hijau di Kota",
  //   subtitle:
  //     "Bagaimana urban farming membantu menciptakan kota yang lebih hijau dan sehat.",
  //   author: "Siti Nurhaliza",
  //   date: "2025-06-01",
  //   thumbnail: doc1,
  //   excerpt:
  //     "Urban farming atau pertanian perkotaan adalah cara inovatif untuk mengoptimalkan ruang terbuka yang terbatas di kota-kota besar...",
  //   content:
  //     "Urban farming adalah konsep pertanian yang diterapkan di kawasan perkotaan dengan tujuan menciptakan ruang hijau dan menyediakan hasil panen ... [konten lengkap di sini]",
  //   tags: ["Urban Farming", "Lingkungan", "Pertanian Berkelanjutan"],
  // },
  // {
  //   id: "2",
  //   title: "Panduan Lengkap Urban Farming untuk Pemula",
  //   subtitle: "Langkah praktis memulai urban farming di lahan terbatas kamu.",
  //   author: "Ahmad Fauzi",
  //   date: "2025-05-20",
  //   thumbnail: doc2,
  //   excerpt:
  //     "Mulai urban farming tidak sesulit yang dibayangkan. Berikut panduan lengkapnya yang mudah diikuti untuk pemula ...",
  //   content:
  //     "Memulai urban farming dimulai dengan memilih tanaman yang sesuai, menyiapkan media tanam, dan memanfaatkan ruang yang ada secara maksimal ... [konten lengkap di sini]",
  //   tags: ["Tutorial", "Urban Farming", "Pemula"],
  // },
  // {
  //   id: "3",
  //   title: "Marketplace Florera: Memudahkan Akses Produk Urban Farming",
  //   subtitle:
  //     "Fitur terbaru Florera untuk mendukung komunitas urban farming di Malang.",
  //   author: "Dewi Sartika",
  //   date: "2025-06-05",
  //   thumbnail: doc3,
  //   excerpt:
  //     "Florera tidak hanya sebagai platform edukasi dan komunitas, tapi juga menyediakan marketplace untuk perlengkapan dan produk urban farming ...",
  //   content:
  //     "Marketplace Florera hadir sebagai solusi untuk memudahkan pelaku urban farming mendapatkan kebutuhan mereka dengan cepat dan praktis ... [konten lengkap di sini]",
  //   tags: ["Marketplace", "Florera", "Urban Farming"],
  // },
];
