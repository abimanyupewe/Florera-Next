"use client"

import ProductCard from '@/app/components/home/components/ProductCard';
import Loading from '@/app/components/Loading';
import Navbar from '@/app/components/Navbar';
import { useAppFloreraContent } from '@/app/context/AppFloreraContent';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const ProductDetail = () => {

    const { id } = useParams();

    const { currency, products, router, addToCart } = useAppFloreraContent()

    const [mainImage, setMainImage] = useState(null);
    const [productData, setProductData] = useState(null);

    const [isHowToUseOpen, setIsHowToUseOpen] = useState(false)
    const howToUseRef = useRef(null)
    const [isRotateHTU, setIsRotateHTU] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (howToUseRef.current && !howToUseRef.current.contains(event.target))
            ) {
                setIsHowToUseOpen(false);
                setIsRotateHTU(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const fetchProductData = async () => {
        const product = products.find(product => product._id === id);
        setProductData(product);
    }

    useEffect(() => {
        fetchProductData();
    }, [id, products.length])

    return productData ? (
        <>
            <Navbar />
            <div className="px-6 md:px-16 lg:px-32 pt-32 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="px-5 lg:px-16 xl:px-20">
                        <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
                            <Image
                                src={mainImage || productData.image[0]}
                                alt="alt"
                                className="w-full h-auto object-cover mix-blend-multiply"
                                width={1280}
                                height={720}
                            />
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            {productData.image.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => setMainImage(image)}
                                    className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10"
                                >
                                    <Image
                                        src={image}
                                        alt="alt"
                                        className="w-full h-auto object-cover mix-blend-multiply"
                                        width={1280}
                                        height={720}
                                    />
                                </div>

                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
                            {productData.name}
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
                            <p>{productData.rating}</p>
                        </div>
                        <p className="text-gray-600 mt-3">
                            {productData.description}
                        </p>
                        <div className="md:flex mt-6 space-y-4 items-center justify-between">
                            <p className="text-3xl font-medium">
                                {currency}{productData.discountPrice}
                                <span className="text-base font-normal text-gray-800/60 line-through ml-2">
                                    {currency}{productData.price}
                                </span>
                            </p>
                            <div className='flex gap-4'>
                                <p className='text-gray-600'>Category</p>
                                <p className='text-gray-400'>{productData.category}</p>
                            </div>
                        </div>
                        <hr className="bg-gray-600 my-6" />

                        <div className="flex flex-col" ref={howToUseRef}>
                            <div
                                onClick={() => {
                                    setIsHowToUseOpen(!isHowToUseOpen);
                                    setIsRotateHTU(!isRotateHTU);
                                }}
                                className="cursor-pointer text-gray-600 hover:text-black"
                            >
                                <div className="flex items-center">
                                    <p className="font-medium">How to use</p>
                                    <Image
                                        src={assets.arrow_drop_down}
                                        alt="Dropdown Arrow"
                                        className={`w-5 transition-transform duration-300 ${isRotateHTU ? "rotate-180" : "rotate-0"
                                            }`}
                                    />
                                </div>
                            </div>

                            {/* Dropdown Menu */}
                            {isHowToUseOpen && (
                                <div className="mt-2 w-full bg-white border border-gray-200 rounded  transition-all duration-300">
                                    <ul className="p-2 space-y-2">
                                        {productData.how_to_use.map((item, index) => (
                                            <li key={index} className="text-gray-700">- {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center mt-10 gap-4">
                            <button onClick={() => addToCart(productData._id)} className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                                Add to Cart
                            </button>
                            <button onClick={() => { addToCart(productData._id); router.push('/cart') }} className="w-full py-3.5 bg-greenPrimary text-white hover:bg-emerald-500 transition">
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center mb-4 mt-16">
                        <p className="text-3xl font-medium">Featured <span className="font-medium text-greenPrimary">Products</span></p>
                        <div className="w-28 h-0.5 bg-emerald-600 mt-2"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
                        {products.slice(0, 5).map((product, index) => <ProductCard key={index} product={product} />)}
                    </div>
                    <button className="px-8 py-2 mb-16 border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
                        See more
                    </button>
                </div>
            </div>
        </>
    ) : <Loading />
}

export default ProductDetail
