"use client";

import { useAppFloreraContent } from "@/app/context/AppFloreraContent"; // Pastikan context ini sudah benar
import { useParams } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "@/app/components/Loading";

const BlogDetail = () => {
  const { id } = useParams(); // Ambil parameter slug dari URL
  const { blogs } = useAppFloreraContent(); // Ambil array blogs dari context
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (blogs && id) {
      // Cari blog dengan slug yang cocok (case insensitive)
      const found = blogs.find(
        (blog) => blog.slug.toLowerCase().trim() === id.toLowerCase().trim()
      );
      setBlogData(found || null);
    }
  }, [blogs, id]);

  if (!blogs) return <Loading />; // Loading saat blogs belum tersedia

  if (!blogData)
    return (
      <div>
        <h2>Blog tidak ditemukan</h2>
        <p>Maaf, blog yang Anda cari tidak tersedia.</p>
      </div>
    );

  return (
    <div className="blog-detail">
      <h1>{blogData.title}</h1>
      <p>
        <em>{blogData.date}</em> by <strong>{blogData.author.name}</strong>
      </p>
    </div>
  );
};

export default BlogDetail;
