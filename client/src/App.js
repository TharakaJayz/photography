import React from "react";
import './App.css';

import {Routes,Route}  from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return <div>
    <Navbar />
    <Routes>
    <Route path="/"  element={<Home />}   />
    </Routes>
    
    
    </div>;
};

export default App;
