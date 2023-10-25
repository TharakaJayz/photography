import React, { useEffect, useState } from "react";
import "./GallaryPage.css";
import { useParams } from "react-router-dom";
import { data } from "../../Data/Data";
const GallaryPage = () => {
  const params = useParams();
  const albumId = params.albumID;
  const [Album, setAlbum] = useState({
    data: {
      title: "",
      main_img: "",
      sub_img: [
        ""
      ],
    }
  });

  const i = 10;
  useEffect(() => {
    data.map((album) => {
      if (album.id === albumId) {
        // console.log("matching album", album.data.title);
        setAlbum(album);
     
      
      }
    });
  }, []);

  useEffect(() => {
    console.log("this is checking");

    const settingImages = () => {
      let j = 0;
      while( j < Album.data.sub_img.length)
      {
        console.log("j value is",j);
        j++;
        
      }
    };

    settingImages();
  }, [Album]);



  return (
    <div className="gallaryPage_main">
      <div className="GP-content">
        <section className="content_sec-1">
          <h1 id="sec_1_head_1">
            {
              Album.data.title
              //  {Album.data.main_img}
            }{" "}
          </h1>
          <img src= {Album.data.main_img} alt="main" id="CS_main_img" />
          <span>{params.albumID}</span>
        </section>
        <section className="content_sec-2">{}</section>
      </div>
    </div>
  );
};

export default GallaryPage;
