"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm({ role, setLoading }) {
  const [loadingLocal, setLoadingLocal] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingLocal(true);

    try {
      // Simulasi proses login async
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect berdasarkan role
      switch (role) {
        case "admin":
          router.push("/admin");
          break;
        case "seller":
          router.push("/dashboard/seller");
          break;
        case "mentor":
          router.push("/dashboard/mentor");
          break;
        case "user":
        default:
          router.push("/");
          break;
      }
    } catch (error) {
      console.error("Login gagal:", error);
    } finally {
      setLoading(false);
      setLoadingLocal(false);
    }
  };

  return (
    <form
      className=""
      onSubmit={handleSubmit}
    >
      {/* Form fields */}
      {/* <h2 className="text-base text-greenPrimary font-semibold mb-2">
        Login as {role.charAt(0).toUpperCase() + role.slice(1)}
      </h2> */}

      <label className="block mb-2 font-semibold" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        required
        placeholder="Input E-mail"
        className="w-full mb-4 p-2 pl-3 border border-gray-200 rounded-md outline-gray-200"
        disabled={loadingLocal}
      />

      <label className="block mb-2 font-semibold" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        required
        placeholder="*******"
        className="w-full mb-4 p-2 pl-3 border border-gray-200 rounded-md outline-gray-200"
        disabled={loadingLocal}
      />

      <button
        type="submit"
        disabled={loadingLocal}
        className={`w-full bg-greenPrimary text-white py-3 rounded-lg cursor-pointer hover:bg-emerald-500 transition ${
          loadingLocal ? "cursor-not-allowed opacity-70" : ""
        }`}
      >
        {loadingLocal ? (
          <svg
            className="animate-spin h-5 w-5 mx-auto text-white"
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
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
}
