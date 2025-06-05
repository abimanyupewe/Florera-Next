import React from "react";

const StatistikSection = () => {
  // Data dummy untuk statistik
  const stats = [
    { label: "Produk", value: 120, icon: "📦" },
    { label: "Kursus", value: 15, icon: "📚" },
    { label: "Pesanan", value: 320, icon: "🛒" },
    { label: "Pengguna", value: 85, icon: "👥" },
  ];

  return (
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
  );
};

export default StatistikSection;
