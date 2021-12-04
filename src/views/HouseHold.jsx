import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function HouseHold() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const productList = useSelector(state => state.listProduct);
  const { loading, products } = productList;
  console.log(productList);
  const momoProducts = !loading && products.filter(product => product.categoryId === 3);
  console.log(momoProducts, 'momoProducts');

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Momo" />

      <GroceriesBody products={momoProducts} />
    </>
  );
}

export default HouseHold;
