import React, { useEffect, useState } from "react";
import './App.css';

import {Routes,Route}  from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";

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
    </Routes>
    
    
    </div>;
};

export default App;
