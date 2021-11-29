import React, { useEffect } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import GroceriesBody from '../Components/GroceriesBody';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector(state => state.listProduct);
  // console.log(productList);
  const { loading, products } = productList;
  // if (!loading) {
  //   console.log(products);
  // }
  // console.log(products);
  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="All products" />
      {!loading && <GroceriesBody products={products} />}
    </>
  );
}

export default Products;
