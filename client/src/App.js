import React, { useEffect, useState } from "react";
import './App.css';

import {Routes,Route}  from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import GallaryPage from "./pages/Gallary_page/GallaryPage";

const App = () => {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() =>{
      setIsLoading(false);
    },1000)
  })
  return <div className= {isLoading ? ` main_page main_style_loading`:` main_page main_style_loaded`}>
   <Navbar />
    <Routes>
    <Route path="/"  element={<Home />}   />
    <Route path="/gallery"  element={<Gallery />}   />
    <Route path="/contact"  element={<Contact />}   />
    <Route path="/about"  element={<About />}   />
    <Route path="/gallery/: "  element={<GallaryPage />}   />
    </Routes>
    
    
    </div>;
};

export default App;
