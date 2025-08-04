import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <AboutUs />
    </div>
  );
}
