import React from "react";
import "./Contact.css";
import FooterMy from "../../components/Footer/FooterMy";
import PageHeadCard from "../../components/pageHeadCard/PageHeadCard";
import conactBack from "../../assets/back contact.jpg";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const recipient = "tharakaprabhath300@gmail.com";
  const subject = "Hello from your Website";
  const body = "I just wanted to say hello!";

  const emailLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return (
    <div className="contact-main">
      <PageHeadCard title="Contact" src={conactBack} />
      <div className="contact-body">
        <section className="CB-sec-1">
          <span id="sec-1-sp-1">Let's Work Together</span>
          <span id="sec-1-sp-2">
            We assure you elegance through excellence. Please feel free to reach
            us!
          </span>
          <div className="sec-1-div-logo">
            <section className="div_logo_sec">
              <a href="https://api.whatsapp.com/send?phone=+94718736614&text=message from web">
                <span className="div_logo">
                  <IoLogoWhatsapp id="whatsapp_logo_ct" />
                </span>
                <span className="div_logo_title"> +94 71 873 6614 </span>
              </a>
            </section>
            <section className="div_logo_sec">
              <a href={emailLink}>
                <span className="div_logo">
                  <MdEmail id="email_logo_ct" />
                </span>
                <span className="div_logo_title">
                  ameliaweddingstudio@gmail.com
                </span>
              </a>
            </section>
            <section className="div_logo_sec">
              <span className="div_logo">
                <FaLocationDot id="location_logo_ct" />{" "}
              </span>{" "}
              <span className="div_logo_title">
                207/1,Rathmaldeniya Road, Pannipitiya, Sri Lanka{" "}
              </span>
            </section>
            <section className="div_logo_sec">
              <a href="https://web.facebook.com/AmeliaWeddingStudio">
                <span className="div_logo">
                  <BsFacebook id="fb_logo_ct" />
                </span>
                <span className="div_logo_title">
                  web.facebook.com/AmeliaWeddingStudio{" "}
                </span>
              </a>
            </section>
            <section className="div_logo_sec">
              <a href="https://www.instagram.com/amelia_wedding_studio/">
                <span className="div_logo">
                  <AiOutlineInstagram id="insta_logo_ct" />
                </span>
                <span className="div_logo_title">www.instgram/amelia.com </span>
              </a>
            </section>
          </div>
        </section>
        <section className="CB-sec-2">
          <div className="contact_form_div">
            <h3 id="contact_form_heading">Send Your Message</h3>
            <form className="ct_form_div_form">
            <table className="ct_form_div_table">
              <tbody className="ct_form_div_table_body">
                <tr id="row1">
                  <td > <input  name="name" placeholder="name" />
                  </td>
                  <td>
                  <input  name="Email" placeholder="Email" /></td>
                </tr>
                <tr id="row2" >
                  <td colSpan="2"><input  name="Subject" placeholder="Subject" /></td>
                </tr>
                <tr id="row3">
                  <td colSpan="2">
                    
                  <textarea name="message" placeholder="Message" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>Send Message</button>
                  </td>
                </tr>
              </tbody>
            </table>

            </form>
          </div>
        </section>
      </div>
      <FooterMy />
    </div>
  );
};

export default Contact;
