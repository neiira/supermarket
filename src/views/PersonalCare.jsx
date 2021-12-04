import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function PersonalCare() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const productList = useSelector(state => state.listProduct);
  const { loading, products } = productList;
  console.log(productList);
  const noodlesProducts = !loading && products.filter(product => product.categoryId === 4);
  console.log(noodlesProducts, 'noodlesProducts');

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Noodles" />
      <GroceriesBody products={noodlesProducts} />
    </>
  );
}

export default PersonalCare;
