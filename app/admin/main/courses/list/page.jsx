import React from 'react'

const ListCourses = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Daftar Kursus</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Harga</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/* Data kursus akan ditampilkan di sini */}
            <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">Kursus A</td>
                <td className="py-2 px-4 border-b">Rp 200.000</td>
                <td className="py-2 px-4 border-b">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline ml-4">Hapus</button>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListCourses
