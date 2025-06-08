import { useAppFloreraContent } from "@/app/context/AppFloreraContent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {

  const { router } = useAppFloreraContent();

  return (
    <div
      onClick={() => {
        router.push("/blog/" + blog._id);
        scrollTo(0, 0);
      }}
      className="bg-white rounded-lg overflow-hidden group"
    >
      {/* Blog Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-0 left-0 bg-black/50 text-white px-3 py-1 text-sm">
          {blog.category}
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{blog.date}</span>
          <span className="mx-2">•</span>
          <span>{blog.relase}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
            {blog.title}
        </h3>

        <p className="text-gray-600 mb-4">{blog.excerpt}</p>

        <Link
          href={`/blog/${blog._id}`}
          className="inline-flex items-center text-greenPrimary hover:text-green-600 font-medium transition-colors"
        >
          Baca Selengkapnya
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
