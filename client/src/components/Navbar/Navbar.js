import React, { useState } from 'react';
import './Navbar.css';
import {AiOutlinePlus}  from 'react-icons/ai';
import NavCard from './navCard/NavSec2Card';
import NavSec2Card from './navCard/NavSec2Card';
const Navbar = () => {

  const [menuLogic,setMenuLogic] = useState(false);
  // const menuHandler = ()  =>{

  // }
  return (
    <div className = "nav-main">
      <section className="nav-sec nav-sec--1">
        <div className='nav-sec--1-div_1'>
          <AiOutlinePlus/>
          FOLLOW
        </div>
        <div className='nav-sec--1-div_2'>
          AMELIA
          <span>WEDDING PHOTOGRAPHER</span>
        </div>
        <div className='nav-sec--1-div_3'  onClick={  ()  =>{
          setMenuLogic(!menuLogic);

        }}>
          Menu <section className='nav-sec--1-div_3-sec'>
            <span className='nav-sec--1-div_3-sec-sp sp1'></span>
            <span className='nav-sec--1-div_3-sec-sp sp2'></span>
          </section>
        </div>
      </section>
      <section className = { menuLogic ? 'nav-sec-b display'  : 'nav-sec-b'} >
      <section className="nav-sec nav-sec--2">
          <NavSec2Card  />
      </section>
      <section className="nav-sec nav-sec--3"></section>
      </section>

      {/* <NavCard  className = { menuLogic ? 'nav-card display'  : 'nav-card'} /> */}
    </div>
  )
}

export default Navbar
