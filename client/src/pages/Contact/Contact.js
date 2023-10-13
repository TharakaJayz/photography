import React from 'react';
import './Contact.css';
import FooterMy from '../../components/Footer/FooterMy';
import PageHeadCard from '../../components/pageHeadCard/PageHeadCard';
import conactBack from '../../assets/back contact.jpg';

const Contact = () => {
  return (
    <div className='contact-main'>
      <PageHeadCard title ="Contact" src = {conactBack} />
      <FooterMy />
    </div>
  )
}

export default Contact
