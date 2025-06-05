import React from "react";
import StatistikSection from "../components/admin/home/StatistikSection";
import TransaksiSection from "../components/admin/home/TransaksiSection";

const DashboardAdmin = () => {
  

  return (
    <div className="space-y-2">
      {/* Statistik */}
      <StatistikSection />

      {/* Pesanan Terbaru */}
      <TransaksiSection />
    </div>
  );
};

export default DashboardAdmin;
