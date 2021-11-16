import React from 'react';
import Header from '../Components/Header';
import MegaMenu from '../Components/MegaMenu';

import Footer from '../Components/Footer';
import BreadCrumb from '../Components/BreadCrumb';
import RegisterBody from '../Components/RegisterBody';

function Register() {
  return (
    <>
      <Header />
      <MegaMenu />
      <BreadCrumb prevPage="Home" currentPage="Register Page" />
      <RegisterBody />
      <Footer />
    </>
  );
}

export default Register;
