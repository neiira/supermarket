import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';

function Gourment() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const productList = useSelector(state => state.listProduct);
  const { loading, products } = productList;
  console.log(productList);
  const sandwichProducts = !loading && products.filter(product => product.categoryId === 6);
  console.log(sandwichProducts, 'sandwichProducts');

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Sandwich" />
      <GroceriesBody products={sandwichProducts} />
    </>
  );
}

export default Gourment;
