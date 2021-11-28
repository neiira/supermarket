import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function Groceries() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="pizza" />
      <GroceriesBody />
    </>
  );
}

export default Groceries;
