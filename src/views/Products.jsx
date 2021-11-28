import React, { useEffect } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="All products" />
      <GroceriesBody />
    </>
  );
}

export default Products;
