import React, { useState } from "react";
import "./Contact.css";
import FooterMy from "../../components/Footer/FooterMy";
import PageHeadCard from "../../components/pageHeadCard/PageHeadCard";
import conactBack from "../../assets/page_headers/heading 1.jpg";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { checkEmpty, emailValidation } from "../../functions/Validations";

const Contact = () => {
  const recipient = "tharakaprabhath300@gmail.com";
  const subject = "Hello from your Website";
  const body = "I just wanted to say hello!";

  const emailLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inputSubject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([false, ""]);
  const [success,setSuccess] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form details ", name, email, inputSubject, message);

    if(success){
      return;
    }
    if (checkEmpty(name)) {
      setError([true, "Name could not empty"]);
      return;
    }

    if(!emailValidation(email)[0]){
      setError([true,emailValidation(email)[1]]);
      return;
    }
    if(checkEmpty(inputSubject)){
      setError([true, "subject could not empty"]);
      return;
    }
    if(checkEmpty(message)){
      setError([true, "message could not empty"]);
      return;
    }
    setError([false,"Your submission was successful."]);
    setSuccess(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    return;

   
  };
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
            <section className="div_logo_sec" id="locatoin_sec">
              <span className="div_logo" id="address_sp1">
                <FaLocationDot id="location_logo_ct" />
              </span>
              <span className="div_logo_title" id="address_sp2">
                207/1,Rathmaldeniya Road, Pannipitiya, Sri Lanka{" "}
              </span>
            </section>
            <section className="div_logo_sec">
              <a className="div_logo_sec_a" href="https://web.facebook.com/AmeliaWeddingStudio">
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
            <form className="ct_form_div_form" onSubmit={formSubmitHandler}>
              <table className="ct_form_div_table">
                <tbody className="ct_form_div_table_body">
                  <tr id="row1">
                    <td id="row1_td1">
                      {" "}
                      <input
                        onChange={nameHandler}
                        value={name}
                        name="name"
                        placeholder="name"
                        className="cb_inputs"
                        id="input_rw1"
                      />
                    </td>
                    <td id="row1_td2">
                      <input
                      value={email}
                        onChange={emailHandler}
                        name="Email"
                        placeholder="Email"
                        className="cb_inputs"
                        id="input_rw1"
                      />
                    </td>
                  </tr>
                  <tr id="row2">
                    <td colSpan="2">
                      <input
                      value={inputSubject}
                        onChange={subjectHandler}
                        name="Subject"
                        placeholder="Subject"
                        className="cb_inputs"
                      />
                    </td>
                  </tr>
                  <tr id="row3">
                    <td colSpan="2">
                      <textarea
                      value={message}
                        onChange={messageHandler}
                        name="message"
                        placeholder="Message"
                        className="cb_inputs"
                      />
                    </td>
                  </tr>
               
                  <tr id="row4">
                    <td colSpan="2">
                      <button id="CB_fomr_button" type="submit">
                        Send Message
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              { ( error[0]  ) &&( <div className="CF-error_div">{error[1]}</div>
              )}
              {success && (<div className="CF-success_div">Your submission was successful.</div>)}
            </form>
          </div>
        </section>
      </div>
      <FooterMy />
    </div>
  );
};

export default Contact;
