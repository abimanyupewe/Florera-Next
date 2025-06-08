import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  FiHome,
  FiBox,
  FiBookOpen,
  FiMessageCircle,
  FiShoppingCart,
  FiImage,
  FiFileText,
  FiFile,
  FiUsers,
  FiUser,
  FiUserCheck,
  FiUserPlus,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const Sidebar = ({ sidebarOpen, setSidebarOpen, minimized, setMinimized }) => {
  const pathname = usePathname();

  // State untuk menyimpan menu yang sedang dibuka (accordion)
  const [openMenus, setOpenMenus] = useState({});

  // Fungsi toggle accordion menu
  const toggleMenu = (menuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname, setSidebarOpen]);

  // Data menu dengan struktur lengkap
  const menuStructure = [
    {
      label: "Main Menu",
      isLabel: true,
    },
    {
      label: "Dashboard",
      href: "/admin",
      icon: <FiHome size={20} />,
    },
    {
      label: "Produk",
      icon: <FiBox size={20} />,
      subMenu: [
        { label: "List Produk", href: "/admin/main/products/list" },
        { label: "Add Product", href: "/admin/main/products/add" },
      ],
    },
    {
      label: "Kursus",
      icon: <FiBookOpen size={20} />,
      subMenu: [
        { label: "List Course", href: "/admin/main/courses/list" },
        { label: "Add Course", href: "/admin/main/courses/add" },
      ],
    },
    {
      label: "Message",
      href: "/admin/main/messages",
      icon: <FiMessageCircle size={20} />,
    },
    {
      label: "Pesanan",
      icon: <FiShoppingCart size={20} />,
      subMenu: [
        { label: "List Pesanan", href: "/admin/main/orders/list" },
        { label: "Status Pesanan", href: "/admin/main/orders/status" },
        { label: "Add Pesanan", href: "/admin/main/orders/add" },
      ],
    },

    {
      label: "Post",
      isLabel: true,
    },
    {
      label: "Banner",
      icon: <FiImage size={20} />,
      subMenu: [
        { label: "List Banner", href: "/admin/post/banner/list" },
        { label: "Add Banner", href: "/admin/post/banner/add" },
      ],
    },
    {
      label: "Dokumentasi",
      icon: <FiFileText size={20} />,
      subMenu: [
        { label: "List Dokumentasi", href: "/admin/post/documentation/list" },
        { label: "Add Dokumentasi", href: "/admin/post/documentation/add" },
      ],
    },
    {
      label: "Blog",
      icon: <FiFile size={20} />,
      subMenu: [
        { label: "List Blog", href: "/admin/post/blog/list" },
        { label: "Add Blog", href: "/admin/post/blog/add" },
      ],
    },
    {
      label: "Team",
      icon: <FiUsers size={20} />,
      subMenu: [
        { label: "List Team", href: "/admin/post/team/list" },
        { label: "Add Team", href: "/admin/post/team/add" },
      ],
    },

    {
      label: "Account Management",
      isLabel: true,
    },
    {
      label: "Pengguna",
      icon: <FiUser size={20} />,
      subMenu: [
        { label: "List Pengguna", href: "/admin/account/users/list" },
        { label: "Add Pengguna", href: "/admin/account/users/add" },
      ],
    },
    {
      label: "Mentor",
      icon: <FiUserCheck size={20} />,
      subMenu: [
        { label: "List Mentor", href: "/admin/account/mentors/list" },
        { label: "Add Mentor", href: "/admin/account/mentors/add" },
      ],
    },
    {
      label: "Seller",
      icon: <FiUserPlus size={20} />,
      subMenu: [
        { label: "List Seller", href: "/admin/account/sellers/list" },
        { label: "Add Seller", href: "/admin/account/sellers/add" },
      ],
    },
  ];

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white z-50
          transform transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${minimized ? "w-20" : "w-64"}
          flex flex-col
          border-r border-gray-200
        `}
        aria-label="Sidebar"
      >
        {/* Header Sidebar */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <h1
            className={`text-xl font-bold whitespace-nowrap text-black ${
              minimized ? "hidden" : "block"
            }`}
          >
            Florera
          </h1>

          {/* Tombol minimize sidebar desktop */}
          <button
            onClick={() => setMinimized(!minimized)}
            className="p-1 rounded-md hover:bg-green-100 focus:outline-none"
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
        <nav className="flex-1 overflow-y-auto mt-2">
          <ul className="flex flex-col gap-1 px-2">
            {menuStructure.map((item, idx) => {
              if (item.isLabel) {
                // Render label section
                return (
                  <li
                    key={`label-${idx}`}
                    className={`px-3 py-2 text-gray-500 font-semibold uppercase tracking-wide ${
                      minimized ? "hidden" : "block"
                    }`}
                  >
                    {item.label}
                  </li>
                );
              }

              const isActive = pathname === item.href;
              const hasSubMenu = Array.isArray(item.subMenu);
              const isOpen = openMenus[item.label];

              return (
                <li key={item.label} className="relative">
                  {/* Menu induk */}
                  <div
                    className={`
                      flex items-center cursor-pointer select-none
                      ${
                        minimized
                          ? "justify-center py-4"
                          : "gap-3 px-3 py-2 rounded-md"
                      }
                      ${
                        isActive && !hasSubMenu
                          ? "bg-green-50 text-green-600 font-semibold border-l-4 border-green-500"
                          : "text-gray-600 hover:bg-green-100 hover:text-green-600"
                      }
                      transition-colors duration-300
                    `}
                    onClick={() => {
                      if (hasSubMenu) {
                        toggleMenu(item.label);
                      } else {
                        // Jika tidak ada submenu, close sidebar di mobile
                        setSidebarOpen(false);
                      }
                    }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {!minimized && <span className="flex-1">{item.label}</span>}

                    {/* Icon dropdown */}
                    {!minimized && hasSubMenu && (
                      <span className="text-green-600">
                        {isOpen ? (
                          <FiChevronUp size={18} />
                        ) : (
                          <FiChevronDown size={18} />
                        )}
                      </span>
                    )}
                  </div>

                  {/* Sub-menu */}
                  {hasSubMenu && isOpen && !minimized && (
                    <ul className="pl-10 mt-1 flex flex-col gap-1">
                      {item.subMenu.map(
                        ({ label: subLabel, href: subHref }) => {
                          const isSubActive = pathname === subHref;
                          return (
                            <li key={subHref}>
                              <Link
                                href={subHref}
                                className={`
                                block px-3 py-2 rounded-md
                                ${
                                  isSubActive
                                    ? "bg-green-100 text-green-600 font-semibold"
                                    : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                                }
                                transition-colors duration-300
                              `}
                                onClick={() => setSidebarOpen(false)}
                              >
                                {subLabel}
                              </Link>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  )}

                  {/* Jika menu tanpa submenu dan minimized, buat Link */}
                  {!hasSubMenu && (
                    <Link
                      href={item.href}
                      className="absolute inset-0"
                      aria-label={item.label}
                      onClick={() => setSidebarOpen(false)}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div
          className={`px-4 py-3 text-sm text-gray-400 ${
            minimized ? "hidden" : "block"
          } border-t border-gray-200`}
        >
          &copy; 2025 Florera
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
