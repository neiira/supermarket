import React from 'react';
import ContactBody from '../Components/ContactBody';
import BreadCrumb from '../Components/BreadCrumb';
function Contact() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Contact" />
      <ContactBody />
    </>
  );
}

export default Contact;
