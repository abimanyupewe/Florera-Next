"use client";

import React, { useState } from "react";
import {FiUser, FiChevronDown } from "react-icons/fi";

const HeaderAdmin = () => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header
      className="flex items-center justify-between bg-white text-gray-600 px-5 py-3 fixed top-0 right-0 left-[var(--sidebar-width)] transition-left duration-300 z-30"
      style={{ left: "var(--sidebar-width)" }}
    >
      {/* Judul / Logo */}
      <h1 className="text-xl font-bold">Admin Panel</h1>

      {/* Profil pengguna */}
      <div className="relative">
        <button
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 "
          aria-haspopup="true"
          aria-expanded={profileMenuOpen}
        >
          <FiUser size={20} />
          <span className="hidden sm:block">Admin</span>
          <FiChevronDown size={16} />
        </button>

        {profileMenuOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-white text-green-900 rounded-md shadow-lg z-50">
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Profil</button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Keluar</button>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default HeaderAdmin;
