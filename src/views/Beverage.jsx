import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function Beverage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector(state => state.listProduct);
  const { loading, products } = productList;
  console.log(productList);
  const riceProducts = !loading && products.filter(product => product.categoryId === 8);
  console.log(riceProducts, 'riceproducts');
  // if (!loading) {
  //   console.log(products);
  //   const newProducts = products.filter(product => product.categoryId === 8);
  //   console.log(newProducts);
  // }
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Rice" />
      <GroceriesBody products={riceProducts} />
    </>
  );
}

export default Beverage;
