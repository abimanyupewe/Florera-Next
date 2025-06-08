import React from 'react'

const AddCourse = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Tambah Kursus</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Kursus</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Masukkan nama kursus"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows="4"
            placeholder="Masukkan deskripsi kursus"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Harga</label>
          <input
            type="number"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Masukkan harga kursus"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Tambah Kursus
        </button>
      </form>
    </div>
  )
}

export default AddCourse
