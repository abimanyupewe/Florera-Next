import { useAppFloreraContent } from '@/app/context/AppFloreraContent';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Loading from '../../Loading';
import Image from 'next/image';

const CourseMoudulePreview = () => {

    const { id } = useParams();
    const { courses, router } = useAppFloreraContent()

    const [courseData, setCourseData] = useState(null);

    const fetchCourseData = async () => {
        const course = courses.find(course => course._id === id);
        setCourseData(course);
    }

    useEffect(() => {
        fetchCourseData();
    }, [id, courses.length])

    return courseData ? (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Struktur Modul Pembelajaran</h2>

            <div className="space-y-6">
                {courseData.modules.map((module, index) => (
                    <div key={module.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                        {/* Module Header with Thumbnail */}
                        <div className="relative h-48 w-full">
                            <Image
                                src={module.thumbnail}
                                alt={`Thumbnail modul ${module.title}`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-xl font-semibold text-white">
                                    Modul {index + 1}: {module.title}
                                </h3>
                                <div className="flex items-center mt-1 text-white/90">
                                    <span>{module.duration}</span>
                                    <span className="mx-2">•</span>
                                    <span>{module.lessons.length} materi</span>
                                </div>
                            </div>
                        </div>

                        {/* Lessons List */}
                        <div className="p-4 divide-y divide-gray-200">
                            {module.lessons.map((lesson) => (
                                <div key={lesson.id} className="py-3 flex items-start">
                                    <div className="relative h-12 w-12 flex-shrink-0 rounded-md overflow-hidden mr-3">
                                        <Image
                                            src={lesson.thumbnail}
                                            alt={`Thumbnail ${lesson.title}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-medium text-gray-900 truncate">{lesson.title}</h4>
                                        <div className="flex items-center mt-1 text-xs text-gray-500">
                                            <span className="capitalize">{lesson.type}</span>
                                            <span className="mx-2">•</span>
                                            <span>{lesson.duration}</span>
                                        </div>
                                        {lesson.description && (
                                            <p className="mt-1 text-xs text-gray-600 line-clamp-2">{lesson.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : <Loading />
}

export default CourseMoudulePreview
