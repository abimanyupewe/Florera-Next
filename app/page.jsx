import Footer from "./components/Footer";
import CourseSection from "./components/home/CourseSection";
import HeaderSlider from "./components/home/HeaderSlider";
import ProductSection from "./components/home/ProductSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider/>
        <ProductSection/>
        <CourseSection/>
      </div>
      <Footer />
    </div>
  );
}
