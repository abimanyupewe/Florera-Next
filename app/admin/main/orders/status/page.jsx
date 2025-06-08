import React from 'react'

const OrderStatus = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Status Pesanan</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nama Pelanggan</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {/* Data status pesanan akan ditampilkan di sini */}
          <tr>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b">Pelanggan A</td>
            <td className="py-2 px-4 border-b">Diproses</td>
            <td className="py-2 px-4 border-b">2023-10-01</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2</td>
            <td className="py-2 px-4 border-b">Pelanggan B</td>
            <td className="py-2 px-4 border-b">Dikirim</td>
            <td className="py-2 px-4 border-b">2023-10-02</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderStatus
