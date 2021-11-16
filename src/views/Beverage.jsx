import React from 'react';
import Header from '../Components/Header';
import MegaMenu from '../Components/MegaMenu';

import Footer from '../Components/Footer';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function Beverage() {
  return (
    <>
      <Header />
      <MegaMenu />
      <BreadCrumb prevPage="Home" currentPage="Beverages" />
      <GroceriesBody />
      <Footer />
    </>
  );
}

export default Beverage;
