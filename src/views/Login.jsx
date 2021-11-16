import React from 'react';
import Header from '../Components/Header';
import MegaMenu from '../Components/MegaMenu';

import Footer from '../Components/Footer';
import BreadCrumb from '../Components/BreadCrumb';
import LoginBody from '../Components/LoginBody';

function Login() {
  return (
    <>
      <Header />
      <MegaMenu />
      <BreadCrumb prevPage="Home" currentPage="Login Page" />
      <LoginBody />
      <Footer />
    </>
  );
}

export default Login;
