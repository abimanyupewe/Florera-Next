import { useAppFloreraContent } from '@/app/context/AppFloreraContent';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const ProductCard = ({ product }) => {

  const { currency, router } = useAppFloreraContent()

  return (
    <div
      onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
      className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer"
    >
      <div className="cursor-pointer group relative bg-gray-200 raoun rounded-lg w-full h-52 flex items-center justify-center">
        <Image
          src={product.image[0]}
          alt={product.name}
          className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
          width={800}
          height={800}
        />
        <button className="absolute top-2 right-2 bg-white p-2 hover:bg-gray-200 cursor-pointer rounded-full shadow-md">
          <Image
            className="h-3 w-3"
            src={assets.heart_icon}
            alt="heart_icon"
          />
        </button>
      </div>

      <p className="md:text-base font-medium pt-2 w-full truncate">{product.name}</p>
      <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              className="h-3 w-3"
              src={
                index < Math.floor(4)
                  ? assets.star_icon
                  : assets.star_dull_icon
              }
              alt="star_icon"
            />
          ))}
        </div>
        <p className="text-xs">{product.rating}</p>
      </div>

      <div className="flex gap-2 w-full mt-1">
        <p className="line-through text-base text-gray-400">{currency} {product.price}</p>
        <p className="text-base font-medium text-greenPrimary">{currency} {product.discountPrice}</p>
      </div>

      <div className="flex w-full justify-evenly gap-2 mt-1">
        <button className="cursor-pointer max-sm:hidden w-full py-1.5 text-gray-400 border border-gray-400 rounded-md text-xs hover:text-gray-500 hover:border-gray-500 hover:bg-gray-100 transition duration-300">
          Add cart
        </button>
        <button className="cursor-pointer max-sm:hidden w-full py-1.5 text-white rounded-md text-xs bg-greenPrimary hover:bg-emerald-500 transition duration-300">
          Buy now
        </button>
      </div>
    </div>
  )
}

export default ProductCard
