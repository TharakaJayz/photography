import React from 'react';
import './PageItemCard.css';
import image from '../../assets/camare 1.jpg';

const PageItemCard = (props) => {

  const backgroundImageUrl = 'url("../../assets/camare 1.jpg")';



  return (
    <div  className='pageItemMain'>
      <img src = {props.image}  alt='back'  />
      {/* {console.log("link got from image",props.image)} */}
      <span className='pageItemMain_title-1'> {props.title_1}</span>
      <span className='pageItemMain_title-2'> {props.title_2}</span>
      
    </div>
  )
};


export default PageItemCard
