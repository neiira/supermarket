import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { homePageDataReducer } from './reducers/homeReducers';
import { productListReducer } from './reducers/productReducer';
import { productByIdReducer } from './reducers/productReducer';
const reducers = combineReducers({
  homePage: homePageDataReducer,
  listProduct: productListReducer,
  product: productByIdReducer
});

const middleware = [thunk];

const initialState = {};

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
