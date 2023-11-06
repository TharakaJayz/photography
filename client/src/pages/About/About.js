import React from "react";
import "./About.css";
import PageHeadCard from "../../components/pageHeadCard/PageHeadCard";
import FooterMy from "../../components/Footer/FooterMy";
import aboutBackground from "../../assets/page_headers/heading 2.jpg";
import photograper from "../../assets/photograper 2.jpg";
import engagementSVG from "../../assets/engagement-ring.png";
import weddingSVG from "../../assets/wedding.png";
import CasualShootsSVG from "../../assets/love.png";
const About = () => {
  return (
    <div className="about_main">
      <div className="about_sub">
        <PageHeadCard src={aboutBackground} title={"About"} />
        <div className="about_body">
          <h2 className="AB_heading-1">About Me</h2>
          <div className="about_body_sections">
            <section className="AB_sec-1">
              <img
                src={photograper}
                alt="tharindu jayaz"
                className="ab-sec-1_img"
              />
            </section>
            <section className="AB_sec-2">
              <p className="AB_sec-2_p">
              Weddings are a celebration of love, and we understand the importance of creating images that stand the test of time. Our wedding photography exudes timeless elegance, ensuring that your photos become cherished family heirlooms that you can pass down through generations. We focus on creating images that not only look beautiful today but also evoke the same emotions when you revisit them in the years to come.
              </p>
              <section className="AB_sec-2_sec">
                <div className="AB_sec-2_sec-div">
                  <section className="sec-2_sec-div-sec-1">
                    <img
                      src={weddingSVG}
                      alt="wedding"
                      className="sec-2_sec-div-sec-1_img"
                    />{" "}
                  </section>
                  <section className="sec-2_sec-div-sec-2">
                    Weddings
                  </section>
                </div>
                <div className="AB_sec-2_sec-div">
                  <section className="sec-2_sec-div-sec-1">
                    <img
                      src={engagementSVG}
                      alt="wedding"
                      className="sec-2_sec-div-sec-1_img"
                    />{" "}
                  </section>
                  <section className="sec-2_sec-div-sec-2">
                    Engagements
                  </section>
                </div>
                <div className="AB_sec-2_sec-div">
                  <section className="sec-2_sec-div-sec-1">
                    <img
                      src={CasualShootsSVG}
                      alt="wedding"
                      className="sec-2_sec-div-sec-1_img"
                    />{" "}
                  </section>
                  <section className="sec-2_sec-div-sec-2">
                    Casual Shoots
                  </section>
                </div>
              </section>
              <p className="AB_sec-2_p"> A wedding day is filled with emotionally charged moments that deserve to be captured with precision and sensitivity. From the tears of joy during the vows to the radiant smiles on the dance floor, we specialize in capturing the raw emotions that make your wedding day extraordinary. We pride ourselves on being there to document every hug, every tear, and every unscripted moment, creating a visual story that reflects the love and connection you share with your partner and loved ones.</p>
            </section>
          </div>
        </div>
        <FooterMy />
      </div>
    </div>
  );
};

export default About;
