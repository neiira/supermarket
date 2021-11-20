import React from 'react';
import AboutUsBody from '../Components/AboutUsBody';
import Header from '../Components/Header';
import MegaMenu from '../Components/MegaMenu';

import Footer from '../Components/Footer';
import BreadCrumb from '../Components/BreadCrumb';

function AboutUs() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="About us" />
      <AboutUsBody />
    </>
  );
}

export default AboutUs;
