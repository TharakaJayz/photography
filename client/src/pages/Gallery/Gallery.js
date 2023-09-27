import React, { useEffect, useState } from "react";
import "./Gallery.css";
import PageHeadCard from "../../components/pageHeadCard/PageHeadCard";
import PageItemCard from "../../components/pageItemCard/PageItemCard";

import image1 from "../../assets/engagement_1.jpg";
import image2 from "../../assets/preWedding_1.jpg";
import image3 from "../../assets/wedding_1.jpg";
import image4 from "../../assets/wedding_2.jpg";
import image5 from "../../assets/preWedding_2.jpg";
const Gallery = () => {
  const [slectedTitle, setSelectedTitle] = useState("all");
  const [slectedDisplayTitle, setSelectedDisplayTitle] = useState("all");

  const [displauLogic,setDisplayLogic] = useState(false);
  useEffect(() =>{

    setTimeout(() =>{
      if(displauLogic){

        setDisplayLogic(false);
        setSelectedDisplayTitle(slectedTitle);
        console.log(displauLogic);
      }
    },500);
    

  } ,[displauLogic] )

  // const cardDetails = [
  //    [
  //     <PageItemCard
  //       image={image1}
  //       title_1={"Binura & Uthpala"}
  //       title_2={"Engagment"}
  //     />,
  //     <PageItemCard
  //       image={image2}
  //       title_1={"Hansi & Gasith"}
  //       title_2={"Pre Wedding shoot"}
  //     />,
  //     <PageItemCard
  //       image={image3}
  //       title_1={"Maneesha & Bhathiya"}
  //       title_2={"Wedding"}
  //     />,
  //   ],
  // ];
  // const cardDetails = [
  //   [
  //     {
  //       image: image1,
  //       title_1: "Binura & Uthpala",
  //       title_2: "Engagment",
  //     },
  //     {
  //       image:  image2 ,
  //       title_1: "Hansi & Gasith",
  //       title_2: "Pre Wedding shoot",
  //     },
  //     {
  //       image: image3 ,
  //       title_1: "Maneesha & Bhathiya",
  //       title_2: "Wedding",
  //     },
  //   ],
  //   [
  //     {
  //       image:  image1 ,
  //       title_1: "Binura & Uthpala",
  //       title_2: "Engagment",
  //     },
  //     {
  //       image:  image2 ,
  //       title_1: "Hansi & Gasith",
  //       title_2: "Pre Wedding shoot",
  //     },
  //     {
  //       image: image4 ,
  //       title_1: "Maneesha & Bhathiya",
  //       title_2: "Wedding",
  //     },
  //   ],
  //   [
  //     {
  //       image:  image1 ,
  //       title_1: "Binura & Uthpala",
  //       title_2: "Engagment",
  //     },
  //     {
  //       image:  image2 ,
  //       title_1: "Hansi & Gasith",
  //       title_2: "Pre Wedding shoot",
  //     },
  //     {
  //       image: image3 ,
  //       title_1: "Maneesha & Bhathiya",
  //       title_2: "Wedding",
  //     },
  //   ],
  //   [
  //     {
  //       image:  image1 ,
  //       title_1: "Binura & Uthpala",
  //       title_2: "Engagment",
  //     },
  //     {
  //       image:  image5 ,
  //       title_1: "Hansi & Gasith",
  //       title_2: "Pre Wedding shoot",
  //     },
  //     {
  //       image: image3 ,
  //       title_1: "Maneesha & Bhathiya",
  //       title_2: "Wedding",
  //     },
  //   ],
  // ];
  const cardDetails = [
    {
      type:"engagements",
      image: image1,
      title_1: "Binura & Uthpala",
      title_2: "Engagment",
    },
    {
      type:"prewedding",
      image: image2,
      title_1: "Hansi & Gasith",
      title_2: "Pre Wedding shoot",
    },
    {
      type:"weddings",
      image: image3,
      title_1: "Maneesha & Bhathiya",
      title_2: "Wedding",
    },

    {
      type:"engagements",
      image: image1,
      title_1: "Binura & Uthpala",
      title_2: "Engagment",
    },
    {
      type:"prewedding",
      image: image2,
      title_1: "Hansi & Gasith",
      title_2: "Pre Wedding shoot",
    },
    {
      type:"weddings",
      image: image4,
      title_1: "Maneesha & Bhathiya",
      title_2: "Wedding",
    },

    {
      type:"engagements",
      image: image1,
      title_1: "Binura & Uthpala",
      title_2: "Engagment",
    },
    {
      type:"prewedding",
      image: image2,
      title_1: "Hansi & Gasith",
      title_2: "Pre Wedding shoot",
    },
    {
      type:"weddings",
      image: image3,
      title_1: "Maneesha & Bhathiya",
      title_2: "Wedding",
    },

    {
      type:"engagements",
      image: image1,
      title_1: "Binura & Uthpala",
      title_2: "Engagment",
    },
    {
      type:"prewedding",
      image: image5,
      title_1: "Hansi & Gasith",
      title_2: "Pre Wedding shoot",
    },
    {
      type:"weddings",
      image: image3,
      title_1: "Maneesha & Bhathiya",
      title_2: "Wedding",
    },
  ];

  return (
    <div className="gallery-main">
      <div className="gallery_sub">
        <PageHeadCard title="Gallery" />
        <section className="gallary_section_title">
          <span
            className={
              slectedTitle === "all"
                ? "gallary_span title_selected "
                : "gallary_span"
            }
            onClick={() => {
              setSelectedTitle("all");
              setDisplayLogic(true);
            }}
         
          >
            ALL
          </span>
          <span
            className={
              slectedTitle === "weddings"
                ? "gallary_span title_selected "
                : "gallary_span"
            }
            onClick={() => {
              setSelectedTitle("weddings");
              setDisplayLogic(true);
            }}
          >
            WEDDINGS
          </span>
          <span
            className={
              slectedTitle === "engagements"
                ? "gallary_span title_selected "
                : "gallary_span"
            }
            onClick={() => {
              setSelectedTitle("engagements");
              setDisplayLogic(true);
            }}
          >
            ENGAGEMENTS
          </span>
          <span
            className={
              slectedTitle === "prewedding"
                ? "gallary_span title_selected "
                : "gallary_span"
            }
            onClick={() => {
              setSelectedTitle("prewedding");
              setDisplayLogic(true);
            }}
          >
            PRE WEDDING SESSIONS
          </span>
        </section>
        <section className="gallary_section_body">
          {/* <PageItemCard
            image={image1}
            title_1={"Binura & Uthpala"}
            title_2={"Engagment"}
          />
          <PageItemCard
            image={image2}
            title_1={"Hansi & Gasith"}
            title_2={"Pre Wedding shoot"}
          />
          <PageItemCard
            image={image3}
            title_1={"Maneesha & Bhathiya"}
            title_2={"Wedding"}
          /> */}

          {/* {cardDetails.set1[0]}
            {cardDetails.set1[1]}
            {cardDetails.set1[2]} */}
          {/* {cardDetails.map((itemSet) => {
            return (
              <div className="item_cardWrapper">
                {itemSet.map((singleItem) => {
                  return (
                    <PageItemCard
                      image={singleItem.image}
                      title_1={singleItem.title_1}
                      title_2={singleItem.title_2}
                    />
                  );
                })}
              </div>
            );
          })} */}
          {
              <div className= {displauLogic ? "item_cardWrapper card_wrapperDisplay" :"item_cardWrapper"}>

              {slectedDisplayTitle === "all" &&( cardDetails.map((singleItem) => {
                  if(true){
                  return (
                    
                    <PageItemCard
                      image={singleItem.image}
                      title_1={singleItem.title_1}
                      title_2={singleItem.title_2}
                    />
                  )
                }
                }))}  

              {slectedDisplayTitle === "weddings" &&( cardDetails.map((singleItem) => {
                  if(singleItem.type === "weddings"){
                  return (
                    
                    <PageItemCard
                      image={singleItem.image}
                      title_1={singleItem.title_1}
                      title_2={singleItem.title_2}
                    />
                  )
                }
                }))}  
              {slectedDisplayTitle === "engagements" &&( cardDetails.map((singleItem) => {
                  if(singleItem.type === "engagements"){
                  return (
                    
                    <PageItemCard
                      image={singleItem.image}
                      title_1={singleItem.title_1}
                      title_2={singleItem.title_2}
                    />
                  )
                }
                }))}  
              {slectedDisplayTitle === "prewedding" &&( cardDetails.map((singleItem) => {
                  if(singleItem.type === "prewedding"){
                  return (
                    
                    <PageItemCard
                      image={singleItem.image}
                      title_1={singleItem.title_1}
                      title_2={singleItem.title_2}
                    />
                  )
                }
                }))}  


                    - on click true - 

              </div>
            
          }
        </section>
      </div>
    </div>
  );
};

export default Gallery;
