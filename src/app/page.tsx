import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SpecialDishes from "@/components/sections/SpecialDishes";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <Hero />
      <About />
      <SpecialDishes />
      <Menu />
      <Gallery />
      <Services />
      <Footer />
    </main>
  );
}
