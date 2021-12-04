import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { homePageDataReducer } from './reducers/homeReducers';
import { productListReducer } from './reducers/productReducer';
import { productByIdReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducers';
import { cartItemReducer } from './reducers/cartReducers';
import { userRegisterReducer } from './reducers/userReducers';
import { userLoginReducer } from './reducers/userReducers';
import { userDetailsReducer } from './reducers/userReducers';

import { checkOutReducer } from './reducers/cartReducers';
const reducers = combineReducers({
  homePage: homePageDataReducer,
  listProduct: productListReducer,
  product: productByIdReducer,
  cartItem: cartReducer,
  AllCartItem: cartItemReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  checkOut: checkOutReducer
});

const middleware = [thunk];
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromStorage = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : '';

const initialState = {
  cartItem: {
    cartItems: cartItemsFromStorage
  },
  userLogin: { accessToken: userInfoFromStorage }
};

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
