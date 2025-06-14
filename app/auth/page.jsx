"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import Loading from "../components/Loading";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function RoleActionSelector() {
  const [action, setAction] = useState("login"); // login/register
  const [role, setRole] = useState("user"); // user/seller/mentor/admin
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Toggle antara login dan register
  const toggleAction = () => {
    const newAction = action === "login" ? "register" : "login";
    setLoading(true); // Tampilkan loading saat toggle
    setAction(newAction);

    if (newAction === "register" && role === "mentor") {
      router.push("/auth/mentor-register")
      setLoading(false)
    } else {
      // Jika bukan mentor register, cukup set loading false setelah delay simulasi
      setTimeout(() => setLoading(false), 500);
    }
  };

  // Jika register dan role mentor, redirect ke halaman mentor register
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setLoading(true); // Tampilkan loading saat role berubah
    setRole(selectedRole);

    if (action === "register" && selectedRole === "mentor") {
      router.push("/auth/mentor-register").finally(() => setLoading(false));
    } else {
      setTimeout(() => setLoading(false), 500);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <Loading />
      </div>
    );
  }

  return (
    <div className="md:flex h-screen bg-white p-6 justify-center items-center">
      <div className="flex md:w-1/2 md:h-full bg-gray-200 rounded-lg justify-center items-center">
        <div>
          <Image
            src={assets.pupuk250ml}
            alt="img"
            className="object-cover w-2xs h-full"
          />
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg w-full max-w-md mb-8">
          <h1 className="w-1/2 text-2xl md:text-4xl font-black mb-6">Welcome to Florera</h1>

          {/* Dropdown Role Selector */}
          <div className="gap-2 md:flex text-center items-center md:justify-between mb-4 space-y-2">
            {/* Tombol toggle login/register */}
            <div className="gap-2 text-center flex">
              <p>{action === "login" ? "Don't have account?" : "Have account?"}</p>
              <p
                onClick={toggleAction}
                className="text-greenPrimary hover:text-green-700 transition cursor-pointer hover:underline"
                aria-label="Toggle login/register"
                disabled={loading}
              >
                {action === "login" ? "Sign Up" : "Sign in"}
              </p>
            </div>
            <div className="flex gap-2">
              <label htmlFor="role" className="font-semibold text-gray-700">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={handleRoleChange}
                className="border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 transition"
                aria-label="Pilih role pengguna"
                disabled={loading}
                prefix="none"
              >
                <option value="user">User</option>
                <option value="seller">Seller</option>
                <option value="mentor">Mentor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          {/* Render form sesuai action dan role, kecuali mentor register */}
          <div className="w-full max-w-md">
            {action === "login" && (
              <LoginForm role={role} setLoading={setLoading} />
            )}
            {action === "register" && role !== "mentor" && (
              <RegisterForm role={role} setLoading={setLoading} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
