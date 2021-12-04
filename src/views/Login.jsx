import React, { useEffect } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import LoginBody from '../Components/LoginBody';

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Login Page" />
      <LoginBody />
    </>
  );
}

export default Login;
