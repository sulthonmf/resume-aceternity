import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TechStack from "@/components/TechStack";
import { BentoGridSecondSection } from "@/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechStack />
      <BentoGridSecondSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
