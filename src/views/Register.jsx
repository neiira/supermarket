import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import RegisterBody from '../Components/RegisterBody';

function Register() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Register Page" />
      <RegisterBody />
    </>
  );
}

export default Register;
