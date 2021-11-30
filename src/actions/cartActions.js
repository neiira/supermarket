import { ADD_ITEM_TO_CART } from '../constants/cartConstants';
import axios from 'axios';

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/product';
  const response = await axios.get(`${url}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Warehouse-Id': '1',
      'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545'
    }
  });

  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: {
      id: response.data.data.id,
      title: response.data.data.title,
      imageName: response.data.data.images[0].imageName,
      price: response.data.data.unitPrice[0].markedPrice,
      stock: response.data.data.unitPrice[0].stock,
      quantity
    }
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cartItem.cartItems));
};
