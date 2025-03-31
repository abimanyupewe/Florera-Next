import React from 'react'
import { useAppFloreraContent } from '../../../context/AppFloreraContent'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const CourseCard = ({ course }) => {

  const { currency, router } = useAppFloreraContent()

  return (
    <div
      onClick={() => { router.push('/course/' + course._id); scrollTo(0, 0) }}
      className="flex flex-col items-start gap-1 w-full max-w-[240px] cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative bg-gray-100 rounded-lg w-full aspect-[4/3] overflow-hidden group">
        <Image
          src={course.thumbnail}
          alt={course.title}
          className="group-hover:scale-105 transition-transform duration-300 object-cover w-full h-full"
          width={240}
          height={180}
          priority
        />
        <button
          className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-200 cursor-pointer transition"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={assets.heart_icon}
            alt="heart_icon"
            width={14}
            height={14}
          />
        </button>
      </div>

      {/* Course Info */}
      <div className="w-full pt-2 px-1">
        <h3 className="text-sm font-medium line-clamp-2 h-10 mb-1 leading-tight">
          {course.title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 h-8 mb-2">
          {course.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Image
                key={star}
                src={star <= Math.floor(course.rating) ? assets.star_icon : assets.star_dull_icon}
                alt="star"
                width={12}
                height={12}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">{course.rating}</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-3">
          {course.discountPrice !== "Free" ? (
            <>
              <span className="text-xs line-through text-gray-400">
                {currency} {course.price}
              </span>
              <span className="text-sm font-medium text-greenPrimary">
                {currency} {course.discountPrice}
              </span>
            </>
          ) : (
            <>
              <span className="text-xs line-through text-gray-400">
                {currency} {course.price}
              </span>
              <span className="text-sm font-medium text-greenPrimary">
                {course.discountPrice}
              </span>
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="flex w-full justify-evenly gap-2 mt-1">
          <button className="cursor-pointer max-sm:hidden w-full py-1.5 text-gray-400 border border-gray-400 rounded-md text-xs hover:text-gray-500 hover:border-gray-500 hover:bg-gray-100 transition duration-300">
            Add cart
          </button>
          <button className="cursor-pointer max-sm:hidden w-full py-1.5 text-white rounded-md text-xs bg-greenPrimary hover:bg-emerald-500 transition duration-300">
            Buy now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
