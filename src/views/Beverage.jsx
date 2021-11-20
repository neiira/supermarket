import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function Beverage() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Beverages" />
      <GroceriesBody />
    </>
  );
}

export default Beverage;
