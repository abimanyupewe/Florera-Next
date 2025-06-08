import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Tambah Produk</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Produk</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Masukkan nama produk"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows="4"
            placeholder="Masukkan deskripsi produk"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Harga</label>
          <input
            type="number"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Masukkan harga produk"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Tambah Produk
        </button>
      </form>
    </div>
  );
};

export default AddProduct
