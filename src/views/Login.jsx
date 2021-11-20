import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import LoginBody from '../Components/LoginBody';

function Login() {
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Login Page" />
      <LoginBody />
    </>
  );
}

export default Login;
