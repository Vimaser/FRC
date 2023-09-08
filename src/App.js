import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Locations from "./components/Locations";
import backgroundImage from "./img/background.jpg";

const appStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
};

function App() {
  return (
    <div style={appStyle}>
      <Router>
        <Navbar />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
