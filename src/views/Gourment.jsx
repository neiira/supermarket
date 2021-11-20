import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function Gourment() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Gourment" />
      <GroceriesBody />
    </>
  );
}

export default Gourment;
