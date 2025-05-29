"use client";

import React, { useState } from "react";
import { useAppFloreraContent } from "@/app/context/AppFloreraContent";
import DocCard from "./components/DocCard";

const DocumentationSection = () => {
  const {documentations} = useAppFloreraContent();

  return (
    <section className="w-full py-16 bg-gray-50" id="documentation">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Dokumentasi Kegiatan
          </h2>
          <div className="w-20 h-1 bg-greenPrimary mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl ">
            Catatan momen berharga dari berbagai kegiatan komunitas Florera
          </p>
        </div>

        {/* Documentation Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {documentations.slice(0, 4).map((doc, index) => (
            <DocCard key={index} doc={doc} />
          ))}
        </div>

          {/* Mobile View */}
        <div className="md:hidden w-full mt-6 pb-14">
          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-2 px-4 hide-scrollbar">
              {documentations.map((doc, index) => (
                <div
                  key={index}
                  className="flex-none w-[calc(80%-1rem)] snap-start" // Adjust width as needed
                >
                  <DocCard doc={doc} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-1 border-greenPrimary text-greenPrimary hover:bg-greenPrimary hover:text-white px-6 py-2 rounded-md font-medium transition-colors duration-700 cursor-pointer">
            Lihat Semua Dokumentasi
          </button>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;