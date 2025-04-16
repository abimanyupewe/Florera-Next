"use client"

import CourseCard from '@/app/components/home/components/CourseCard';
import Loading from '@/app/components/Loading';
import Navbar from '@/app/components/Navbar'
import { useAppFloreraContent } from '@/app/context/AppFloreraContent';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import '../../css/home/CourseSection.css'
import CourseSection from '@/app/components/home/CourseSection';
import CourseMoudulePreview from '@/app/components/home/components/CourseMoudulePreview';

const CourseDetail = () => {
    const { id } = useParams();

    const { currency, courses, router, addToCart } = useAppFloreraContent()
    const [courseData, setCourseData] = useState(null);

    const fetchCourseData = async () => {
        const course = courses.find(course => course._id === id);
        setCourseData(course);
    }

    useEffect(() => {
        fetchCourseData();
    }, [id, courses.length])

    return courseData ? (
        <>
            <Navbar />
            <div className="px-6 md:px-16 lg:px-32 pt-32 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="px-5 lg:px-16 xl:px-20">
                        <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
                            <Image
                                src={courseData.thumbnail}
                                alt={courseData.title}
                                className="w-full h-auto object-cover mix-blend-multiply"
                                width={1280}
                                height={720}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
                            {courseData.title}
                        </h1>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image
                                    className="h-4 w-4"
                                    src={assets.star_dull_icon}
                                    alt="star_dull_icon"
                                />
                            </div>
                            <p>{courseData.rating}</p>
                        </div>
                        <p className="text-gray-600 mt-3">
                            {courseData.description}
                        </p>
                        <div className="mt-6">
                            <p className="">Instructor</p>
                            <div className="flex items-center gap-3 mt-2">
                                <Image
                                    src={courseData.instructor.avatar}
                                    alt={courseData.instructor.name}
                                    className="rounded-full h-12 w-12 mt-2 object-fit-cover"
                                    width={40}
                                    height={40}
                                />
                                <div className="">
                                    <p className="">{courseData.instructor.name}</p>
                                    <p className="text-sm text-gray-500">{courseData.instructor.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fpx-5 lg:px-16 xl:px-20">
                    <div className="block lg:flex md:flex mt-6 justify-evenly">
                        <div className="">
                            <p className="">Detail</p>
                            <div className="">
                                <div className="flex items-center gap-4 my-1">
                                    <Image src={assets.duration} alt="clock_icon" className="h-4 w-4" />
                                    <p className="text-gray-500 text-sm">{courseData.duration}</p>
                                </div>
                                <div className="flex items-center gap-4 my-1">
                                    <Image src={assets.user_icon} alt="user_icon" className="h-4 w-4" />
                                    <p className="text-gray-500 text-sm">{courseData.students} Students</p>
                                </div>
                                <div className="flex items-center gap-4 my-1">
                                    <Image src={assets.module_icon} alt="module_icon" className="h-4 w-4" />
                                    <p className="text-gray-500 text-sm">{courseData.totalModule} Modules</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 lg:mt-0">
                            <p className="">Benefits</p>
                            <table>
                                <tbody className="text-gray-500 text-sm mt-2">
                                    {courseData.benefits.map((benefit, index) => (
                                        <tr key={index} className="flex items-center gap-2 my-1">
                                            <td className="w-2 h-2 bg-gray-300 rounded-full"></td>
                                            <td>{benefit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr className="bg-gray-600 my-6" />
                    <div className="flex mt-6 items-center justify-between">
                        <p className="text-3xl font-medium">
                            {currency} {courseData.discountPrice}
                            <span className="text-base font-normal text-gray-500 line-through ml-2">
                                {currency} {courseData.price}
                            </span>
                        </p>
                        <div className='block lg:flex gap-4 '>
                            <p className=''>Category</p>
                            <p className='text-gray-400'>{courseData.category}</p>
                        </div>
                    </div>


                    <div className="flex items-center mt-10 gap-4">
                        <button onClick={() => addToCart(courseData._id)} className="flex items-center gap-2 justify-center w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                            Add to Cart <Image src={assets.cart_icon} alt='cart' className='flex h-4 w-4'/>
                        </button>
                        <button onClick={() => { addToCart(courseData._id); router.push('/cart') }} className="w-full py-3.5 bg-greenPrimary text-white hover:bg-emerald-500 transition">
                            Buy now
                        </button>
                    </div>
                </div>
                <CourseMoudulePreview />
                <div className="flex flex-col items-center pt-14">
                    <p className="text-2xl font-medium text-left w-full">Similar <span className="text-greenPrimary">courses</span></p>

                    {/* Desktop Grid  */}
                    <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
                        {courses.slice(0, 4).map((course, index) => <CourseCard key={index} course={course} />)}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden w-full mt-6 pb-14">
                        <div className="relative">
                            <div className="flex overflow-x-auto snap-x snap-mandatory px-2 hide-scrollbar">
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
            </div>
        </>
    ) : <Loading />
}

export default CourseDetail
