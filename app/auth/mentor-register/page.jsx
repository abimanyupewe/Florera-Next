"use client";

import MentorRegister from "@/app/components/auth/MentorRegister";

export default function MentorRegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
          Registrasi Mentor
        </h1>
        <MentorRegister />
      </div>
    </div>
  );
}
