import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import PageHeadCard from "../../components/pageHeadCard/PageHeadCard";
import PageItemCard from "../../components/pageItemCard/PageItemCard";

import image1 from "../../assets/engagement_1.jpg";
import image2 from "../../assets/preWedding_1.jpg";
import image3 from "../../assets/wedding_1.jpg";
import image4 from "../../assets/wedding_2.jpg";
import image5 from "../../assets/preWedding_2.jpg";
import FooterMy from "../../components/Footer/FooterMy";
import gallaryBackground from "../../assets/page_headers/heading 3.jpg";

import {cardDetails} from "../../Data/GallaryData";
const Gallery = () => {
  const [slectedTitle, setSelectedTitle] = useState("all");
  const [slectedDisplayTitle, setSelectedDisplayTitle] = useState("all");

  const [displauLogic, setDisplayLogic] = useState(false);

  const [sectionLogic, setSectionLogic] = useState(false); // logi to change the postion of title section whem scrolling

  const [sectionLogicAfter, setSectionLogicAfter] = useState(false); // logic for change section opacity when leaving item cards in viewport

  const ItemCardRef = useRef();
  const ItemDivRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (displauLogic) {
        setDisplayLogic(false);
        setSelectedDisplayTitle(slectedTitle);
      
      }
    }, 500);
  }, [displauLogic]);

  useEffect(() => {
    const rootMarginInPixels = "15vh"; // Your desired margin in viewport units
    const rootMarginInPixelsValue =
      (window.innerHeight * parseFloat(rootMarginInPixels)) / 100;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setSectionLogic(true);
          }

          if (entry.isIntersecting) {
            if (sectionLogic) {
            }

            setSectionLogic(false);
          }
        });
      },
      {
        root: null,
        rootMargin: `-${rootMarginInPixelsValue}px 0px`,
        threshold: 0,
      }
    );

    observer.observe(ItemCardRef.current);
  }, []);
  useEffect(() => {
    const rootMarginInPixels = "30vh"; // Your desired margin in viewport units
    const rootMarginInPixelsValue =
      (window.innerHeight * parseFloat(rootMarginInPixels)) / 100;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setSectionLogicAfter(true);
          }

          if (entry.isIntersecting) {
            if (sectionLogic) {
            }

            setSectionLogicAfter(false);
          }
        });
      },
      {
        root: null,
        rootMargin: `-${rootMarginInPixelsValue}px 0px`,
        threshold: 0,
      }
    );

    observer.observe(ItemDivRef.current);
  }, []);


  // const cardDetails = [
  //   {
  //     type: "engagements",
  //     image: image1,
  //     title_1: "Binura & Uthpala",
  //     title_2: "Engagment",
  //   },
  //   {
  //     type: "prewedding",
  //     image: image2,
  //     title_1: "Hansi & Gasith",
  //     title_2: "Pre Wedding shoot",
  //   },
  //   {
  //     type: "weddings",
  //     image: image3,
  //     title_1: "Malki & Ravindu",
  //     title_2: "Wedding",
  //   },

  //   {
  //     type: "engagements",
  //     image: image1,
  //     title_1: "Binura & Uthpala",
  //     title_2: "Engagment",
  //   },
  //   {
  //     type: "prewedding",
  //     image: image2,
  //     title_1: "Hansi & Gasith",
  //     title_2: "Pre Wedding shoot",
  //   },
  //   {
  //     type: "weddings",
  //     image: image4,
  //     title_1: "Maneesha & Bhathiya",
  //     title_2: "Wedding",
  //   },

  //   {
  //     type: "engagements",
  //     image: image1,
  //     title_1: "Binura & Uthpala",
  //     title_2: "Engagment",
  //   },
  //   {
  //     type: "prewedding",
  //     image: image2,
  //     title_1: "Hansi & Gasith",
  //     title_2: "Pre Wedding shoot",
  //   },
  //   {
  //     type: "weddings",
  //     image: image3,
  //     title_1: "Maneesha & Bhathiya",
  //     title_2: "Wedding",
  //   },

  //   {
  //     type: "engagements",
  //     image: image1,
  //     title_1: "Binura & Uthpala",
  //     title_2: "Engagment",
  //   },
  //   {
  //     type: "prewedding",
  //     image: image5,
  //     title_1: "Hansi & Gasith",
  //     title_2: "Pre Wedding shoot",
  //   },
  //   {
  //     type: "weddings",
  //     image: image3,
  //     title_1: "Maneesha & Bhathiya",
  //     title_2: "Wedding",
  //   },
  // ];

  return (
    <div className="gallery-main">
      <div className="gallery_sub">
        <div ref={ItemCardRef}>
          <PageHeadCard title="Gallery" src={gallaryBackground} />
        </div>
        <section
          className={
            // sectionLogic ? "gallary_section_title gallery_sec_display" : "gallary_section_title"

            sectionLogic
              ? sectionLogicAfter
                ? "gallary_section_title gallery_sec_display gallery_sec_display_after"
                : "gallary_section_title gallery_sec_display"
              : "gallary_section_title"
          }
        >
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
       
          {
            <div
              ref={ItemDivRef}
              className={
                displauLogic
                  ? "item_cardWrapper card_wrapperDisplay"
                  : "item_cardWrapper"
              }
            >
              {slectedDisplayTitle === "all" &&
                cardDetails.map((singleItem) => {
                  if (true) {
                    return (
                      <PageItemCard
                        image={singleItem.image}
                        title_1={singleItem.title_1}
                        title_2={singleItem.title_2}
                      />
                    );
                  }
                })}

              {slectedDisplayTitle === "weddings" &&
                cardDetails.map((singleItem) => {
                  if (singleItem.type === "weddings") {
                    return (
                      <PageItemCard
                        image={singleItem.image}
                        title_1={singleItem.title_1}
                        title_2={singleItem.title_2}
                      />
                    );
                  }
                })}
              {slectedDisplayTitle === "engagements" &&
                cardDetails.map((singleItem) => {
                  if (singleItem.type === "engagements") {
                    return (
                      <PageItemCard
                        image={singleItem.image}
                        title_1={singleItem.title_1}
                        title_2={singleItem.title_2}
                      />
                    );
                  }
                })}
              {slectedDisplayTitle === "prewedding" &&
                cardDetails.map((singleItem) => {
                  if (singleItem.type === "prewedding") {
                    return (
                      <PageItemCard
                        image={singleItem.image}
                        title_1={singleItem.title_1}
                        title_2={singleItem.title_2}
                      />
                    );
                  }
                })}
            </div>
          }
        </section>
        <FooterMy />
      </div>
    </div>
  );
};

export default Gallery;
