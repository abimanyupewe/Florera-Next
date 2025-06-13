"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const AddProduct = () => {
  const [input, setInput] = useState("");

  const handleChangeIntruction = (e) => {
    setInput(e.target.value);
  };

  // untuk debug array
  const intructionArrayDebug = input
    .split(",") // untuk pemisahnya
    .map((item) => item.trim())
    .filter((item) => item.length);

  return (
    <form className="space-y-4 md:flex w-full gap-5">
      <div className="space-y-4 p-5 bg-white rounded-lg w-full md:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name Product
          </label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-200 rounded-md py-2 px-3 border outline-gray-100"
            placeholder="Masukkan nama produk"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="mt-1 block w-full border-gray-200 rounded-md py-2 px-3 border outline-gray-100"
            rows="4"
            placeholder="Masukkan deskripsi produk"
            required
          ></textarea>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            How to use (pisahkan dengan koma)
          </label>
          <textarea
            value={input}
            onChange={handleChangeIntruction}
            type="text"
            className="w-full border-gray-200 rounded-md py-2 px-3 border outline-gray-100"
            required
            placeholder="Maukkan intruksi, pisahkan dengan koma"
          />
          {/* <div>
            <h1>Preview array</h1>
            <span>{JSON.stringify(intructionArrayDebug, null, 2)}</span>
          </div> */}
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-4 bg-white rounded-lg p-5">
        <h1>Upload Image</h1>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((num) => (
            <label key={num} htmlFor={`image${num}`}>
              <Image
                className="w-28"
                src={assets.upload_area}
                alt={`image${num}`}
              />
              <input type="file" name="" id={`image${num}`} required hidden />
            </label>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              className="mt-1 block w-full border-gray-200 rounded-md py-2 px-3 border outline-gray-100"
              placeholder="Input Price"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Discount Price
            </label>
            <input
              type="number"
              className="mt-1 block w-full border-gray-200 rounded-md py-2 px-3 border outline-gray-100"
              placeholder="Input Discount"
              required
            />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="text-sm font-medium text-gray-700">Stok</label>
            <input
              type="number"
              className="mt-1 w-full border-gray-200 rounded-md py-2 px-3 border outline-gray-100"
              placeholder="Input Stok"
              required
            />
          </div>
          <div className="w-1/2">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Product Category
            </p>
            <select
              name=""
              id=""
              className="w-full px-3 py-2 border border-gray-200 outline-gray-100"
              required
            >
              <option value="None">None</option>
              <option value="None">Berkebun</option>
              <option value="None">Media Tanam</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 w-full bg-greenPrimary text-white rounded-md hover:bg-emerald-500 transition-colors"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
