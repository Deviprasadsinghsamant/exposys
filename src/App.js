import React from "react";

import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/navbarcomponents/Login";
import SignUp from "./components/navbarcomponents/SignUp";
import Bestsellers from "./components/navbarcomponents/Bestsellers";
import About from "./components/navbarcomponents/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/bestsellers" element={<Bestsellers />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
