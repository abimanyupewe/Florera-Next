"use client"

import React from 'react'
import Navbar from '../components/Navbar'
import { useAppFloreraContent } from '../context/AppFloreraContent'
import CourseCard from '../components/home/components/CourseCard'

const AllCourses = () => {

  const { courses } = useAppFloreraContent()

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32 pt-16">
        <div className="flex flex-col items-end pt-12">
          <p className="text-2xl font-medium">All Courses</p>
          <div className="w-16 h-0.5 bg-greenPrimary rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
          {courses.map((course, index) => <CourseCard key={index} course={course} />)}
        </div>
      </div>
    </>
  )
}

export default AllCourses
