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
                We are Ceylon Wedlock, professional and well known wedding
                photographers in the island based in Colombo.Our team is
                dedicated in capturing the most scenic and blissful moments of
                your big day to make it memorable with passion and professional
                cognizance
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
              <p className="AB_sec-2_p"> We make sure that you feel comfortable and stress-free on your wedding day with our experience and instincts. Our ultimate goal is to let you enjoy your big day while catering a dextrous service.</p>
            </section>
          </div>
        </div>
        <FooterMy />
      </div>
    </div>
  );
};

export default About;
