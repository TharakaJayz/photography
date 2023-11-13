import React, { useEffect, useState ,Suspense} from "react";
import './App.css';

import {Routes,Route}  from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
// import Gallery from "./pages/Gallery/Gallery";
// import Contact from "./pages/Contact/Contact";
// import About from "./pages/About/About";
import GallaryPage from "./pages/Gallary_page/GallaryPage";

const Gallery = React.lazy(()=>import("./pages/Gallery/Gallery"));
const Contact = React.lazy(()=>import("./pages/Contact/Contact"));
const About = React.lazy(()=>import("./pages/About/About"));
const App = () => {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() =>{
      setIsLoading(false);
    },1000)
  })
  return <div className= {isLoading ? ` main_page main_style_loading`:` main_page main_style_loaded`}>
   <Navbar />
   <Suspense fallback  ={<p>Loading .....</p>}>

    <Routes>
    <Route path="/"  element={<Home />}   />
    <Route path="/gallery"  element={<Gallery />}   />
    <Route path="/contact"  element={<Contact />}   />
    <Route path="/about"  element={<About />}   />
    <Route path="/gallery/:albumID"  element={<GallaryPage />}   />
    </Routes>
   </Suspense>
    
    
    </div>;
};

export default App;
