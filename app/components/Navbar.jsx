"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import { assets } from "@/assets/assets.js";
import Image from "next/image.js";
import { useAppFloreraContent } from "../context/AppFloreraContent.jsx";

const Navbar = () => {
    const { isSeller, router } = useAppFloreraContent();
    const pathname = usePathname(); // Ambil path saat ini

    const [visible, setVisible] = useState(false); // State untuk menu mobile

    const collectionRef = useRef(null);
    const aboutRef = useRef(null);
    const collectionMobileRef = useRef(null);
    const aboutMobileRef = useRef(null);

    const [isCollectionOpen, setIsCollectionOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isCollectionMobileOpen, setIsCollectionMobileOpen] = useState(false);
    const [isAboutMobileOpen, setIsAboutMobileOpen] = useState(false);
    const [isRotatedColl, setIsRotatedColl] = useState(false);
    const [isRotatedAbout, setIsRotatedAbout] = useState(false);
    const [isRotatedMobile, setIsRotatedMobile] = useState(false);

    const [scrolled, setScrolled] = useState(false); // State untuk cek scroll

    // Fungsi untuk menutup dropdown saat klik di luar (desktop)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                collectionRef.current &&
                !collectionRef.current.contains(event.target) &&
                aboutRef.current &&
                !aboutRef.current.contains(event.target)
            ) {
                setIsCollectionOpen(false);
                setIsAboutOpen(false);
                setIsRotatedColl(false);
                setIsRotatedAbout(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Fungsi untuk menutup dropdown saat klik di luar (mobile)
    useEffect(() => {
        const handleClickOutsideMobile = (event) => {
            if (
                collectionMobileRef.current &&
                !collectionMobileRef.current.contains(event.target) &&
                aboutMobileRef.current &&
                !aboutMobileRef.current.contains(event.target)
            ) {
                setIsCollectionMobileOpen(false);
                setIsAboutMobileOpen(false);
                setIsRotatedMobile(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideMobile);
        return () =>
            document.removeEventListener("mousedown", handleClickOutsideMobile);
    }, []);

    const isAboutPage = pathname.startsWith("/about");
    useEffect(() => {
        if (!isAboutPage) {
            setIsAboutOpen(false);
        }
    }, [pathname, isAboutPage]);

    // Cek scroll pada nav
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`flex z-20 fixed top-0 items-center justify-between py-5 font-medium w-full left-0 px-6 md:px-16 lg:px-32 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-8" : "bg-transparent"
                }`}
        >
            <Link href="/">
                <Image
                    src={assets.logo}
                    alt="Logo"
                    className="cursor-pointer w-28 md:w-32"
                />
            </Link>

            {/* Menu Desktop */}
            <ul className="hidden sm:flex gap-5 text-sm">
                {["/", "/collection", "/about", "/contact"].map((path, index) => {
                    const labels = ["Home", "Collection", "About", "Contact"];
                    const isActive = pathname === path;

                    // Jika path adalah "/collection", tambahkan dropdown
                    if (path === "/collection") {
                        return (
                            <div key={index} className="relative" ref={collectionRef}>
                                <div
                                    onClick={() => {
                                        setIsCollectionOpen(!isCollectionOpen);
                                        setIsRotatedColl(!isRotatedColl);
                                    }}
                                    className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-black"
                                >
                                    <div className="flex items-center">
                                        <p>Collection</p>
                                        <Image
                                            src={assets.arrow_drop_down}
                                            alt="Dropdown Arrow"
                                            className={`w-5 transition-transform duration-300 ${isRotatedColl ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </div>
                                    <hr
                                        className={`w-0 border-none h-[1.5px] bg-black transition-all duration-500 ${isActive ? "w-2/4" : "w-0"
                                            }`}
                                    />
                                </div>
                                {/* Dropdown Menu */}
                                {isCollectionOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50 transition-all duration-300">
                                        <Link
                                            href="/all-products"
                                            onClick={() => {
                                                setIsCollectionOpen(false);
                                                setIsRotatedColl(false);
                                            }}
                                        >
                                            <p className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                                Products
                                            </p>
                                        </Link>
                                        <Link
                                            href="/all-courses"
                                            onClick={() => {
                                                setIsCollectionOpen(false);
                                                setIsRotatedColl(false);
                                            }}
                                        >
                                            <p className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                                Courses
                                            </p>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    }

                    // Jika path adalah "/about", tambahkan dropdown
                    if (path === "/about") {
                        return isAboutPage ? (
                            // Tampilkan dropdown hanya di halaman About
                            <div key={index} className="relative">
                                <div
                                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                                    className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-black"
                                >
                                    <div className="flex items-center">
                                        <p>About</p>
                                        <Image
                                            src={assets.arrow_drop_down}
                                            alt="Dropdown Arrow"
                                            className={`w-5 transition-transform duration-300 ${isAboutOpen ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </div>
                                    <hr
                                        className={`w-0 border-none h-[1.5px] bg-black transition-all duration-500 ${isAboutPage ? "w-2/4" : "w-0"
                                            }`}
                                    />
                                </div>

                                {isAboutOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                                        <ScrollLink
                                            to="project"
                                            smooth={true}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setIsCollectionMobileOpen(false);
                                                setIsRotatedMobile(false);
                                            }}
                                        >
                                            Our Team
                                        </ScrollLink>
                                        <ScrollLink
                                            to="project"
                                            smooth={true}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setIsCollectionMobileOpen(false);
                                                setIsRotatedMobile(false);
                                            }}
                                        >
                                            Our Mission
                                        </ScrollLink>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // Tampilkan sebagai navigasi biasa di halaman lain
                            <Link key={index} href={path}>
                                <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-black">
                                    <p
                                        className={`transition-all duration-500 hover:text-black ${isActive ? "text-black" : "text-gray-400"
                                            }`}
                                    >
                                        {labels[index]}
                                    </p>
                                    <hr
                                        className={`w-0 border-none h-[1.5px] bg-black transition-all duration-500 ${isActive ? "w-2/4" : "w-0"
                                            }`}
                                    />
                                </div>
                            </Link>
                        );
                    }

                    // Untuk path lainnya
                    return (
                        <Link key={index} href={path}>
                            <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-black">
                                <p
                                    className={`transition-all duration-500 hover:text-black ${isActive ? "text-black" : "text-gray-400"
                                        }`}
                                >
                                    {labels[index]}
                                </p>
                                <hr
                                    className={`w-0 border-none h-[1.5px] bg-black transition-all duration-500 ${isActive ? "w-2/4" : "w-0"
                                        }`}
                                />
                            </div>
                        </Link>
                    );
                })}
            </ul>

            {/* Tombol Menu Mobile */}
            <div className="flex items-center gap-6">
                <div className="flex items-center md:hidden gap-3">
                    {isSeller && (
                        <button
                            onClick={() => router.push("/seller")}
                            className="text-xs bg-emerald-600 text-white px-4 py-2 rounded-sm"
                        >
                            Admin Dashboard
                        </button>
                    )}
                </div>
                <Image
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className="w-5 cursor-pointer sm:hidden"
                    alt=""
                />
            </div>

            {/* Sidebar Menu Mobile */}
            <div
                className={`fixed top-0 left-0 right-0 z-20 bg-white transition-all duration-500 overflow-hidden ease-in ${visible ? "h-full" : "h-0"
                    }`}
            >
                <div className="flex flex-col text-gray-600">
                    <div
                        onClick={() => setVisible(false)}
                        className="flex items-center gap-2 p-3 cursor-pointer"
                    >
                        <Image src={assets.arrow_back} className="w-5" alt="" />
                        <p className="hover:underline">Back</p>
                    </div>
                    {["/", "/collection", "/shop", "/about", "/contact"].map(
                        (path, index) => {
                            const labels = ["Home", "Collection", "Shop", "About", "Contact"];
                            const isActive = pathname === path;

                            if (path === "/collection") {
                                return (
                                    <div
                                        key={index}
                                        className="relative"
                                        ref={collectionMobileRef}
                                    >
                                        <div
                                            onClick={() => {
                                                setIsCollectionMobileOpen(!isCollectionMobileOpen);
                                                setIsRotatedMobile(!isRotatedMobile);
                                            }}
                                            className="py-2 px-6 border-y mx-4 border-gray-100 cursor-pointer"
                                        >
                                            <div className="flex items-center justify-between">
                                                <p>Collection</p>
                                                <Image
                                                    src={assets.arrow_drop_down}
                                                    alt="Dropdown Arrow"
                                                    className={`w-5 transition-transform duration-300 ${isRotatedMobile ? "rotate-180" : "rotate-0"
                                                        }`}
                                                />
                                            </div>
                                        </div>
                                        {/* Dropdown Menu Mobile */}
                                        {isCollectionMobileOpen && (
                                            <div className="pl-12">
                                                <ScrollLink
                                                    to="skills"
                                                    smooth={true}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        setIsCollectionMobileOpen(false);
                                                        setIsRotatedMobile(false);
                                                    }}
                                                >
                                                    Skills
                                                </ScrollLink>
                                                <ScrollLink
                                                    to="project"
                                                    smooth={true}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        setIsCollectionMobileOpen(false);
                                                        setIsRotatedMobile(false);
                                                    }}
                                                >
                                                    Projects
                                                </ScrollLink>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            if (path === "/about") {
                                return isAboutPage ? (
                                    // Tampilkan dropdown hanya di halaman About
                                    <div key={index} className="relative">
                                        <div
                                            onClick={() => setIsAboutOpen(!isAboutOpen)}
                                            className="py-2 px-6 border-y mx-4 border-gray-100 cursor-pointer"
                                        >
                                            <div className="flex items-center justify-between">
                                                <p>About</p>
                                                <Image
                                                    src={assets.arrow_drop_down}
                                                    alt="Dropdown Arrow"
                                                    className={`w-5 transition-transform duration-300 ${isAboutOpen ? "rotate-180" : "rotate-0"
                                                        }`}
                                                />
                                            </div>
                                        </div>

                                        {isAboutOpen && (
                                            <div className="pl-12">
                                                <ScrollLink
                                                    to="project"
                                                    smooth={true}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        setIsCollectionMobileOpen(false);
                                                        setIsRotatedMobile(false);
                                                    }}
                                                >
                                                    Our Team
                                                </ScrollLink>
                                                <ScrollLink
                                                    to="project"
                                                    smooth={true}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        setIsCollectionMobileOpen(false);
                                                        setIsRotatedMobile(false);
                                                    }}
                                                >
                                                    Our Mission
                                                </ScrollLink>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    // Tampilkan sebagai navigasi biasa di halaman lain
                                    <Link key={index} href={path}>
                                        <p
                                            className={`py-2 px-6 border-y mx-4 border-gray-100 ${isActive ? "text-black" : "text-gray-400"
                                                }`}
                                        >
                                            {labels[index]}
                                        </p>
                                    </Link>
                                );
                            }

                            return (
                                <Link key={index} href={path}>
                                    <p
                                        className="py-2 px-6 border-y mx-4 border-gray-100"
                                        onClick={() => {
                                            setVisible(false);
                                        }}
                                    >
                                        {labels[index]}
                                    </p>
                                </Link>
                            );
                        }
                    )}
                    <button className="flex py-2 px-6 border-y items-center gap-2 hover:text-gray-900 transition mx-4 border-gray-100">
                        Account
                    </button>
                </div>
            </div>

            {/* Tombol Desktop */}
            <div className="hidden md:flex items-center gap-4">
                {isSeller && (
                    <button
                        onClick={() => router.push("/seller")}
                        className="text-xs bg-emerald-600 text-white px-4 py-2 rounded-sm"
                    >
                        Seller Dashboard
                    </button>
                )}
                <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
                <button className="flex items-center gap-2 hover:text-gray-900 transition">
                    <Image src={assets.user_icon} alt="user icon" className="w-4 h-4" />
                    Account
                </button>
            </div>
        </header>
    );
};

export default Navbar;
