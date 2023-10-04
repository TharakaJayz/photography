import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { AiOutlinePlus } from "react-icons/ai";
// import NavCard from "./navCard/NavSec2Card";
import NavSec2Card from "./navCard/NavSec2Card";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [menuLogic, setMenuLogic] = useState(false);

  const[isLoading,setIsLoading] = useState(true);

  useEffect(() =>{

    setTimeout(() =>{
      setIsLoading(false);
    },500);
    

  } ,[] )

  const recipient = 'tharakaprabhath300@gmail.com';
  const subject = "Hello from your Website";
  const body = 'I just wanted to say hello!';

  const emailLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const[menuStyleLogic,setMenuStyleLogic] = useState(false);

  const[menuOffStyle,setMenuOffStyle] = useState([]);
  const navigation = useNavigate();
  return (
    <div className= {menuLogic ? "nav-main menu_display" : "nav-main"}>
      <section  className=  { isLoading ?  `nav-sec nav-sec--1 loading` : `nav-sec nav-sec--1`}>
        <div className="nav-sec--1-div_1">
          <AiOutlinePlus />
          FOLLOW
        </div>
        <div className="nav-sec--1-div_2"
        onClick={() =>{
          navigation('/')
          window.location.reload()
        }}
        >
          AMELIA
          <span>WEDDING PHOTOGRAPHER</span>
        </div>
        <div
          className="nav-sec--1-div_3"
         
          onClick={() => {
            setMenuLogic(!menuLogic);
            setMenuStyleLogic(!menuStyleLogic);
            setMenuOffStyle(['span1-Unclicked','span2-Unclicked']);
          }}
        >
          Menu{" "}
          <section
          //  className="nav-sec--1-div_3-sec"
          className=  { isLoading ?  `nav-sec--1-div_3-sec loading_sp` : `nav-sec--1-div_3-sec`}
           onClick={() =>{
          
          }}>
            <span className={ menuStyleLogic ?`nav-sec--1-div_3-sec-sp sp1 span1-clicked` : `nav-sec--1-div_3-sec-sp sp1 ${menuOffStyle[0]}` }></span>
            <span className={ menuStyleLogic ?`nav-sec--1-div_3-sec-sp sp2 span2-clicked` : `nav-sec--1-div_3-sec-sp sp2 ${menuOffStyle[1]}`}></span>
            {/* <span className="nav-sec--1-div_3-sec-sp sp2"></span> */}
          </section>
        </div>
        </section>
      <section className={menuLogic ? "nav-sec-b display" : "nav-sec-b displayed"}>
        <section className="nav-sec nav-sec--2">
          <NavSec2Card />
          
        </section>
        <section className="nav-sec nav-sec--3">
          <h3 className="nav-sec--3-h4-1">Let's Get in Touch</h3>
          <p className="nav-sec--3-p">Petat aut petat aut perferendis doloribus asperiores repellat hanc ego assentior, cum a philosophis compluribus permulta dicantur, cur verear.</p>
          <h4 className="nav-sec--3-h4-2"><a  href={emailLink}>tharakaprabhath300@gmail.com</a> </h4>
          <h4 className="nav-sec--3-h4-3">+94 718736614</h4>
          <button className="nav-sec--3-btn">Request a quote</button>
         
         
        </section>
      </section>
      <span>Nav bar logic should be chsnged</span>

      {/* <NavCard  className = { menuLogic ? 'nav-card display'  : 'nav-card'} /> */}
    </div>
  );
};

export default Navbar;
