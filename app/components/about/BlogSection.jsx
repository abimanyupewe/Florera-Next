"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    title: "5 Tips Merawat Tanaman Hias untuk Pemula",
    excerpt: "Pelajari cara merawat tanaman hias dengan benar agar tumbuh subur dan sehat di rumah Anda.",
    date: "12 Mei 2023",
    readTime: "5 min read",
    category: "Perawatan",
    image: "/blog/tanaman-hias.jpg",
    slug: "tips-merawat-tanaman-hias"
  },
  {
    id: 2,
    title: "Urban Gardening: Berkebun di Lahan Terbatas",
    excerpt: "Teknik kreatif untuk menciptakan taman mini di apartemen atau rumah dengan ruang terbatas.",
    date: "28 April 2023",
    readTime: "7 min read",
    category: "Urban Farming",
    image: "/blog/urban-gardening.jpg",
    slug: "urban-gardening-lahan-terbatas"
  },
  {
    id: 3,
    title: "Panduan Memilih Media Tanam yang Tepat",
    excerpt: "Kenali berbagai jenis media tanam dan cara memilih yang paling sesuai untuk tanaman Anda.",
    date: "15 April 2023",
    readTime: "6 min read",
    category: "Berkebun",
    image: "/blog/media-tanam.jpg",
    slug: "panduan-media-tanam"
  },
];

const BlogSection = () => {
  return (
    <section className="w-full py-16 bg-white" id="blog">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Artikel Terbaru</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan tips, trik, dan inspirasi berkebun dari tim Florera
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-green-500 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors"
                >
                  Baca Selengkapnya
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-block border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-2 rounded-full font-medium transition-colors duration-300"
          >
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;