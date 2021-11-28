import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants.js';

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
