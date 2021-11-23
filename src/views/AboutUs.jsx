import React from 'react';
import AboutUsBody from '../Components/AboutUsBody';
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
