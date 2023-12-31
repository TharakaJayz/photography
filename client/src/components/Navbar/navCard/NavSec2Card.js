import React, { useState } from "react";
import "./NavSec2Card.css";
import { useNavigate } from "react-router-dom";
const NavSec2Card = (props) => {
  const [classStyle, setClassStyle] = useState("");
  const navigation = useNavigate();

  return (
    <div className={`navSec2Card-main ${props.className} ${classStyle}  `}>
      <span
        className="navSec2Card-main-sp sec2Card-sp1"


        onClick={()=>{
          navigation("/");
          window.location.reload();
      }}
        
        onMouseEnter={() => {
          setClassStyle("home-hover");
        }}
        onMouseLeave={() => {
          setClassStyle("home-hove-leave");
        }}
      >
        Home
      </span>
      <span
        className="navSec2Card-main-sp sec2Card-sp2"
        onClick={()=>{
          navigation("/gallery");
          window.location.reload();
      }}
        onMouseEnter={() => {
          setClassStyle("gallery-hover");
        }}
        onMouseLeave={() => {
          setClassStyle("gallery-hove-leave");
        }}
      >
        Gallery
      </span>
      <span
        className="navSec2Card-main-sp sec2Card-sp3"
        onMouseEnter={() => {
          setClassStyle("Services-hover");
        }}
        onMouseLeave={() => {
          setClassStyle("Services-hove-leave");
        }}
      >
        Services
      </span>
      <span
        className="navSec2Card-main-sp sec2Card-sp4"
        onMouseEnter={() => {
          setClassStyle("Blog-hover");
        }}
        onMouseLeave={() => {
          setClassStyle("Blog-hove-leave");
        }}
      >
        Blog
      </span>
      <span
        className="navSec2Card-main-sp sec2Card-sp5"

        onClick={()=>{
          navigation("/about");
          window.location.reload();
      }}
        onMouseEnter={() => {
          setClassStyle("Services-hover");
        }}
        onMouseLeave={() => {
          setClassStyle("Services-hove-leave");
        }}
      >
        About
      </span>
      <span
        className="navSec2Card-main-sp sec2Card-sp6"
        onClick={()=>{
          navigation("/contact");
          window.location.reload();
      }}
        onMouseEnter={() => {
          setClassStyle("Contact-hover");
        }}
        onMouseLeave={() => {
          setClassStyle("Contact-hove-leave");
        }}
      >
        Contact
      </span>
    </div>
  );
};

export default NavSec2Card;
