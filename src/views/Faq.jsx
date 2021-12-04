import React, { useEffect } from 'react';
import FaqBody from '../Components/FaqBody';
import BreadCrumb from '../Components/BreadCrumb';

function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="FAQs" />
      <FaqBody />
    </>
  );
}

export default Faq;
