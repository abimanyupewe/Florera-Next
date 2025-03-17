import HeaderSlider from "./components/home/HeaderSlider";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider/>
      </div>
    </div>
  );
}
