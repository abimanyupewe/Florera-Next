import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/about/AboutSection";
import HeaderSection from "../components/about/HeaderSection";
import TeamSection from "../components/about/TeamSection";
import VisiSection from "../components/about/VisiSection";
import DocumentationSection from "../components/about/DocSection";
import BlogSection from "../components/about/BlogSection";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeaderSection />
      <AboutSection />
      <VisiSection />
      <DocumentationSection />
      <BlogSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
