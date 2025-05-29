"use client";

import { useAppFloreraContent } from "@/app/context/AppFloreraContent";
import React from "react";
import TeamCard from "./components/TeamCard";

const TeamSection = () => {
  const { teams } = useAppFloreraContent();

  return (
    <section className="w-full py-16 bg-white" id="team">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Team
          </h2>
          <div className="w-20 h-1 bg-greenPrimary mt-4"></div>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Tim profesional yang membuat Florera menjadi platform berkebun
            terbaik di Indonesia
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 pb-14 w-full">
          {teams.slice(0, 5).map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>

          {/* Mobile View */}
        <div className="md:hidden w-full mt-6 pb-14">
          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 hide-scrollbar">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="flex-none w-[calc(80%-1rem)] snap-start" // Adjust width as needed
                >
                  <TeamCard team={team} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
