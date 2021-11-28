import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function HouseHold() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Momo" />
      <GroceriesBody />
    </>
  );
}

export default HouseHold;
