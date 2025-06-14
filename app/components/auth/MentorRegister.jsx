"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MentorRegister() {
  const router = useRouter();

  // Step: 1 = Biodata, 2 = Dokumen & Fikasi, 3 = Verifikasi
  const [step, setStep] = useState(1);

  // Form state biodata
  const [biodata, setBiodata] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    rePassword: "",
  });

  // Form state dokumen & fikasi
  const [documents, setDocuments] = useState({
    documentInfo: "",
    fikasiField: "",
  });

  // Status verifikasi: "processing", "verified", "success"
  const [verificationStatus, setVerificationStatus] = useState("processing");

  // Error state biodata validation
  const [errors, setErrors] = useState({});

  // Handler input biodata
  const handleBiodataChange = (e) => {
    setBiodata({ ...biodata, [e.target.name]: e.target.value });
  };

  // Handler input dokumen & fikasi
  const handleDocumentsChange = (e) => {
    setDocuments({ ...documents, [e.target.name]: e.target.value });
  };

  // Validasi biodata sederhana
  const validateBiodata = () => {
    const newErrors = {};
    if (!biodata.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!biodata.email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(biodata.email))
      newErrors.email = "Email tidak valid";
    if (!biodata.contact.trim()) newErrors.contact = "Kontak wajib diisi";
    if (!biodata.password) newErrors.password = "Password wajib diisi";
    if (biodata.password !== biodata.rePassword)
      newErrors.rePassword = "Password tidak sama";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Next dari biodata ke dokumen
  const handleNext = () => {
    if (validateBiodata()) {
      setStep(2);
    }
  };

  // Simulasi verifikasi (bisa diganti dengan API call)
  const handleVerify = () => {
    setVerificationStatus("verified");
    setTimeout(() => {
      setVerificationStatus("success");
    }, 3000);
  };

  // Mulai mengajar, redirect ke login mentor
  const handleStartTeaching = () => {
    router.push("/auth?role=mentor&action=login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
          Registrasi Mentor
        </h1>

        {/* Step 1: Biodata */}
        {step === 1 && (
          <div>
            <p className="mb-4 text-gray-600">
              Isi biodata kamu terlebih dahulu.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-1" htmlFor="name">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={biodata.name}
                  onChange={handleBiodataChange}
                  className={`w-full p-3 border rounded ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-green-400`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={biodata.email}
                  onChange={handleBiodataChange}
                  className={`w-full p-3 border rounded ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-green-400`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1" htmlFor="contact">
                  Kontak
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={biodata.contact}
                  onChange={handleBiodataChange}
                  className={`w-full p-3 border rounded ${
                    errors.contact ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-green-400`}
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={biodata.password}
                  onChange={handleBiodataChange}
                  className={`w-full p-3 border rounded ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-green-400`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div>
                <label
                  className="block font-semibold mb-1"
                  htmlFor="rePassword"
                >
                  Ulangi Password
                </label>
                <input
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  value={biodata.rePassword}
                  onChange={handleBiodataChange}
                  className={`w-full p-3 border rounded ${
                    errors.rePassword ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-green-400`}
                />
                {errors.rePassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.rePassword}</p>
                )}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
            >
              Next
            </button>

            <p className="mt-4 text-sm text-gray-500">
              Jika ada kendala, silakan hubungi admin.
            </p>
          </div>
        )}

        {/* Step 2: Dokumen & Fikasi */}
        {step === 2 && (
          <div>
            <p className="mb-4 text-gray-600">
              Isi dokumen dan bidang fikasi kamu.
            </p>
            <div className="space-y-4">
              <div>
                <label
                  className="block font-semibold mb-1"
                  htmlFor="documentInfo"
                >
                  Dokumen Pendukung
                </label>
                <textarea
                  id="documentInfo"
                  name="documentInfo"
                  value={documents.documentInfo}
                  onChange={handleDocumentsChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1" htmlFor="fikasiField">
                  Bidang Fikasi
                </label>
                <input
                  type="text"
                  id="fikasiField"
                  name="fikasiField"
                  value={documents.fikasiField}
                  onChange={handleDocumentsChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
              >
                Next
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Jika ada kendala, silakan hubungi admin.
            </p>
          </div>
        )}

        {/* Step 3: Verifikasi */}
        {step === 3 && (
          <div>
            <p className="mb-6 text-gray-600">
              Status verifikasi data kamu:
            </p>

            {/* Flow step status */}
            <div className="flex justify-between mb-8">
              <Step
                label="Sedang Diproses"
                active={verificationStatus === "processing"}
                completed={
                  verificationStatus === "verified" ||
                  verificationStatus === "success"
                }
              />
              <Step
                label="Verifikasi"
                active={verificationStatus === "verified"}
                completed={verificationStatus === "success"}
              />
              <Step
                label="Berhasil"
                active={verificationStatus === "success"}
                completed={false}
              />
            </div>

            {/* Button verifikasi */}
            {verificationStatus === "processing" && (
              <button
                onClick={handleVerify}
                className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
              >
                Verifikasi
              </button>
            )}

            {/* Jika sudah berhasil */}
            {verificationStatus === "success" && (
              <button
                onClick={handleStartTeaching}
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Mulai Mengajar
              </button>
            )}

            <p className="mt-4 text-sm text-gray-500">
              Jika ada kendala, silakan hubungi admin.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Komponen Step untuk flow status verifikasi
function Step({ label, active, completed }) {
  return (
    <div className="flex flex-col items-center w-1/3">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
          completed
            ? "bg-green-600 text-white"
            : active
            ? "border-2 border-green-600 text-green-600"
            : "border-2 border-gray-300 text-gray-400"
        }`}
      >
        {completed ? "✓" : active ? "●" : "○"}
      </div>
      <span
        className={`text-sm font-semibold ${
          active || completed ? "text-green-700" : "text-gray-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
