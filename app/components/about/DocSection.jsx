"use client";

import React, { useState } from "react";
import Image from "next/image";

// Data dummy dengan array foto untuk setiap dokumentasi
const documentationData = [
  {
    id: 1,
    title: "Workshop Urban Gardening",
    date: "15 Mei 2023",
    description: "Pelatihan berkebun di lahan terbatas untuk pemula",
    category: "Workshop",
    photos: [
      { id: 1, url: "/docs/workshop1.jpg", caption: "Peserta workshop sedang praktik" },
      { id: 2, url: "/docs/workshop2.jpg", caption: "Instruktur menjelaskan materi" },
      { id: 3, url: "/docs/workshop3.jpg", caption: "Hasil karya peserta" }
    ],
    coverImage: "/docs/workshop-urban.jpg"
  },
  {
    id: 2,
    title: "Panen Pertama Komunitas",
    date: "2 Juli 2023",
    description: "Kegiatan panen bersama hasil kebun komunitas Florera",
    category: "Kegiatan",
    photos: [
      { id: 1, url: "/docs/harvest1.jpg", caption: "Panen sayuran organik" },
      { id: 2, url: "/docs/harvest2.jpg", caption: "Anggota komunitas berfoto bersama" }
    ],
    coverImage: "/docs/panen-komunitas.jpg"
  },
  // Data lainnya...
];

const DocumentationSection = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openGallery = (doc) => {
    setSelectedDoc(doc);
    setCurrentPhotoIndex(0);
  };

  const closeGallery = () => {
    setSelectedDoc(null);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      (prevIndex + 1) % selectedDoc.photos.length
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      (prevIndex - 1 + selectedDoc.photos.length) % selectedDoc.photos.length
    );
  };

  return (
    <section className="w-full py-16 bg-gray-50" id="documentation">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Dokumentasi Kegiatan
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Catatan momen berharga dari berbagai kegiatan komunitas Florera
          </p>
        </div>

        {/* Documentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {documentationData.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div 
                className="relative h-48 w-full overflow-hidden cursor-pointer"
                onClick={() => openGallery(doc)}
              >
                <Image
                  src={doc.coverImage}
                  alt={`Dokumentasi ${doc.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 bg-black/50 text-white px-3 py-1 text-sm">
                  {doc.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {doc.title}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {doc.date}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{doc.description}</p>

                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {doc.photos.length} Foto
                </div>

                <button 
                  className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm transition-colors duration-300"
                  onClick={() => openGallery(doc)}
                >
                  Lihat Galeri
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Modal */}
        {selectedDoc && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeGallery}
            >
              &times;
            </button>
            
            <div className="relative max-w-4xl w-full">
              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  prevPhoto();
                }}
              >
                &larr;
              </button>
              
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  nextPhoto();
                }}
              >
                &rarr;
              </button>
              
              {/* Current Photo */}
              <div className="relative h-[70vh] w-full">
                <Image
                  src={selectedDoc.photos[currentPhotoIndex].url}
                  alt={selectedDoc.photos[currentPhotoIndex].caption}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Photo Info */}
              <div className="mt-4 text-center text-white">
                <p className="font-medium">{selectedDoc.title}</p>
                <p className="text-sm opacity-80">
                  {selectedDoc.photos[currentPhotoIndex].caption}
                </p>
                <p className="text-sm mt-2">
                  {currentPhotoIndex + 1} / {selectedDoc.photos.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
            Lihat Semua Dokumentasi
          </button>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;