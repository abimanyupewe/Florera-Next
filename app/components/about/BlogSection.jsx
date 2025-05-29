"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppFloreraContent } from "@/app/context/AppFloreraContent";
import BlogCard from "./components/BlogCard";

const BlogSection = () => {
  const { blogs } = useAppFloreraContent();

  return (
    <section className="w-full py-16 bg-white" id="blog">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Artikel Terbaru
          </h2>
          <div className="w-20 h-1 bg-greenPrimary mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl">
            Temukan tips, trik, dan inspirasi berkebun dari tim Florera
          </p>
        </div>

        {/* Blog Grid */}
        <div className="hidden md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden w-full mt-6 pb-14">
          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-2 px-4 hide-scrollbar">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="flex-none w-[calc(80%-1rem)] snap-start" // Adjust width as needed
                >
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-1 border-greenPrimary text-greenPrimary hover:bg-greenPrimary hover:text-white px-6 py-2 rounded-md font-medium transition-colors duration-700 cursor-pointer">
            Lihat Semua Artikel
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
