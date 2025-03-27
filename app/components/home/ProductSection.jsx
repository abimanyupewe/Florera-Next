"use client"

import { useAppFloreraContent } from '@/app/context/AppFloreraContent'
import React from 'react'
import ProductCard from '../ProductCard'

const ProductSection = () => {

  const { products, router } = useAppFloreraContent()

  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full">Products</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
      <button onClick={() => { router.push('/all-products') }} className="px-12 py-2 rounded text-white hover:bg-emerald-500 transition cursor-pointer bg-greenPrimary">
        See more
      </button>
    </div>
  )
}

export default ProductSection
