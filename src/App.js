import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-palette-light dark:bg-palette-dark">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
