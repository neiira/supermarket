import React, { useEffect } from 'react';
import AboutUsBody from '../Components/AboutUsBody';
import BreadCrumb from '../Components/BreadCrumb';

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="About us" />
      <AboutUsBody />
    </>
  );
}

export default AboutUs;
