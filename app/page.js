import HeroBanner from "./components/HeroBanner";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Projects from "./components/Projects";
import News from "./components/News";
import OurExpertise from "./components/OurExpertise";
import GetInTouch from "./components/GetInTouch";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <AboutUs />
      <Products />
      <Projects />
      <OurExpertise />
      <GetInTouch />
      <News />
    </div>
  );
}
