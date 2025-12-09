import Hero from "./components/Hero";
import About from "./components/About";
import Specialties from "./components/Specialties";
import Differentials from "./components/Differentials";
import Location from "./components/Locations";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Specialties />
      <Differentials />
      <Location />
      <FAQ />
      <Footer />
    </>
  );
}
