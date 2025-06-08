import React from 'react'

const ListDocumentation = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Daftar Dokumentasi</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Judul</th>
            <th className="py-2 px-4 border-b">Konten</th>
            <th className="py-2 px-4 border-b">File</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/* Data dokumentasi akan ditampilkan di sini */}
          <tr>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b">Dokumentasi 1</td>
            <td className="py-2 px-4 border-b">Konten Dokumentasi 1</td>
            <td className="py-2 px-4 border-b">
              <a href="/path/to/file1.pdf" className="text-blue-600 hover:underline">Lihat File</a>
            </td>
            <td className="py-2 px-4 border-b">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Hapus</button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2</td>
            <td className="py-2 px-4 border-b">Dokumentasi 2</td>
            <td className="py-2 px-4 border-b">Konten Dokumentasi 2</td>
            <td className="py-2 px-4 border-b">
              <a href="/path/to/file2.pdf" className="text-blue-600 hover:underline">Lihat File</a>
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

export default ListDocumentation
