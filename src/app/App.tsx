import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { Certifications } from "@/app/components/Certifications";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
