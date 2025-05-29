"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white md:p-20 p-8 gap-8 md:gap-0">
      {/* Left Side: Heading */}
      <div className="w-full md:w-1/2 flex justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight max-w-md text-center transition-transform duration-500 hover:scale-105">
          About Us
        </h1>
      </div>

      {/* Right Side: Description */}
      <div className="w-full md:w-1/2 max-w-lg">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide text-center md:text-left">
          Florera adalah platform <span className="font-semibold text-green-600">All In One</span> bagi pecinta tanaman hias yang ingin memperdalam hobi berkebun dari rumah. Kami menyediakan kursus online, bibit tanaman, media tanam, pupuk organik, dan berbagai macam alat atau kebutuhan berkebun.
          <br /><br />
          Mendukung program Kota Malang sebagai Kota Bunga, Florera menjadi wadah belajar, diskusi komunitas, serta mengadakan workshop dan seminar berkebun. Dengan Florera, berkebun lebih mudah dan menyenangkan!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
