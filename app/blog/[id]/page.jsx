"use client";

import { useAppFloreraContent } from "@/app/context/AppFloreraContent"; // Pastikan context ini sudah benar
import { useParams } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "@/app/components/Loading";
import { Link } from "react-scroll";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ShareButtons from "@/app/components/blog/ShareButton";
import BlogCard from "@/app/components/about/components/BlogCard";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs } = useAppFloreraContent();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (blogs && id) {
      const found = blogs.find((b) => String(b.id) === String(id));
      setBlogData(found || null);
    }
  }, [blogs, id]);

  if (!blogs) return <Loading />;

  if (!blogData)
    return (
      <div>
        <h2>Blog tidak ditemukan</h2>
        <p>Maaf, blog yang Anda cari tidak tersedia.</p>
      </div>
    );

  return (
    <div className="px-5">
      <Navbar />
      <div className="flex flex-col md:flex-row bg-gray-100 overflow-hidden rounded-lg mt-20">
        <div className="md:w-1/2 flex flex-col justify-center px-6 py-8 sm:px-10 md:px-12 lg:px-16 text-gray-900">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            {blogData.title}
          </h1>
          <p className="text-sm sm:text-base font-medium text-gray-600 mb-8">
            {new Date(blogData.date).toLocaleDateString()} by{" "}
            {blogData.author.name}
          </p>
        </div>

        <div className="relative md:w-1/2 h-64 sm:h-80 md:h-96">
          <Image
            src={blogData.coverImage}
            alt={blogData.title}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             50vw"
            priority={true}
          />
        </div>
      </div>

      <div className="md:p-16 w-full">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-14">
          {/* Left column - Content */}
          <div className="prose prose-lg w-full">
            {blogData.content.map(({ tip, title, description, images }) => (
              <section key={tip} className="">
                <p className="mb-4 text-justify text-gray-700">
                  <span className="font-bold text-black mb-3">{title},</span>{" "}
                  {description}
                </p>
                {images.length > 0 && (
                  <div className="flex space-x-4 overflow-x-auto mb-3">
                    {images.map((img, idx) => (
                      <Image
                        key={idx}
                        src={img}
                        alt={title}
                        width={200}
                        height={150}
                        className="rounded-md"
                      />
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Right column - Author and Tags with sticky */}
          <div className="md:w-1/4">
            <div className="sticky top-32 flex flex-col gap-4">
              <div className="flex md:flex-col gap-8">
                <div className="space-y-4">
                  <div className="relative md:w-64 w-40 h-40 md:h-64 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={blogData.author.profileImage}
                      alt={`Profile image of ${blogData.author.name}`}
                      fill
                      className="object-cover"
                      priority={true}
                    />
                  </div>

                  <div>
                    <p className="font-bold">{blogData.author.name}</p>
                    <p>{blogData.author.about}</p>
                  </div>
                </div>

                <div className="">
                  <div>
                    <h4 className="font-semibold mb-3">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {blogData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ShareButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Comments */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Comments</h3>
          {/* Comment Form */}
          <div className="md:flex gap-10">
            <form className="mb-8 space-y-4 md:w-1/2">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="flex-grow border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
              <textarea
                name="comment"
                placeholder="Write your comment here..."
                rows={4}
                className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <button
                type="submit"
                className="bg-greenPrimary text-white px-5 py-2 rounded hover:bg-emerald-500 transition cursor-pointer w-full md:w-auto"
              >
                Submit Comment
              </button>
            </form>

            {/* Comments List */}
            <div className="md:w-1/2 max-h-96 overflow-auto">
              {blogData.comments.length === 0 && (
                <p className="text-gray-500">Be the first to comment!</p>
              )}
              {blogData.comments.map(
                ({ id, name, image, date, comment, likes }, index) => (
                  <div
                    key={id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } p-4 rounded-md flex space-x-4 hover:bg-gray-100`}
                  >
                    <Image
                      src={image}
                      alt={`${name} avatar`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="w-full">
                      <p className="font-semibold">
                        {name}{" "}
                        <span className="text-gray-400 text-sm font-light">
                          ({new Date(date).toLocaleDateString()})
                        </span>
                      </p>
                      <p className="mt-1">{comment}</p>
                      <div className="flex items-center space-x-4 mt-2 text-gray-500 text-sm justify-between">
                        <span>Likes: {likes}</span>
                        {/* Icon Like */}
                        <div className="flex gap-4">
                          <button
                            aria-label="Like comment"
                            className="hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                          >
                            <FaThumbsUp />
                          </button>
                          {/* Icon Dislike */}
                          <button
                            aria-label="Dislike comment"
                            className="hover:text-red-500 transition-colors duration-200 cursor-pointer"
                          >
                            <FaThumbsDown />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* Related Posts */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Related Posts</h3>
          {/* Blog Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <BlogCard key={blog.id} blog={blog} />
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
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
