import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function PersonalCare() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="personal care" />
      <GroceriesBody />
    </>
  );
}

export default PersonalCare;
