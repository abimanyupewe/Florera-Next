import React from 'react'

const ListUsers = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Daftar Pengguna</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/* Data pengguna akan ditampilkan di sini */}
          <tr>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b">Pengguna 1</td>
            <td className="py-2 px-4 border-b">pengguna1@example.com</td>
            <td className="py-2 px-4 border-b">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Hapus</button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2</td>
            <td className="py-2 px-4 border-b">Pengguna 2</td>
            <td className="py-2 px-4 border-b">pengguna2@example.com</td>
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

export default ListUsers
