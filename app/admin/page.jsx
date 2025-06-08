import React from "react";
import StatistikSection from "../components/admin/home/StatistikSection";
import TransaksiSection from "../components/admin/home/TransaksiSection";

const DashboardAdmin = () => {
  return (
    <div className="space-y-2">
      {/* Statistik */}
      <div className="md:flex lg:flex gap-4 space-y-4 md:space-y-0 lg:space-y-0">
        <div className="md:w-1/2 lg:w-1/2 mx-auto">
          <StatistikSection />
        </div>
        <div className="md:w-1/2 lg:w-1/2 mx-auto">
          {/* Pesanan Terbaru */}
          <TransaksiSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
