import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function PackagedFood() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Packaged food" />
      <GroceriesBody />
    </>
  );
}

export default PackagedFood;
