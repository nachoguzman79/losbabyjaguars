import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Column from "./components/Column";

import Home from "./pages/Home";
import About from "./pages/About";
import Videos from "./pages/Videos";
import Music from "./pages/Music";
import Photos from "./pages/Photos";
import PressPack from "./pages/PressPack";
import Contact from "./pages/Contact";

const App = () => {
  const images = [
    { src: "/j1.png", alt: "Jaguar 1", className: "mb-4" },
    { src: "/j2.png", alt: "Jaguar 2" },
    { src: "/j1.png", alt: "Jaguar 1", className: "mb-4" },
    { src: "/j2.png", alt: "Jaguar 2" },
  ];

  return (
    <Router>
      <div
        className="min-h-screen bg-fixed pt-20 bg-customBackgroundLila"
        
      >
        <NavBar />
        <div className="flex">
          {/* left column */}
          <Column images={images} />

          {/* main content */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/music" element={<Music />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/press-pack" element={<PressPack />} />
            </Routes>
          </div>

          {/* right column*/}
          <Column images={images} />
        </div>
      </div>
    </Router>
  );
};

export default App;
