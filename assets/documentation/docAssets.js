import doc1 from './doc1.jpg';
import doc2 from './doc2.jpg';
import doc3 from './doc3.jpg';
import doc4 from './doc4.jpg';
import doc5 from './doc5.jpg';
import doc6 from './doc6.jpg';
import doc7 from './doc7.jpg';
import doc8 from './doc8.jpg';
import doc9 from './doc9.jpg';
import doc10 from './doc10.jpg';
import doc11 from './doc11.jpg';

export const documentationData = [
  {
    id: 1,
    title: "Workshop Urban Gardening",
    date: "15 Mei 2023",
    description: "Pelatihan berkebun di lahan terbatas untuk pemula",
    category: "Workshop",
    photos: [
      { id: 1, image: doc1, caption: "Peserta workshop sedang praktik" },
      { id: 2, image: doc2, caption: "Instruktur menjelaskan materi" },
      { id: 3, image: doc3, caption: "Hasil karya peserta" }
    ],
    coverImage: doc1
  },
  {
    id: 2,
    title: "Panen Pertama Komunitas",
    date: "2 Juli 2023",
    description: "Kegiatan panen bersama hasil kebun komunitas Florera",
    category: "Kegiatan",
    photos: [
      { id: 1, image: doc4, caption: "Panen sayuran organik" },
      { id: 2, image: doc5, caption: "Anggota komunitas berfoto bersama" }
    ],
    coverImage: doc4
  },
    {
        id: 3,
        title: "Pameran Hasil Kebun",
        date: "20 Agustus 2023",
        description: "Pameran hasil kebun komunitas Florera di acara lokal",
        category: "Pameran",
        photos: [
        { id: 1, image: doc6, caption: "Stand pameran komunitas" },
        { id: 2, image: doc7, caption: "Pengunjung melihat hasil kebun" }
        ],
        coverImage: doc6
    },
    {
        id: 4,
        title: "Kegiatan Edukasi Anak",
        date: "10 September 2023",
        description: "Edukasi berkebun untuk anak-anak di lingkungan sekitar",
        category: "Edukasi",
        photos: [
        { id: 1, image: doc8, caption: "Anak-anak belajar menanam" },
        { id: 2, image: doc9, caption: "Permainan edukatif tentang tanaman" }
        ],
        coverImage: doc8
    },
    {
        id: 5,
        title: "Kegiatan Bersih-Bersih Kebun",
        date: "5 Oktober 2023",
        description: "Kegiatan membersihkan area kebun komunitas",
        category: "Kegiatan Sosial",
        photos: [
        { id: 1, image: doc10, caption: "Anggota komunitas membersihkan area kebun" },
        { id: 2, image: doc11, caption: "Sebelum dan sesudah kegiatan bersih-bersih" }
        ],
        coverImage: doc10
    }
];