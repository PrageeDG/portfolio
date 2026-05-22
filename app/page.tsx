import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollMotion from "@/components/ScrollMotion";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-darkBg text-textWhite">
      <ScrollMotion />
      <div className="flex-1">
        <Navbar />
        <Hero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}
