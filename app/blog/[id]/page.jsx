"use client";

import { useAppFloreraContent } from "@/app/context/AppFloreraContent"; // Pastikan context ini sudah benar
import { useParams } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "@/app/components/Loading";

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs } = useAppFloreraContent();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (blogs && id) {
      const found = blogs.find(b => String(b.id) === String(id));
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
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-4xl font-bold mb-2">{blogData.title}</h1>
      <p className="text-gray-600 mb-4">
        {new Date(blogData.date).toLocaleDateString()} by {blogData.author.name}
      </p>
      <Image
        src={blogData.coverImage}
        alt={blogData.title}
        width={800}
        height={400}
        className="rounded mb-6"
      />

      {/* Content Section */}
      <div className="prose max-w-none">
        {blogData.content.map(({ tip, title, description, images }) => (
          <section key={tip} className="mb-8">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p>{description}</p>
            {images.length > 0 && (
              <div className="flex space-x-4 mt-4">
                {images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={title}
                    width={200}
                    height={150}
                  />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Tags */}
      <div className="mt-6">
        <h4 className="font-semibold">Tags:</h4>
        <div className="flex flex-wrap space-x-2 mt-2">
          {blogData.tags.map((tag) => (
            <span
              key={tag}
              className="bg-green-100 text-green-700 px-2 py-1 rounded mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Comments */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        {blogData.comments.map(({ id, name, date, comment, likes }) => (
          <div key={id} className="mb-4 border-b pb-4">
            <p>
              <strong>{name}</strong>{" "}
              <span className="text-gray-500">
                ({new Date(date).toLocaleDateString()})
              </span>
            </p>
            <p>{comment}</p>
            <p className="text-sm text-gray-600">Likes: {likes}</p>
          </div>
        ))}
      </div>

      {/* Related Posts */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Related Posts</h3>
        <ul className="list-disc list-inside">
          {blogData.relatedPosts.map(({ id, title, slug, date }) => (
            <li key={id}>
              <a
                href={`/blog/${slug}`}
                className="text-blue-600 underline hover:text-blue-800"
              >
                {title}
              </a>{" "}
              <span className="text-gray-600 text-sm">
                ({new Date(date).toLocaleDateString()})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetail;

// "use client";

// import { useAppFloreraContent } from "@/app/context/AppFloreraContent";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import Loading from "@/app/components/Loading";

// const BlogDetail = () => {
//   const { id } = useParams();
//   const { blogs } = useAppFloreraContent();
//   const [blogData, setBlogData] = useState(null);

//   useEffect(() => {
//     if (blogs && id) {
//       const found = blogs.find(b => String(b.id) === String(id));
//       setBlogData(found || null);
//     }
//   }, [blogs, id]);

//   if (!blogs) return <Loading />;
//   if (!blogData)
//     return (
//       <div>
//         <h2>Blog tidak ditemukan</h2>
//         <p>Maaf, blog yang Anda cari tidak tersedia.</p>
//       </div>
//     );

//   return (
//     <div className="container mx-auto p-6 max-w-3xl">
//       <h1 className="text-4xl font-bold mb-2">{blogData.title}</h1>
//       <p className="text-gray-600 mb-4">
//         {new Date(blogData.date).toLocaleDateString()} by {blogData.author.name}
//       </p>
//       <Image
//         src={blogData.coverImage}
//         alt={blogData.title}
//         width={800}
//         height={400}
//         className="rounded mb-6"
//       />

//       {/* Konten Blog */}
//       <div className="prose max-w-none">
//         {blogData.content.map(({ tip, title, description, images }) => (
//           <section key={tip} className="mb-8">
//             <h2 className="text-xl font-bold mb-2">{title}</h2>
//             <p>{description}</p>
//             {images.length > 0 && (
//               <div className="flex space-x-4 mt-4">
//                 {images.map((img, idx) => (
//                   <Image key={idx} src={img} alt={title} width={200} height={150} />
//                 ))}
//               </div>
//             )}
//           </section>
//         ))}
//       </div>

//       {/* Tags */}
//       <div className="mt-6">
//         <h4 className="font-semibold">Tags:</h4>
//         <div className="flex flex-wrap space-x-2 mt-2">
//           {blogData.tags.map(tag => (
//             <span key={tag} className="bg-green-100 text-green-700 px-2 py-1 rounded mb-2">
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Komentar */}
//       <div className="mt-10">
//         <h3 className="text-2xl font-semibold mb-4">Comments</h3>
//         {blogData.comments.map(({ id, name, date, comment, likes }) => (
//           <div key={id} className="mb-4 border-b pb-4">
//             <p>
//               <strong>{name}</strong>{" "}
//               <span className="text-gray-500">({new Date(date).toLocaleDateString()})</span>
//             </p>
//             <p>{comment}</p>
//             <p className="text-sm text-gray-600">Likes: {likes}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;
