import React from "react";
import "./Contact.css";
import FooterMy from "../../components/Footer/FooterMy";
import PageHeadCard from "../../components/pageHeadCard/PageHeadCard";
import conactBack from "../../assets/back contact.jpg";

const Contact = () => {
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
            whatsapp | E -mail | location | FB
          </div>
          <div>
            SEND MESSAGE
            <form></form>
          </div>
        </section>
      </div>
      <FooterMy />
    </div>
  );
};

export default Contact;
