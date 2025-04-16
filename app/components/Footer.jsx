"use client"
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'
import { Link } from 'react-scroll';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="p-3 w-full">
            <div className="px-10 bg-gray-200 rounded-lg">
                <div className="w-full flex flex-col md:grid md:grid-cols-[4fr_1fr] lg:grid lg:grid-cols-[4fr_1fr_1fr_1fr] gap-8 my-10 mt-40 text-sm pt-10">
                    <div className="">
                        <Image
                            onClick={scrollToTop}
                            src={assets.logo}
                            className="w-36 cursor-pointer"
                            alt="Logo"
                        />
                        <p className="w-full md:w-[400px] text-gray-600 mt-3">
                            Thank you for visiting the florera website.
                            We are committed to helping you realize easy and fun urban farming. Get the latest information about plants, gardening tools, and special promotions by subscribing to our newsletter. Let's grow together!
                        </p>
                        <form action="" className="flex flex-col md:flex-row items-center space-y-2 lg:space-y-0 md:space-y-0 mt-2">
                            <input type="email" name="" id="" placeholder="Your Mail" className="w-full md:w-[400px] px-4 py-3 rounded-md bg-gray-100 border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-greenPrimary" required />
                            <button type="submit" className="bg-emerald-600 px-6 lg:py-2 flex md:absolute w-full md:w-auto left-[335px] rounded-md text-white py-3 hover:bg-emerald-500 duration-500 transition-all">Subscribe</button>
                        </form>
                    </div>

                    <div className="">
                        <p className="text-xl font-medium mb-5">NAVIGATION</p>
                        <ul className="flex flex-col gap-1 text-gray-600">
                            {["/", "/all-products", "/all-courses", "/about", "/contact"].map(
                                (path, index) => {
                                    const labels = [
                                        "Home",
                                        "Products",
                                        "Courses",
                                        "About",
                                        "Contact",
                                    ];
                                    return (
                                        <Link key={index} href={path}>
                                            <li className="hover:underline">{labels[index]}</li>
                                        </Link>
                                    );
                                }
                            )}
                        </ul>
                    </div>

                    <div className="">
                        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                        <ul className="flex flex-col gap-1 text-gray-600">
                            <li className="">+62 857 2424 2004</li>
                            <li className="">florera.id@gmail.com</li>
                            <li className="">florera.id</li>
                        </ul>
                    </div>

                    <div className="">
                        <p className="text-xl font-medium mb-5">LOCATION</p>
                        <ul className="flex flex-col gap-1 text-gray-600">
                            <li className="">Jl. Mergan Jaya, Malang, Jawa Timur</li>
                        </ul>
                    </div>
                </div>

                {/* copryrigth */}
                <div>
                    <hr className="border-black" />
                    <p className="py-5 text-sm">Florera - Copyright 2025</p>
                </div>
            </div>
        </div>
    );
}
