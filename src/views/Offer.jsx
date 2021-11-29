import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { homePage } from '../actions/homeActions';
import Topbrands from '../Components/Topbrands';
import BreadCrumb from '../Components/BreadCrumb';
function Offer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homePage());
  }, [dispatch]);

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="offers" />
      <Topbrands />
    </>
  );
}

export default Offer;
