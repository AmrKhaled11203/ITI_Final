
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";

import Home from "./pages/Home";
import Services from "./pages/Services";

// import Works from "./pages/Works";
import Process from "./pages/Process";
import Works from "./pages/Works";
import About from "./pages/About";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/works" element={<Works />} />*/}
        <Route path="/process" element={<Process />} />
        <Route path="/works" element={<Works />} />
        {/* <Route path="/process" element={<Process />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>)
}

export default App;
