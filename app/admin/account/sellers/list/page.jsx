import React from 'react'

const ListSellers = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Daftar Penjual</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Deskripsi</th>
            <th className="py-2 px-4 border-b">Foto</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/* Data penjual akan ditampilkan di sini */}
          <tr>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b">Penjual 1</td>
            <td className="py-2 px-4 border-b">Deskripsi Penjual 1</td>
            <td className="py-2 px-4 border-b">
              <img src="/path/to/photo1.jpg" alt="Penjual 1" className="w-32" />
            </td>
            <td className="py-2 px-4 border-b">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Hapus</button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2</td>
            <td className="py-2 px-4 border-b">Penjual 2</td>
            <td className="py-2 px-4 border-b">Deskripsi Penjual 2</td>
            <td className="py-2 px-4 border-b">
              <img src="/path/to/photo2.jpg" alt="Penjual 2" className="w-32" />
            </td>
            <td className="py-2 px-4 border-b">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListSellers
