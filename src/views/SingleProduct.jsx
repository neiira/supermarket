import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Product from '../Components/Product';
import { productById } from '../actions/productActions';

function SingleProduct() {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productById(id));
  }, [dispatch, id]);

  const productDetails = useSelector(state => state.product);
  console.log(productDetails);
  const { loading, product } = productDetails;
  !loading && console.log(product);

  return <>{!loading && <Product product={product} />}</>;
}

export default SingleProduct;
