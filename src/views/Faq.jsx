import React from 'react';
import FaqBody from '../Components/FaqBody';
import BreadCrumb from '../Components/BreadCrumb';

function Faq() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="FAQs" />
      <FaqBody />
    </>
  );
}

export default Faq;
