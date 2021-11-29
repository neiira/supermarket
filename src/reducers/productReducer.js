import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_BY_ID_REQUEST,
  PRODUCT_BY_ID_SUCCESS,
  PRODUCT_BY_ID_FAIL
} from '../constants/productConstants.js';

export const productListReducer = (state = { products: [], loading: true }, { type, payload }) => {
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: payload
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const productByIdReducer = (state = { product: [], loading: true }, { type, payload }) => {
  switch (type) {
    case PRODUCT_BY_ID_REQUEST:
      return { loading: true, product: [] };

    case PRODUCT_BY_ID_SUCCESS:
      return { loading: false, product: payload };
    case PRODUCT_BY_ID_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
