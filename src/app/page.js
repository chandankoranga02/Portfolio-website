
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Vision from "../components/Vision";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Work />
        <Skills />
        <Projects />
        <Education />
        <Vision />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
