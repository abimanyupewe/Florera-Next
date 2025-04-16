import React from 'react'
import Navbar from '../components/Navbar'
import AboutSection from '../components/about/AboutSection'
import TeamSection from '../components/about/TeamSection'

export default function page() {
    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className="px-6 md:px-16 lg:px-32">
                <AboutSection />
                <TeamSection />
            </div>
        </div>
    )
}
