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
import axios from 'axios';

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product';
  const access_token = localStorage.getItem('accessToken');
  const bodyData = {
    productId: `${id}`,
    priceId: `${id}`,
    quantity: `${quantity}`
  };
  const response = await axios.post(url, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      'Warehouse-Id': '1',
      Authorization: `Bearer ${access_token} `,
      'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545'
    }
  });

  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: {
      cartId: response.data.data.id,
      totalPrice: response.data.data.price,
      quantity: response.data.data.quantity,
      unitPrice: response.data.data.selectedUnit.markedPrice,
      stock: response.data.data.selectedUnit.stock,
      productId: response.data.data.product.id,
      title: response.data.data.product.title,
      imageName: response.data.data.product.images[0].imageName
    }
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cartItem.cartItems));
};

export const removeItemFromCart = cartProductId => async (dispatch, getState) => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product';

  const access_token = localStorage.getItem('accessToken');

  const response = await axios.delete(`${url}/${cartProductId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Warehouse-Id': '1',
      Authorization: `Bearer ${access_token} `,
      'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545'
    }
  });

  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: {
      deletedProductId: cartProductId,
      code: response.data
    }
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cartItem.cartItems));
};

export const updateCartItem = (cartProductId, updatedQuantity) => async (dispatch, getState) => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product';

  const access_token = localStorage.getItem('accessToken');
  const bodyData = {
    quantity: `${updatedQuantity}`
  };
  const response = await axios.patch(`${url}/${cartProductId}`, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      'Warehouse-Id': '1',
      Authorization: `Bearer ${access_token} `,
      'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545'
    }
  });
  dispatch({
    type: UPDATE_CART_ITEM,
    payload: {
      cartId: response.data.data.id,
      totalPrice: response.data.data.price,
      quantity: response.data.data.quantity,
      unitPrice: response.data.data.selectedUnit.markedPrice,
      stock: response.data.data.selectedUnit.stock,
      productId: response.data.data.product.id,
      title: response.data.data.product.title,
      imageName: response.data.data.product.images[0].imageName
    }
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cartItem.cartItems));
};

export const AllCartItem = () => async dispatch => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/cart';

  const access_token = localStorage.getItem('accessToken');
  try {
    dispatch({ type: GET_ALL_CART_ITEM_REQUEST });
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Warehouse-Id': '1',
        'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
        Authorization: `Bearer ${access_token} `
      }
    });
    dispatch({
      type: GET_ALL_CART_ITEM_SUCCESS,
      payload: {
        checkOutId: response.data.data.id,
        cartNumber: response.data.data.cartNumber,
        orderAmout: response.data.data.orderAmount,
        discount: response.data.data.discount,
        subTotal: response.data.data.subTotal,
        deliveryCharge: response.data.data.deliveryCharge,
        pickupTotal: response.data.data.pickupTotal,
        total: response.data.data.total,
        cartItems: response.data.data.cartProducts
      }
    });
  } catch (error) {
    dispatch({ type: GET_ALL_CART_ITEM_FAIL, payload: error });
  }
};

export const checkOutCart = () => async dispatch => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/cart/checkout';
  const access_token = localStorage.getItem('accessToken');
  try {
    dispatch({ type: CHECK_OUT_REQUEST });
    const response = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
        DeliveryId: '75',
        PaymentMethodId: '1',
        Authorization: `Bearer ${access_token} `,
        'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545'
      }
    });
    dispatch({ type: CHECK_OUT_SUCCESS, payload: response.data.data });
    localStorage.removeItem('cartItems');
    document.location.href = '/';
  } catch (error) {
    dispatch({ type: CHECK_OUT_FAIL, payload: error.response && error.response.data.errors });
  }
};
