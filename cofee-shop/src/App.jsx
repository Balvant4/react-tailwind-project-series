import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
  offset: 300,
});

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
