import Navbar from "../src/components/Navbar/Navbar";
import Hero from "../src/components/Hero";
import Projects from "./components/Projects";
import WhatiKnow from "../src/pages/WhatiKnow";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className=" bg-primary font-poppins">
      <Navbar />
      <Hero />
      <Projects />
      <WhatiKnow />
      <Contact />
    </div>
  );
};

export default App;
