import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { homePageDataReducer } from './reducers/homeReducers';
import { productListReducer } from './reducers/productReducer';
import { productByIdReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducers';
import { cartItemReducer } from './reducers/cartReducers';
const reducers = combineReducers({
  homePage: homePageDataReducer,
  listProduct: productListReducer,
  product: productByIdReducer,
  cartItem: cartReducer,
  AllCartItem: cartItemReducer
});

const middleware = [thunk];
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
  cartItem: {
    cartItems: cartItemsFromStorage
  }
};

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
