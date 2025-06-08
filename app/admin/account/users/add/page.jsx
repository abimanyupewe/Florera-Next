import React from 'react'

const AddUser = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Tambah Pengguna</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Masukkan nama pengguna"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Masukkan email pengguna"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Kata Sandi</label>
          <input
            type="password"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Masukkan kata sandi pengguna"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Tambah Pengguna
        </button>
      </form>
    </div>
  )
}

export default AddUser
