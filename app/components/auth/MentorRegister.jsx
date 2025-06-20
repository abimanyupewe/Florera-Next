"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import { assets } from "@/assets/assets";
import Image from "next/image";

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
    setVerificationStatus("processing");

    setTimeout(() => {
      setVerificationStatus("verified");

      setTimeout(() => {
        setVerificationStatus("success");
      }, 3000); // durasi di status "verified"
    }, 3000); // durasi di status "processing"
  };

  // Mulai mengajar, redirect ke login mentor
  const handleStartTeaching = () => {
    router.push("/auth");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-8 w-full">
        {/* <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
          Registrasi Mentor
        </h1> */}

        {/* Step 1: Biodata */}
        {step === 1 && (
          <div className="max-w-lg">
            <h3 className="text-2xl">
              Terimakasih karena telah bergabung menjadi bagian dari Florera
            </h3>
            <p className="mb-4 text-gray-500">
              silakan isi biodata Anda terlebih dahulu.
            </p>
            <div className="space-y-4">
              <div className="">
                <label className="block font-semibold mb-1" htmlFor="name">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Input your full name"
                  value={biodata.name}
                  onChange={handleBiodataChange}
                  className={`w-full mb-1 p-2 pl-3 border border-gray-200 rounded-md outline-gray-200 ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  } outline-gray-200`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="flex w-full gap-2">
                <div className="w-1/2">
                  <label className="block font-semibold mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Input E-mail"
                    value={biodata.email}
                    onChange={handleBiodataChange}
                    className={`w-full mb-1 p-2 pl-3 border border-gray-200 rounded-md outline-gray-200 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } outline-gray-200`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="w-1/2">
                  <label className="block font-semibold mb-1" htmlFor="contact">
                    Kontak
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="Input Contact"
                    value={biodata.contact}
                    onChange={handleBiodataChange}
                    className={`w-full mb-1 p-2 pl-3 border border-gray-200 rounded-md outline-gray-200 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } outline-gray-200`}
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-sm">{errors.contact}</p>
                  )}
                </div>
              </div>

              <div className="flex w-full gap-2 mb-4">
                <div className="w-1/2">
                  <label
                    className="block font-semibold mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="********"
                    value={biodata.password}
                    onChange={handleBiodataChange}
                    className={`w-full mb-1 p-2 pl-3 border border-gray-200 rounded-md outline-gray-200 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } outline-gray-200`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>

                <div className="w-1/2">
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
                    placeholder="********"
                    value={biodata.rePassword}
                    onChange={handleBiodataChange}
                    className={`w-full mb-1 p-2 pl-3 border border-gray-200 rounded-md outline-gray-200 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } outline-gray-200`}
                  />
                  {errors.rePassword && (
                    <p className="text-red-500 text-sm">{errors.rePassword}</p>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className={`w-full bg-greenPrimary text-white py-3 rounded-lg cursor-pointer hover:bg-emerald-500 ${
                Loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              Next
            </button>

            <p className="mt-4 text-sm text-gray-500 text-center">
              Jika ada kendala, silakan{" "}
              <a href="" className="hover:underline text-greenPrimary">
                Hubungi admin
              </a>
              .
            </p>
          </div>
        )}

        {/* Step 2: Persyaratan */}
        {step === 2 && (
          <div className="">
            <p className="mb-4 text-gray-600">
              Isi persyaratan mentor Florera.
            </p>
            <div className="lg:flex gap-4">
              <div className="space-y-4 w-full">
                <div className="flex w-full gap-2">
                  <div className="w-1/2">
                    <label
                      className="block font-semibold mb-1"
                      htmlFor="plantType"
                    >
                      Jenis tanaman
                    </label>
                    <input
                      type="text"
                      id="plantType"
                      name="plantType"
                      placeholder="Yang anda kuasai"
                      className={`w-full mb-1 p-2 pl-3 border rounded-md outline-gray-200 ${
                        errors.plantType ? "border-red-500" : "border-gray-200"
                      }`}
                      value={documents.plantType}
                      onChange={handleDocumentsChange}
                    />
                    {errors.plantType && (
                      <p className="text-red-500 text-sm">{errors.plantType}</p>
                    )}
                  </div>
                  <div className="w-1/2">
                    <label
                      className="block font-semibold mb-1"
                      htmlFor="gardeningExperience"
                    >
                      Pengalaman (tahun)
                    </label>
                    <input
                      type="number"
                      id="gardeningExperience"
                      name="gardeningExperience"
                      placeholder="Tahun"
                      className={`w-full mb-1 p-2 pl-3 border rounded-md outline-gray-200 ${
                        errors.gardeningExperience
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                      value={documents.gardeningExperience}
                      onChange={handleDocumentsChange}
                    />
                    {errors.gardeningExperience && (
                      <p className="text-red-500 text-sm">
                        {errors.gardeningExperience}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <label
                    className="block font-semibold mb-1"
                    htmlFor="motivation"
                  >
                    Motivasi berkebun
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={documents.motivation}
                    onChange={handleDocumentsChange}
                    rows={4}
                    className={`w-full mb-1 p-2 pl-3 border rounded-md outline-gray-200 ${
                      errors.motivation ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.motivation && (
                    <p className="text-red-500 text-sm">{errors.motivation}</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <div className="w-1/2">
                    <label
                      className="block font-semibold mb-1"
                      htmlFor="coachingMedia"
                    >
                      Media Coaching
                    </label>
                    <select
                      id="coachingMedia"
                      name="coachingMedia"
                      value={documents.coachingMedia}
                      onChange={handleDocumentsChange}
                      className={`w-full mb-1 p-2 pl-3 border rounded-md outline-gray-200 ${
                        errors.coachingMedia
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                      required
                    >
                      <option value="">Pilih Media Coaching</option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline / Lapangan</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                    {errors.coachingMedia && (
                      <p className="text-red-500 text-sm">
                        {errors.coachingMedia}
                      </p>
                    )}
                  </div>

                  <div className="w-1/2">
                    <label
                      className="block font-semibold mb-1"
                      htmlFor="availability"
                    >
                      Ketersediaan waktu
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={documents.availability}
                      onChange={handleDocumentsChange}
                      className={`w-full mb-1 p-2 pl-3 border rounded-md outline-gray-200 ${
                        errors.availability
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                      required
                    >
                      <option value="">Pilih Hari</option>
                      <option value="Senin">Senin</option>
                      <option value="Selasa">Selasa</option>
                      <option value="Rabu">Rabu</option>
                      <option value="Kamis">Kamis</option>
                      <option value="Jumat">Jum'at</option>
                      <option value="Sabtu">Sabtu</option>
                      <option value="Minggu">Minggu</option>
                    </select>
                    {errors.availability && (
                      <p className="text-red-500 text-sm">
                        {errors.availability}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <label
                    className="block font-semibold mb-1"
                    htmlFor="portfolio"
                  >
                    Portofolio atau Media Sosial (opsional)
                  </label>
                  <input
                    type="text"
                    id="portfolio"
                    name="portfolio"
                    placeholder="Link"
                    value={documents.portfolio}
                    onChange={handleDocumentsChange}
                    className={`w-full mb-1 p-2 pl-3 border rounded-md outline-gray-200 ${
                      errors.portfolio ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.portfolio && (
                    <p className="text-red-500 text-sm">{errors.portfolio}</p>
                  )}
                </div>
              </div>

              <div>
                <h1 className="font-semibold mb-2">
                  Upload Sertifikat (jika ada)
                </h1>
                <div className="flex gap-2 flex-wrap">
                  {[1, 2, 3, 4].map((num) => (
                    <label
                      key={num}
                      htmlFor={`certificate${num}`}
                      className="cursor-pointer"
                    >
                      <Image
                        className="w-28 h-28 object-cover border border-gray-200 rounded-md"
                        src={assets.upload_area}
                        alt={`certificate upload ${num}`}
                      />
                      <input
                        type="file"
                        name=""
                        id={`image${num}`}
                        required
                        hidden
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-300 text-gray-700 py-2 px-2 md:w-1/5 rounded hover:bg-gray-400 transition"
              >
                Back
              </button>
              <button
                onClick={() => {
                  setStep(3);
                  handleVerify();
                }}
                className={`bg-greenPrimary text-white px-2 py-3 md:w-1/5 rounded-lg cursor-pointer hover:bg-emerald-500 ${
                  Loading ? "cursor-not-allowed opacity-70" : ""
                }`}
              >
                Verifikasi
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500 text-center">
              Jika ada kendala, silakan{" "}
              <a href="" className="hover:underline text-greenPrimary">
                Hubungi admin
              </a>
              .
            </p>
          </div>
        )}

        {/* Step 3: Verifikasi */}
        {step === 3 && (
          <div className="p-6 bg-white rounded-lg shadow-md w-full mx-auto">
            {verificationStatus !== "success" ? (
              <>
                <p className="mb-8 text-center text-gray-700 font-medium text-lg">
                  Status verifikasi data Anda
                </p>
                <p>Data sedang kami proses silakan tunggu..</p>

                {/* Flow step status */}
                <div className="flex items-center justify-between mb-10">
                  <Step
                    label=" Data Sedang Diproses"
                    active={verificationStatus === "processing"}
                    completed={
                      verificationStatus === "verified" ||
                      verificationStatus === "success"
                    }
                    isFirst
                    nextActive={
                      verificationStatus === "verified" ||
                      verificationStatus === "success"
                    }
                  />
                  <Step
                    label="Verifikasi"
                    active={verificationStatus === "verified"}
                    completed={verificationStatus === "success"}
                    nextActive={verificationStatus === "success"}
                  />
                  <Step
                    label="Berhasil"
                    active={verificationStatus === "success"}
                    completed={false}
                    isLast
                  />
                </div>
              </>
            ) : (
              <div className="text-center text-greenPrimary font-semibold mb-6">
                Verifikasi berhasil 🎉
              </div>
            )}

            {/* Tombol hanya muncul saat status berhasil */}
            {verificationStatus === "success" && (
              <button
                onClick={handleStartTeaching}
                className="w-full py-3 rounded-lg bg-greenPrimary text-white font-semibold shadow-md hover:bg-emerald-500 transition"
              >
                Mulai Mengajar
              </button>
            )}

            <p className="mt-6 text-center text-sm text-gray-500">
              Jika ada kendala, silakan{" "}
              <a
                href="#"
                className="text-green-600 hover:underline font-medium"
              >
                hubungi admin
              </a>
              .
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
    <div className="">
      <div className="relative px-1 flex items-center space-x-2 text-center">
        {/* Circle */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-2
      ${
        completed
          ? "bg-greenPrimary text-white shadow-lg"
          : active
          ? "border-2 border-greenPrimary text-greenPrimary font-semibold"
          : "border-2 border-gray-300 text-gray-400"
      }
      transition-colors duration-300 ease-in-out
    `}
        >
          {completed ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : active ? (
            <div className="animate-pulse">●</div>
          ) : (
            "○"
          )}
        </div>

        {/* Label */}
        <span
          className={`text-sm font-semibold ${
            active || completed ? "text-greenPrimary" : "text-gray-400"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
