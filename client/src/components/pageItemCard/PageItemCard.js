import React from 'react';
import './PageItemCard.css';
import { useNavigate } from "react-router-dom";

const PageItemCard = (props) => {
  const navigation = useNavigate() ;

  return (
    <div  className='pageItemMain'>
      <img src = {props.image}  alt='back'  />
      {/* {console.log("link got from image",props.image)} */}
      <span className='pageItemMain_title-1'  onClick ={ ()=>{
        navigation("/gallery/test")
      }}> {props.title_1}</span>
      <span className='pageItemMain_title-2'> {props.title_2}</span>
      
    </div>
  )
};


export default PageItemCard
