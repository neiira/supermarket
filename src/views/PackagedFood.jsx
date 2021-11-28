import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function PackagedFood() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Chillies" />
      <GroceriesBody />
    </>
  );
}

export default PackagedFood;
