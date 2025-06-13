"use client";

import React, { useState, useEffect } from "react";
import HeaderAdmin from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";


const LayoutAdmin = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarMinimized, setSidebarMinimized] = useState(true);

  // Update CSS variable untuk sidebar width
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--sidebar-width", sidebarMinimized ? "5rem" : "15rem");
  }, [sidebarMinimized]);

  return (
    <div className="flex h-screen">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        minimized={sidebarMinimized}
        setMinimized={setSidebarMinimized}
      />

      <div
        className="flex flex-col flex-1 overflow-hidden transition-all duration-300"
        style={{ marginLeft: "var(--sidebar-width)" }}
      >
        <HeaderAdmin
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          minimized={sidebarMinimized}
        />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 pt-20">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
