import React, { useEffect } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../Components/Loader';
function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const productList = useSelector(state => state.listProduct);

  const { loading, products } = productList;

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="All products" />
      {loading ? <Loader /> : <GroceriesBody products={products} />}
    </>
  );
}

export default Products;
