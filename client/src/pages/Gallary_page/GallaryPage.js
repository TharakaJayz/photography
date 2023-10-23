import React from 'react';
import './GallaryPage.css';
import { useParams } from 'react-router-dom';
const GallaryPage = () => {

  const params = useParams();
  return (
    <div className='gallaryPage_main'>
      <div className='GP-content'>
        <section className='content_sec-1'>
          <h1 id='sec_1_head_1'> Kaththa & Kaththi </h1>
          <img src=''  alt='main'  />
          <span>{params.albumID}</span>
        </section>
        <section className='content_sec-2'></section>
      </div>
    </div>
  )
}

export default GallaryPage
