import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Footer from "./components/Footer/Footer";
import navigationItems from "./components/Header/navigationItems";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {navigationItems.map(({ text, to }) => (
          <Route
            key={to}
            path={to}
            element={(() => {
              switch (text) {
                case "Home":
                  return <Home />;
                case "Services":
                  return <Service />;
                case "Contact":
                  return <Contact />;
                default:
                  return null;
              }
            })()}
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
