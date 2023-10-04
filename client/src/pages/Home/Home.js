import React, { useEffect, useState } from "react";
import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

import 'swiper/css/zoom';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade ,Zoom} from "swiper/modules";

import img1 from "../../assets/back 3.jpg";
import img2 from "../../assets/background 1.jpg";
import img3 from "../../assets/back contact.jpg";
import Navbar from "../../components/Navbar/Navbar";



// Install Swiper modules



const Home = () => {

  const [isLoading,setIsLoading] = useState(true);

  useEffect(() =>{

    setTimeout(()=>{
      setIsLoading(false);
    },500)

  },[])

  
  return (
    <div className= {isLoading ? `home-main loading_home` : `home-main loaded_home`}>
      
      <div className="home-main-sub">
        
        <Swiper

style={{
  '--swiper-navigation-color': '#fff',
  '--swiper-pagination-color': '#ffd',
}}
          zoom ={true}
          spaceBetween={30}
          effect={"fade"}
          loop ={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            
          }}
          navigation={false}
          EffectFade ={true}
        
          modules={[Autoplay, Pagination, Navigation, EffectFade ,Zoom]}
          speed={3000}
          className="mySwiper"
        >
          <SwiperSlide className="mySwiper-slice">
            {" "}
            <img src={img1} alt="slider-1" />
          </SwiperSlide>
          <SwiperSlide className="mySwiper-slice">
            {" "}
            <img src={img2} alt="slider-2" />
          </SwiperSlide>
          <SwiperSlide className="mySwiper-slice">
            {" "}
            <img src={img1} alt="slider-1" />
          </SwiperSlide>
          <SwiperSlide className="mySwiper-slice">
            {" "}
            <img src={img3} alt="slider-3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
