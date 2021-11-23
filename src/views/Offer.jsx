import React from 'react';
import Topbrands from '../Components/Topbrands';
import BreadCrumb from '../Components/BreadCrumb';
function Offer() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="offers" />
      <Topbrands />
    </>
  );
}

export default Offer;
