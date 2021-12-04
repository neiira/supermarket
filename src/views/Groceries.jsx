import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function Groceries() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const productList = useSelector(state => state.listProduct);
  const { loading, products } = productList;
  console.log(productList);
  const pizzaProducts = !loading && products.filter(product => product.categoryId === 9);
  console.log(pizzaProducts, 'pizzaproducts');

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="pizza" />
      <GroceriesBody products={pizzaProducts} />
    </>
  );
}

export default Groceries;
