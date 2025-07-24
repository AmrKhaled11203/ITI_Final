import React from "react";
import { Routes, Route } from "react-router-dom";

import Careers from "./pages/Careers";
import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Works from "./pages/Works";
// import Process from "./pages/Process";
import About from "./pages/About";
// import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar /> {/* ✅ ثابت في كل الصفحات */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/process" element={<Process />} />
         */}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} /> {/* ✅ صفحة Careers */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
