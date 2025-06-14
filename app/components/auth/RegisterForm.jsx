"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm({ role }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulasi proses async, misal API call registrasi
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Bisa tambahkan logic sukses di sini, misal notifikasi
    } catch (error) {
      console.error("Error saat registrasi:", error);
      // Bisa tambahkan notifikasi error di sini
    } finally {
      setLoading(false);
      // Redirect ke halaman login setelah proses selesai
      router.push(`/auth`);
    }
  };

  return (
    <form
      className="bg-white p-8 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold mb-4">
        Register sebagai {role.charAt(0).toUpperCase() + role.slice(1)}
      </h2>

                <h1 className="w-1/2 text-4xl font-black mb-6">Welcome to Florera</h1>

      {role === "user" && (
        <>
          <label className="block mb-2 font-semibold" htmlFor="name">
            Nama
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full mb-4 p-2 border rounded"
            disabled={loading}
          />
        </>
      )}

      {role === "seller" && (
        <>
          <label className="block mb-2 font-semibold" htmlFor="storeName">
            Nama Toko
          </label>
          <input
            type="text"
            id="storeName"
            required
            className="w-full mb-4 p-2 border rounded"
            disabled={loading}
          />
        </>
      )}

      <label className="block mb-2 font-semibold" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        required
        className="w-full mb-4 p-2 border rounded"
        disabled={loading}
      />

      <label className="block mb-2 font-semibold" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        required
        className="w-full mb-6 p-2 border rounded"
        disabled={loading}
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full flex justify-center items-center gap-2 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition ${
          loading ? "cursor-not-allowed opacity-70" : ""
        }`}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        )}
        {loading ? "Loading..." : "Sign Up"}
      </button>
    </form>
  );
}
