import React from "react";
import "./Footer.css";
import image1 from "../../assets/preWedding_1.jpg";
import image2 from "../../assets/preWedding_2.jpg";
import image3 from "../../assets/engagement_1.jpg";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import ameliaLogo from "../../assets/image002-removebg-preview.png";
const FooterMy = () => {
  const recipient = "tharakaprabhath300@gmail.com";
  const subject = "Hello from your Website";
  const body = "I just wanted to say hello!";

  const emailLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return (
    <div className="footer_main">
      <section className="footer_sec_1">
        {/* <div className='footer_sec_1_image'>
        <img src={image1}  alt='engagement 1'  />
      </div>
      <div className='footer_sec_1_image'>
        <img src={image2}  alt='engagement 1'  />
      </div>
      <div className='footer_sec_1_image'>
        <img src={image3}  alt='engagement 1'  />
      </div>
      <div className='footer_sec_1_image'>
        <img src={image1}  alt='engagement 1'  />
      </div>
      <div className='footer_sec_1_image'>
        <img src={image2}  alt='engagement 1'  />
      </div>
      <div className='footer_sec_1_image'>
        <img src={image3}  alt='engagement 1'  />
      </div> */}
      </section>
      <section className="footer_sec_2">
        <div className="footer_sec_2_logo_div">
          <img src={ameliaLogo} alt="amelia" />
        </div>
        <span> Lifestyle Fine Art Photographer based in Colombo & England</span>
        <span> +94 71 873 6614</span>
        <span>
          {" "}
          <a id="emailSpan" href={emailLink}>
            ameliaweddingstudio@gmail.com
          </a>
        </span>
        <span> 207/1,Rathmaldeniya Road, Pannipitiya, Sri Lanka</span>
        <div className="footer_sec_2_icon_div">
          <span className="footer_sec_2_icon_div_span" id="facebook">
            {" "}
            <a  id="facebookAnchor" href="https://web.facebook.com/AmeliaWeddingStudio">
              <BsFacebook />
            </a>
          </span>
          <span className="footer_sec_2_icon_div_span" id="instagram">
            <AiOutlineInstagram />{" "}
          </span>
          <span className="footer_sec_2_icon_div_span" id="whatsapp">
            {" "}
            <a  id="whatsappAnchor"  href="https://api.whatsapp.com/send?phone=+94718736614&text=message from web">   <IoLogoWhatsapp /></a>

         
          </span>
        </div>
      </section>
    </div>
  );
};

export default FooterMy;
