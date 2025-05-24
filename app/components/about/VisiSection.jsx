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
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white md:p-20 p-8 gap-8 md:gap-0">
        <div className="w-full md:w-1/2 justify-center items-center p-10">
          <h1 className="text-4xl font-bold text-center">Visi Kami</h1>
          <p className="mt-4 text-center">
            Menjadi platform terdepan untuk komunitas pecinta tanaman hias di
            Indonesia, yang mengedukasi dan memfasilitasi setiap orang untuk
            berkebun dengan cara yang menyenangkan dan berkelanjutan.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center justify-center mb-4 md:mb-6">
            Misi Kami
          </h1>
          <div className="relative h-10 w-full max-w-md flex items-center justify-center">
            {Misi.map((misi, index) => (
              <div
                key={misi.id}
                className={`absolute transition-all duration-500 ease-in-out text-center px-4 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-base md:text-lg">{misi.text}</p>
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="flex gap-2 mt-6 justify-center">
            {Misi.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentSlide ? "bg-greenPrimary" : "bg-gray-300 hover:bg-green-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + Misi.length) % Misi.length
                )
              }
              className="px-4 py-2 bg-greenPrimary hover:bg-emerald-600 rounded-l cursor-pointer"
              aria-label="Previous slide"
            >
              <p className="text-white">Prev</p>
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % Misi.length)
              }
              className="px-4 py-2 bg-greenPrimary hover:bg-emerald-600 rounded-r cursor-pointer"
              aria-label="Next slide"
            >
              <p className="text-white">Next</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiSection;
