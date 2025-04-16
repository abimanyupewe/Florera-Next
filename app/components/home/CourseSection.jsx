"use client"

import { useAppFloreraContent } from '@/app/context/AppFloreraContent'
import React from 'react'
import CourseCard from './components/CourseCard'
import '../../css/home/CourseSection.css'

const CourseSection = () => {

  const { courses, router } = useAppFloreraContent()

  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full">Courses</p>

      {/* Desktop Grid  */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
        {courses.slice(0, 4).map((course, index) => <CourseCard key={index} course={course} />)}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden w-full mt-6 pb-14">
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 hide-scrollbar">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex-none w-[calc(80%-1rem)] snap-start" // Adjust width as needed
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => { router.push('/all-courses') }}
        className="px-12 py-2 rounded text-white hover:bg-emerald-500 transition cursor-pointer bg-greenPrimary mt-4"
      >
        See more
      </button>
    </div>
  )
}

export default CourseSection
