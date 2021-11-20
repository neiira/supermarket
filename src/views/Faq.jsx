import React from 'react';

import Header from '../Components/Header';
import MegaMenu from '../Components/MegaMenu';
import FaqBody from '../Components/FaqBody';
import Footer from '../Components/Footer';
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
