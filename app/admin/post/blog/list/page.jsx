import React from 'react'

const ListBlog = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Daftar Blog</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Judul</th>
            <th className="py-2 px-4 border-b">Konten</th>
            <th className="py-2 px-4 border-b">Gambar</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/* Data blog akan ditampilkan di sini */}
          <tr>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b">Blog 1</td>
            <td className="py-2 px-4 border-b">Konten Blog 1</td>
            <td className="py-2 px-4 border-b">
              <img src="/path/to/image1.jpg" alt="Blog 1" className="w-32" />
            </td>
            <td className="py-2 px-4 border-b">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Hapus</button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2</td>
            <td className="py-2 px-4 border-b">Blog 2</td>
            <td className="py-2 px-4 border-b">Konten Blog 2</td>
            <td className="py-2 px-4 border-b">
              <img src="/path/to/image2.jpg" alt="Blog 2" className="w-32" />
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

export default ListBlog
