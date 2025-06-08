import React from 'react'

const MessagesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Pesan</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Pengirim</th>
            <th className="py-2 px-4 border-b">Isi Pesan</th>
            <th className="py-2 px-4 border-b">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {/* Data pesan akan ditampilkan di sini */}
            <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">User A</td>
                <td className="py-2 px-4 border-b">Halo, ini pesan pertama.</td>
                <td className="py-2 px-4 border-b">2023-10-01</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">2</td>
                <td className="py-2 px-4 border-b">User B</td>
                <td className="py-2 px-4 border-b">Selamat datang di platform kami!</td>
                <td className="py-2 px-4 border-b">2023-10-02</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MessagesPage
