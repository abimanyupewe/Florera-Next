"use client";

import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full relative">
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white md:p-20 p-8 gap-8 md:gap-0">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-black text-center md:text-left">
            About Us
          </h1>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <p className="text-center text-base md:text-lg">
            Florera adalah platform all in one bagi pecinta tanaman hias yang
            ingin memperdalam hobi berkebun dari rumah. Kami menyediakan kursus
            online, bibit tanaman, media tanam, pupuk organik dan berbagai macam
            alat atau kebutuhan berkebun. Mendukung program Kota Malang sebagai
            Kota Bunga, Florera menjadi wadah belajar, diskusi komunitas, serta
            mengadakan workshop dan seminar berkebun. Dengan Florera, berkebun
            lebih mudah dan menyenangkan!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
