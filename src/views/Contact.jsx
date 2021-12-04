import React, { useEffect } from 'react';
import ContactBody from '../Components/ContactBody';
import BreadCrumb from '../Components/BreadCrumb';
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Contact" />
      <ContactBody />
    </>
  );
}

export default Contact;
