import Image from "next/image";
import React, { useState } from "react";

const DocCard = ({ doc }) => {
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
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex + 1) % selectedDoc.photos.length
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedDoc.photos.length) % selectedDoc.photos.length
    );
  };

  return (
    <div>
      <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 transform group">
        {/* Image */}
        <div
          className="relative h-48 w-full overflow-hidden cursor-pointer"
          onClick={() => openGallery(doc)}
        >
          <Image
            src={doc.coverImage}
            alt={`Dokumentasi ${doc.title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute bottom-0 left-0 bg-black/50 text-white px-3 py-1 text-sm">
            {doc.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-sm text-gray-500">{doc.date}</p>
          <h3 className="text-lg font-semibold text-gray-800">{doc.title}</h3>

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
            className="mt-4 w-full bg-greenPrimary hover:bg-emerald-500 text-white py-2 px-4 rounded text-sm transition-colors duration-300 cursor-pointer"
            onClick={() => openGallery(doc)}
          >
            Lihat Galeri
          </button>
        </div>
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
                src={selectedDoc.photos[currentPhotoIndex].image}
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
    </div>
  );
};

export default DocCard;
