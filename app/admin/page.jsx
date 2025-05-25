import React from "react";

const DashboardAdmin = () => {
  // Data dummy untuk statistik
  const stats = [
    { label: "Produk", value: 120, icon: "📦" },
    { label: "Kursus", value: 15, icon: "📚" },
    { label: "Pesanan", value: 320, icon: "🛒" },
    { label: "Pengguna", value: 85, icon: "👥" },
  ];

  // Data dummy untuk pesanan terbaru
  const recentOrders = [
    { id: "ORD001", customer: "Budi Santoso", date: "2025-05-20", status: "Selesai", total: 150000 },
    { id: "ORD002", customer: "Sari Dewi", date: "2025-05-21", status: "Diproses", total: 75000 },
    { id: "ORD003", customer: "Agus Wijaya", date: "2025-05-22", status: "Dikirim", total: 200000 },
    { id: "ORD004", customer: "Rina Kurnia", date: "2025-05-23", status: "Batal", total: 0 },
  ];

  // Fungsi format rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  // Warna status pesanan
  const statusColors = {
    Selesai: "bg-green-100 text-green-800",
    Diproses: "bg-yellow-100 text-yellow-800",
    Dikirim: "bg-blue-100 text-blue-800",
    Batal: "bg-red-100 text-red-800",
  };

  return (
    <section className="space-y-8">
      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ label, value, icon }) => (
          <div
            key={label}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <div className="text-3xl">{icon}</div>
            <div>
              <p className="text-gray-500 font-medium">{label}</p>
              <p className="text-2xl font-semibold text-gray-900">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pesanan Terbaru */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Pesanan Terbaru</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-700">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 px-3">ID Pesanan</th>
                <th className="py-2 px-3">Pelanggan</th>
                <th className="py-2 px-3">Tanggal</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(({ id, customer, date, status, total }) => (
                <tr key={id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-3 font-mono text-sm">{id}</td>
                  <td className="py-2 px-3">{customer}</td>
                  <td className="py-2 px-3">{new Date(date).toLocaleDateString("id-ID")}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status] || "bg-gray-100 text-gray-800"}`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="py-2 px-3 text-right font-semibold">{formatRupiah(total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DashboardAdmin;
