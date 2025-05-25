import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import {
  FiHome,
  FiBox,
  FiBookOpen,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Sidebar = ({ sidebarOpen, setSidebarOpen, minimized, setMinimized }) => {
  const menuItems = [
    { label: "Dashboard", href: "/admin", icon: <FiHome size={20} /> },
    {
      label: "Produk Berkebun",
      href: "/admin/products",
      icon: <FiBox size={20} />,
    },
    {
      label: "Kursus Berkebun",
      href: "/admin/courses",
      icon: <FiBookOpen size={20} />,
    },
    {
      label: "Pesanan",
      href: "/admin/orders",
      icon: <FiShoppingCart size={20} />,
    },
    { label: "Pengguna", href: "/admin/users", icon: <FiUsers size={20} /> },
    {
      label: "Pengaturan",
      href: "/admin/settings",
      icon: <FiSettings size={20} />,
    },
  ];

  const pathname = usePathname();

  // Close sidebar
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname, setSidebarOpen]);

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 h-full bg-greenPrimary text-green-100 z-50
          transform transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${minimized ? "w-20" : "w-60"}
          flex flex-col
        `}
        aria-label="Sidebar"
      >
        {/* Header Sidebar */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-green-800">
          <h1
            className={`text-xl font-bold whitespace-nowrap ${
              minimized ? "hidden" : "block"
            }`}
          >
            Florera
          </h1>

          {/* Tombol minimize sidebar desktop */}
          <button
            onClick={() => setMinimized(!minimized)}
            className="p-1 rounded-md hover:bg-green-700 focus:outline-none"
            aria-label={minimized ? "Perluas sidebar" : "Perkecil sidebar"}
          >
            {minimized ? (
              <FiChevronRight size={20} />
            ) : (
              <FiChevronLeft size={20} />
            )}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto mt-4">
          <ul className="flex flex-col gap-1 px-2">
            {menuItems.map(({ label, icon, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-md hover:bg-emerald-500 transition-colors
                      ${isActive ? "bg-emerald-500 font-semibold" : ""}
                      ${minimized ? "justify-center" : ""}
                    `}
                    onClick={() => setSidebarOpen(false)} // Tutup sidebar di mobile saat klik menu
                  >
                    <span className="text-lg">{icon}</span>
                    {!minimized && <span>{label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div
          className={`px-4 py-3 border-t border-green-800 text-sm text-green-300 ${
            minimized ? "hidden" : "block"
          }`}
        >
          &copy; 2025 Florera
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
