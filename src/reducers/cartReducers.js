import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../constants/cartConstants';

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
    default:
      return state;
  }
};
