"use client"
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { assets } from '@/assets/assets.js';
import Image from 'next/image.js';
import { useAppFloreraContent } from '../context/AppFloreraContent.jsx';

const Navbar = () => {
    const { isSeller, router } = useAppFloreraContent();

    const [visible, setVisible] = useState(false); // State untuk menu mobile
    const [isCollectionOpen, setIsCollectionOpen] = useState(false); // State untuk dropdown
    const [isCollectionMobileOpen, setIsCollectionMobileOpen] = useState(false); // State untuk dropdown
    const dropdownRef = useRef(null); // Referensi untuk dropdown desktop
    const dropdownMobileRef = useRef(null); // Referensi untuk dropdown mobile
    const [isRotated, setIsRotated] = useState(false); // State untuk rotasi ikon di desktop
    const [isRotatedMobile, setIsRotatedMobile] = useState(false); // State untuk rotasi ikon di mobile
    const [scrolled, setScrolled] = useState(false); // state untuk cek scroll
    const [activeMenu, setActiveMenu] = useState("/"); // State untuk melacak menu aktif

    // Fungsi untuk menutup dropdown saat klik di luar (desktop)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsCollectionOpen(false);
                setIsRotated(false); // Reset rotasi ikon saat dropdown ditutup
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Fungsi untuk menutup dropdown saat klik di luar (mobile)
    useEffect(() => {
        const handleClickOutsideMobile = (event) => {
            if (dropdownMobileRef.current && !dropdownMobileRef.current.contains(event.target)) {
                setIsCollectionMobileOpen(false);
                setIsRotatedMobile(false); // Reset rotasi ikon saat dropdown ditutup
            }
        };

        document.addEventListener('mousedown', handleClickOutsideMobile);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMobile);
        };
    }, []);

    // untuk cek scroll pada nav
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Jika scroll lebih dari 50px, ubah state menjadi true
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`flex z-20 fixed top-0 items-center justify-between py-5 font-medium w-full left-0 lg:px-24 px-8 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-8' : 'bg-transparent'}`}>
            <Link href='/'><Image src={assets.logo} alt="Logo" className='cursor-pointer w-28 md:w-32' /></Link>

            {/* Menu Desktop */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                {["/", "/collection", "/shop", "/about", "/contact"].map((path, index) => {
                    const labels = ["Home", "Collection", "Shop", "About", "Contact"];

                    // Jika path adalah "/collection", tambahkan dropdown
                    if (path === "/collection") {
                        return (
                            <div key={index} className="relative" ref={dropdownRef}>
                                <div
                                    onClick={() => {
                                        setIsCollectionOpen(!isCollectionOpen);
                                        setIsRotated(!isRotated); // Toggle rotasi ikon
                                        setActiveMenu(path); // Set menu aktif
                                    }}
                                    className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-black"
                                >
                                    <div className="flex items-center">
                                        <p>Collection</p>
                                        <Image
                                            src={assets.arrow_drop_down}
                                            alt="Dropdown Arrow"
                                            className={`w-5 transition-transform duration-300 ${isRotated ? 'rotate-180' : 'rotate-0'}`}
                                        />
                                    </div>
                                    <hr className={`w-0 border-none h-[1.5px] bg-black transition-all duration-500 ${activeMenu === path ? 'w-2/4' : 'w-0'}`} />
                                </div>
                                {/* Dropdown Menu */}
                                {isCollectionOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 transition-all duration-300">
                                        <ScrollLink
                                            to="skills" // ID section tujuan
                                            smooth={true} // Efek scroll smooth
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setIsCollectionOpen(false); // Tutup dropdown
                                                setIsRotated(false); // Reset rotasi ikon
                                                setActiveMenu(path); // Set menu aktif
                                            }}
                                        >
                                            Skills
                                        </ScrollLink>
                                        <ScrollLink
                                            to="project"
                                            smooth={true}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setIsCollectionOpen(false);
                                                setIsRotated(false); // Reset rotasi ikon
                                                setActiveMenu(path); // Set menu aktif
                                            }}
                                        >
                                            Projects
                                        </ScrollLink>
                                    </div>
                                )}
                            </div>
                        );
                    }

                    // Untuk path lainnya
                    return (
                        <Link key={index} href={path}>
                            <div
                                className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-black"
                                onClick={() => setActiveMenu(path)} // Set menu aktif saat diklik
                            >
                                <p className={`transition-all duration-500 ${activeMenu === path ? 'text-black' : 'text-gray-400 hover:text-black'}`}>{labels[index]}</p>
                                <hr className={`w-0 border-none h-[1.5px] bg-black transition-all duration-500 ${activeMenu === path ? 'w-2/4' : 'w-0'}`} />
                            </div>
                        </Link>
                    );
                })}
            </ul>

            {/* Tombol Menu Mobile */}
            <div className="flex items-center gap-6">
                <div className="flex items-center md:hidden gap-3">
                {isSeller && <button onClick={() => router.push('/seller')} className="text-xs bg-emerald-600 text-white px-4 py-2 rounded-sm">Admin Dashboard</button>}
            </div>
                <Image onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* Sidebar Menu Mobile */}
            <div
                className={`fixed top-0 left-0 right-0 z-20 bg-white transition-all duration-500 overflow-hidden ease-in ${visible ? 'h-full' : 'h-0'
                    }`}
            >
                <div className="flex flex-col text-gray-600 ">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-2 p-3 cursor-pointer">
                        <Image src={assets.arrow_back} className='w-5' alt="" />
                        <p className="hover:underline">Back</p>
                    </div>
                    <Link href='/'>
                        <p
                            className='py-2 px-6 border-y mx-4 border-gray-100'
                            onClick={() => {
                                setVisible(false);
                                setActiveMenu("/"); // Set menu aktif
                            }}
                        >
                            Home
                        </p>
                    </Link>

                    {/* Dropdown Collection di Mobile */}
                    <div className="relative" ref={dropdownMobileRef}>
                        <div
                            onClick={() => {
                                setIsCollectionMobileOpen(!isCollectionMobileOpen);
                                setIsRotatedMobile(!isRotatedMobile); // Toggle rotasi ikon
                                setActiveMenu("/collection"); // Set menu aktif
                            }}
                            className="flex items-center justify-between py-2 px-6 border-y cursor-pointer mx-4 border-gray-100"
                        >
                            <p>Collection</p>
                            <Image
                                src={assets.arrow_drop_down}
                                alt="Dropdown Arrow"
                                className={`w-5 transition-transform duration-300 ${isRotatedMobile ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </div>
                        {/* Dropdown Menu Mobile */}
                        {isCollectionMobileOpen && (
                            <div className="transition-all duration-300">
                                <ScrollLink
                                    to="skills" // ID section tujuan
                                    smooth={true} // Efek scroll smooth
                                    className="block pl-12 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setIsCollectionMobileOpen(false);
                                        setIsRotatedMobile(false); // Reset rotasi ikon
                                        setVisible(false); // Tutup sidebar mobile
                                        setActiveMenu("/collection"); // Set menu aktif
                                    }}
                                >
                                    Skills
                                </ScrollLink>
                                <ScrollLink
                                    to="project"
                                    smooth={true}
                                    className="block pl-12 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setIsCollectionMobileOpen(false);
                                        setIsRotatedMobile(false); // Reset rotasi ikon
                                        setVisible(false); // Tutup sidebar mobile
                                        setActiveMenu("/collection"); // Set menu aktif
                                    }}
                                >
                                    Projects
                                </ScrollLink>
                            </div>
                        )}
                    </div>

                    <Link href='/about'>
                        <p
                            className='py-2 px-6 border-y mx-4 border-gray-100'
                            onClick={() => {
                                setVisible(false);
                                setActiveMenu("/about"); // Set menu aktif
                            }}
                        >
                            About
                        </p>
                    </Link>
                    <Link href='/contact'>
                        <p
                            className='py-2 px-6 border-y mx-4 border-gray-100'
                            onClick={() => {
                                setVisible(false);
                                setActiveMenu("/contact"); // Set menu aktif
                            }}
                        >
                            Contact
                        </p>
                    </Link>
                    <button className="flex py-2 px-6 border-y items-center gap-2 hover:text-gray-900 transition mx-4 border-gray-100">
                        Account
                    </button>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
                {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
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