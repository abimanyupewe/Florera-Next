import React from 'react'

const AddSeller = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Tambah Penjual</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Masukkan nama penjual"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Masukkan deskripsi penjual"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Foto</label>
          <input
            type="file"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Tambah Penjual
        </button>
      </form>
    </div>
  )
}

export default AddSeller
