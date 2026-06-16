// import About from "./components/About";
// import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Projects from "./components/Portfolio";
import Recentwork from "./components/Recentwork";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      {/* <About /> */}
      <Services />
      <Recentwork />
      <Resume />
      <Skills />
      {/* <Projects />
      <Contact /> */}
    </>
  );
}

export default App;
