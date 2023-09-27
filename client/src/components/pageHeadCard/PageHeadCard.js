import React, { useEffect, useState } from 'react';
import './PageHeadCard.css'
import backgroundGallery from '../../assets/back 3.jpg'
const PageHeadCard = (props) => {

  const [isLoading,setIsLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  })

  return (
    <div className='page_head_main'  >
      <img src = {backgroundGallery}  alt='gallery background'  />
      <span className={isLoading ? `page_head_span page_head_span_loading` :`page_head_span page_head_span_loaded`} > {props.title}</span>
    </div>
  )
}

export default PageHeadCard
