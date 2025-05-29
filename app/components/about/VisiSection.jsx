"use client";

import React, { useEffect, useState } from "react";

const VisiSection = () => {
  const Misi = [
    {
      id: 1,
      text: "Menyediakan platform all in one yang mudah diakses untuk semua kalangan.",
    },
    {
      id: 2,
      text: "Menyediakan berbagai informasi dan edukasi tentang berkebun.",
    },
    {
      id: 3,
      text: "Mendukung keberlanjutan lingkungan melalui praktik berkebun yang baik dan benar.",
    },
    {
      id: 4,
      text: "Membangun komunitas pecinta tanaman hias yang saling mendukung.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Misi.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [Misi.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full bg-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 gap-12 md:gap-24">
      {/* Visi Kami */}
      <div className="w-full md:w-1/2 p-8 md:p-12 bg-green-50 rounded-lg shadow-md flex flex-col items-center text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
          Visi Kami
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-md">
          Menjadi platform terdepan untuk komunitas pecinta tanaman hias di
          Indonesia, yang mengedukasi dan memfasilitasi setiap orang untuk
          berkebun dengan cara yang menyenangkan dan berkelanjutan.
        </p>
      </div>

      {/* Misi Kami */}
      <div className="w-full md:w-1/2 p-8 md:p-12 bg-white rounded-lg shadow-md flex flex-col items-center max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Misi Kami
        </h2>

        {/* Slider Container */}
        <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
          {Misi.map((misi, index) => (
            <div
              key={misi.id}
              className={`absolute w-full px-6 text-center transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {misi.text}
              </p>
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="flex gap-3 mt-8">
          {Misi.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? "bg-greenPrimary"
                  : "bg-gray-300 hover:bg-emerald-500 cursor-pointer"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + Misi.length) % Misi.length)
            }
            className="px-4 py-2 bg-greenPrimary hover:bg-emerald-600 rounded-l cursor-pointer"
            aria-label="Previous slide"
          >
            <p className="text-white">Prev</p>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % Misi.length)}
            className="px-4 py-2 bg-greenPrimary hover:bg-emerald-600 rounded-r cursor-pointer"
            aria-label="Next slide"
          >
            <p className="text-white">Next</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisiSection;
