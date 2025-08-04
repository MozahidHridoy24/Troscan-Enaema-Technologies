import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
    </div>
  );
}
