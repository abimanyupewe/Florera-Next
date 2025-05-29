"use client"

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "3 Rahasia Berkebun di Lahan 1m²",
      offer: "Pelajari teknik compact gardening dari ahli",
      buttonText1: "Check now",
      buttonText2: "Find more",
      imgSrc: assets.farm1,
    },
    {
      id: 2,
      title: "Investasi Hijau Mulai Hari Ini! Diskon 25% sampai [tanggal]",
      offer: "Waktu Terbatas! Kursus Lengkap Urban Farming dengan harga terbaik",
      buttonText1: "Check Now",
      buttonText2: "Explore Deals",
      // imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur. 3",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      // imgSrc: assets.header_macbook_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full justify-center pt-16">
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
            >
              <div className="md:pl-8 mt-10 md:mt-0">
                <p className="md:text-base text-emerald-600 pb-1">{slide.offer}</p>
                <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                  {slide.title}
                </h1>
                <div className="flex items-center mt-4 md:mt-6 ">
                  <button className="cursor-pointer md:px-10 px-7 md:py-2.5 py-2 bg-emerald-600 hover:bg-emerald-400 rounded-full text-white font-medium">
                    {slide.buttonText1}
                  </button>
                  <button className="cursor-pointer group flex items-center px-6 py-2.5 font-medium hover:underline">
                    {slide.buttonText2}
                    <Image src={assets.arrow_right} className='w-4 group-hover:translate-x-2 transition' alt='arrow_right'/>
                    {/* <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon} alt="arrow_icon" /> */}
                  </button>
                </div>
              </div>
              {/* <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-72 w-48"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div> */}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {sliderData.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${currentSlide === index ? "bg-emerald-600" : "bg-gray-500/30"
                }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider
