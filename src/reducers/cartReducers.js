import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_CART_ITEM,
  GET_ALL_CART_ITEM_REQUEST,
  GET_ALL_CART_ITEM_SUCCESS,
  GET_ALL_CART_ITEM_FAIL,
  CHECK_OUT_REQUEST,
  CHECK_OUT_SUCCESS,
  CHECK_OUT_FAIL
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART:
      const item = payload;

      const existItem = state.cartItems.find(x => x.productId === item.productId);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => (x.productId === existItem.productId ? item : x))
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        };
      }
    case REMOVE_ITEM_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter(x => x.cartId !== payload.deletedProductId) };

    case UPDATE_CART_ITEM:
      const cartItem = payload;

      const existCartItem = state.cartItems.find(x => x.cartId === cartItem.cartId);

      if (existCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => (x.cartId === existCartItem.cartId ? cartItem : x))
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, cartItem]
        };
      }

    default:
      return state;
  }
};

export const cartItemReducer = (state = { allCartItem: [], loading: true }, { type, payload }) => {
  switch (type) {
    case GET_ALL_CART_ITEM_REQUEST:
      return { allCartItem: [], loading: true };

    case GET_ALL_CART_ITEM_SUCCESS:
      return { allCartItem: payload, loading: false };
    case GET_ALL_CART_ITEM_FAIL:
      return { error: payload, loading: false };

    default:
      return state;
  }
};

export const checkOutReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CHECK_OUT_REQUEST:
      return { loading: true };

    case CHECK_OUT_SUCCESS:
      return { checkOutData: payload, loading: false };
    case CHECK_OUT_FAIL:
      return { error: payload, loading: false };

    default:
      return state;
  }
};
