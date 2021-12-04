import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function PackagedFood() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const productList = useSelector(state => state.listProduct);
  const { loading, products } = productList;
  console.log(productList);
  const chilliProducts = !loading && products.filter(product => product.categoryId === 5);
  console.log(chilliProducts, 'chilliProducts');

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Chilli" />
      <GroceriesBody products={chilliProducts} />
    </>
  );
}

export default PackagedFood;
