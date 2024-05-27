import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Coat from "./Pages/Coat";
import Sherwani from "./Pages/Sherwani";
import Kurta from "./Pages/Kurta";
import About from "./Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coat" element={<Coat />} />
        <Route path="/kurta" element={<Kurta />} />
        <Route path="/sherwani" element={<Sherwani />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
