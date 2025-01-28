import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import Music from './pages/Music';
import PressPack from './pages/PressPack';

const App = () => {
  return (
    <Router>
      {/* <div
        className="min-h-screen bg-cover bg-center bg-fixed pt-16"
        style={{ backgroundImage: "url('/lbj-background.jpg')" }}
      ></div> */}
       <div
        className="min-h-screen bg-fixed pt-16"
        // style={{ backgroundColor: "#B8B24E" }}
        style={{ backgroundColor: "#D976CB" }}
      >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/music" element={<Music />} />
        <Route path="/press-pack" element={<PressPack />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
