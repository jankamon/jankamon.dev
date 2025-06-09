import AboutMe from "./components/AboutMe";
import Expirience from "./components/Expirience";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="flex flex-col items-center justify-items-center w-full md:w-3/5 xl:w-2/5 mx-auto">
      <Menu />
      <div className="flex flex-col w-full items-start justify-start gap-8 p-4">
        <AboutMe />
        <Skills />
        <Expirience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default App;
