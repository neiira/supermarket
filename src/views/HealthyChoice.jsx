import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

const HealthyChoice = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector(state => state.listProduct);
  const { loading, products } = productList;
  console.log(productList);
  const healthyChoiceProducts = !loading && products.filter(product => product.categoryId === 7);
  console.log(healthyChoiceProducts, 'healthyChoiceProducts');

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Sandwich" />
      <GroceriesBody products={healthyChoiceProducts} />
    </>
  );
};

export default HealthyChoice;
