import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function HouseHold() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="HouseHold" />
      <GroceriesBody />
    </>
  );
}

export default HouseHold;
