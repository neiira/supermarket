import React, { useEffect } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import RegisterBody from '../Components/RegisterBody';

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Register Page" />
      <RegisterBody />
    </>
  );
}

export default Register;
