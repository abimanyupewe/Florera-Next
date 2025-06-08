import React from 'react'

const ListTeam = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Daftar Tim</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Deskripsi</th>
            <th className="py-2 px-4 border-b">Logo</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/* Data tim akan ditampilkan di sini */}
          <tr>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b">Tim 1</td>
            <td className="py-2 px-4 border-b">Deskripsi Tim 1</td>
            <td className="py-2 px-4 border-b">
              <img src="/path/to/logo1.jpg" alt="Tim 1" className="w-32" />
            </td>
            <td className="py-2 px-4 border-b">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Hapus</button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2</td>
            <td className="py-2 px-4 border-b">Tim 2</td>
            <td className="py-2 px-4 border-b">Deskripsi Tim 2</td>
            <td className="py-2 px-4 border-b">
              <img src="/path/to/logo2.jpg" alt="Tim 2" className="w-32" />
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

export default ListTeam
