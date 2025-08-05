import HeroBanner from "./components/HeroBanner";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <AboutUs />
      <Products />
      <Projects />
    </div>
  );
}
