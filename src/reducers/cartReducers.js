import { ADD_ITEM_TO_CART } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART:
      const item = payload;

      const existItem = state.cartItems.find(x => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => (x.id === existItem.id ? item : x))
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        };
      }

    default:
      return state;
  }
};
