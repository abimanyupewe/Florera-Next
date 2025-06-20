"use client";

import MentorRegister from "@/app/components/auth/MentorRegister";
import { assets } from "@/assets/assets";
import Image from "next/image";

export default function MentorRegisterPage() {
  return (
    <div className="md:flex w-full h-screen p-5">
      <div className="flex md:w-2/5 md:h-full bg-gray-200 rounded-lg justify-center items-center">
        <div>
          <Image
            src={assets.pupuk250ml}
            alt="img"
            className="object-cover w-2xs h-full"
          />
        </div>
      </div>
      <div className="md:w-full flex justify-center items-center">
        <MentorRegister />
      </div>
    </div>
  );
}
