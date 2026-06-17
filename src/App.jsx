import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recentwork from "./components/Recentwork";
import Resume from "./components/Resume";
import ScrollReveal from "./components/ScrollReveal";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollReveal>
        {" "}
        <Stats />
      </ScrollReveal>
      <ScrollReveal>
        {" "}
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        {" "}
        <Recentwork />
      </ScrollReveal>
      <ScrollReveal>
        {" "}
        <Resume />
      </ScrollReveal>
      <ScrollReveal>
        {" "}
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}

export default App;
