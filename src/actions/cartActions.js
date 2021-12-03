import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_CART_ITEM,
  GET_ALL_CART_ITEM_REQUEST,
  GET_ALL_CART_ITEM_SUCCESS,
  GET_ALL_CART_ITEM_FAIL
} from '../constants/cartConstants';
import axios from 'axios';

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product';
  const bodyData = {
    productId: `${id}`,
    priceId: `${id}`,
    quantity: `${quantity}`
  };
  const response = await axios.post(url, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      'Warehouse-Id': '1',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI5MTk5M2E3YWZlZDZmNjhhOTRkMTRhNWZlMTAwOGNmOWI1ZDMxNTM0MjcxZjk0ZjE3NDU2ZDVhMGRjNTM4ODZlMWIyNzEwZGE0YWViYjYwIn0.eyJhdWQiOiIyIiwianRpIjoiYjkxOTkzYTdhZmVkNmY2OGE5NGQxNGE1ZmUxMDA4Y2Y5YjVkMzE1MzQyNzFmOTRmMTc0NTZkNWEwZGM1Mzg4NmUxYjI3MTBkYTRhZWJiNjAiLCJpYXQiOjE2Mzg0MzA0MTQsIm5iZiI6MTYzODQzMDQxNCwiZXhwIjoxNjM5Mjk0NDE0LCJzdWIiOiIyMzMiLCJzY29wZXMiOltdfQ.cOMYtaN7tbUEGSoLHC2pHW0Q2Ph-GNF1ClJebDfuIY6viuVLNVe1ZGZKHQLIsxeLEdaB1ARQf9sM0q-X2wTs4pHMAVj8z39EBgZRrdYuHpFXhC1Gq8LrnviKFRVxgHVm05oXEG2fdEIuIJUuBYmJ1EtDLfNaWzBuBwdIaU4n4fqwedVt70namJyKhn2nTVplpvE-Qqefg4psYo32FgJQG-f-cIC7lkfxH-NFRZ58jT4Qr3azN5fPQM7OKjSZa4nXytoUr-mb_oy5lX7geh7wdr6oLDA2Wl4FK046gNZJKY9sTu2hY6-eOlbhazFXsieyQg_rU-OHRI7VtTULSfs7I2_7wwTrP-50O4y9J6giEXxAqZAqd8Y2kVJdjgPxLGz_YrSV8Css9l_VdH8f7-vbvYQZMMfHAceYC5YsuBc4SfS5X3ag4hAlLV_oItuYR-I5MDK_QqbE1N9fuimXqoJKJkWgcgKxg_CS-C5IS0DUgtM9zZHFsWOnuqjEySiIgV8oJ77wr686ApA5rlZh96iggT6PHAJGmUkBt4JWq2Iak-TNCAvSmz_ytAJmztuivBjjoRUdmENxSjQRDWDHgOkFfP4zSwCe7pI2zly0uRx2L5L2YrWnSKD5H8KR3qwevyvuDeq1rNjHbGxdVnCdOQPAGDGJrx7Gw-EXM59-66hroXc',
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

  const response = await axios.delete(`${url}/${cartProductId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Warehouse-Id': '1',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI5MTk5M2E3YWZlZDZmNjhhOTRkMTRhNWZlMTAwOGNmOWI1ZDMxNTM0MjcxZjk0ZjE3NDU2ZDVhMGRjNTM4ODZlMWIyNzEwZGE0YWViYjYwIn0.eyJhdWQiOiIyIiwianRpIjoiYjkxOTkzYTdhZmVkNmY2OGE5NGQxNGE1ZmUxMDA4Y2Y5YjVkMzE1MzQyNzFmOTRmMTc0NTZkNWEwZGM1Mzg4NmUxYjI3MTBkYTRhZWJiNjAiLCJpYXQiOjE2Mzg0MzA0MTQsIm5iZiI6MTYzODQzMDQxNCwiZXhwIjoxNjM5Mjk0NDE0LCJzdWIiOiIyMzMiLCJzY29wZXMiOltdfQ.cOMYtaN7tbUEGSoLHC2pHW0Q2Ph-GNF1ClJebDfuIY6viuVLNVe1ZGZKHQLIsxeLEdaB1ARQf9sM0q-X2wTs4pHMAVj8z39EBgZRrdYuHpFXhC1Gq8LrnviKFRVxgHVm05oXEG2fdEIuIJUuBYmJ1EtDLfNaWzBuBwdIaU4n4fqwedVt70namJyKhn2nTVplpvE-Qqefg4psYo32FgJQG-f-cIC7lkfxH-NFRZ58jT4Qr3azN5fPQM7OKjSZa4nXytoUr-mb_oy5lX7geh7wdr6oLDA2Wl4FK046gNZJKY9sTu2hY6-eOlbhazFXsieyQg_rU-OHRI7VtTULSfs7I2_7wwTrP-50O4y9J6giEXxAqZAqd8Y2kVJdjgPxLGz_YrSV8Css9l_VdH8f7-vbvYQZMMfHAceYC5YsuBc4SfS5X3ag4hAlLV_oItuYR-I5MDK_QqbE1N9fuimXqoJKJkWgcgKxg_CS-C5IS0DUgtM9zZHFsWOnuqjEySiIgV8oJ77wr686ApA5rlZh96iggT6PHAJGmUkBt4JWq2Iak-TNCAvSmz_ytAJmztuivBjjoRUdmENxSjQRDWDHgOkFfP4zSwCe7pI2zly0uRx2L5L2YrWnSKD5H8KR3qwevyvuDeq1rNjHbGxdVnCdOQPAGDGJrx7Gw-EXM59-66hroXc',
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
  const bodyData = {
    quantity: `${updatedQuantity}`
  };
  const response = await axios.patch(`${url}/${cartProductId}`, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      'Warehouse-Id': '1',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI5MTk5M2E3YWZlZDZmNjhhOTRkMTRhNWZlMTAwOGNmOWI1ZDMxNTM0MjcxZjk0ZjE3NDU2ZDVhMGRjNTM4ODZlMWIyNzEwZGE0YWViYjYwIn0.eyJhdWQiOiIyIiwianRpIjoiYjkxOTkzYTdhZmVkNmY2OGE5NGQxNGE1ZmUxMDA4Y2Y5YjVkMzE1MzQyNzFmOTRmMTc0NTZkNWEwZGM1Mzg4NmUxYjI3MTBkYTRhZWJiNjAiLCJpYXQiOjE2Mzg0MzA0MTQsIm5iZiI6MTYzODQzMDQxNCwiZXhwIjoxNjM5Mjk0NDE0LCJzdWIiOiIyMzMiLCJzY29wZXMiOltdfQ.cOMYtaN7tbUEGSoLHC2pHW0Q2Ph-GNF1ClJebDfuIY6viuVLNVe1ZGZKHQLIsxeLEdaB1ARQf9sM0q-X2wTs4pHMAVj8z39EBgZRrdYuHpFXhC1Gq8LrnviKFRVxgHVm05oXEG2fdEIuIJUuBYmJ1EtDLfNaWzBuBwdIaU4n4fqwedVt70namJyKhn2nTVplpvE-Qqefg4psYo32FgJQG-f-cIC7lkfxH-NFRZ58jT4Qr3azN5fPQM7OKjSZa4nXytoUr-mb_oy5lX7geh7wdr6oLDA2Wl4FK046gNZJKY9sTu2hY6-eOlbhazFXsieyQg_rU-OHRI7VtTULSfs7I2_7wwTrP-50O4y9J6giEXxAqZAqd8Y2kVJdjgPxLGz_YrSV8Css9l_VdH8f7-vbvYQZMMfHAceYC5YsuBc4SfS5X3ag4hAlLV_oItuYR-I5MDK_QqbE1N9fuimXqoJKJkWgcgKxg_CS-C5IS0DUgtM9zZHFsWOnuqjEySiIgV8oJ77wr686ApA5rlZh96iggT6PHAJGmUkBt4JWq2Iak-TNCAvSmz_ytAJmztuivBjjoRUdmENxSjQRDWDHgOkFfP4zSwCe7pI2zly0uRx2L5L2YrWnSKD5H8KR3qwevyvuDeq1rNjHbGxdVnCdOQPAGDGJrx7Gw-EXM59-66hroXc',
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
  try {
    dispatch({ type: GET_ALL_CART_ITEM_REQUEST });
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Warehouse-Id': '1',
        'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI5MTk5M2E3YWZlZDZmNjhhOTRkMTRhNWZlMTAwOGNmOWI1ZDMxNTM0MjcxZjk0ZjE3NDU2ZDVhMGRjNTM4ODZlMWIyNzEwZGE0YWViYjYwIn0.eyJhdWQiOiIyIiwianRpIjoiYjkxOTkzYTdhZmVkNmY2OGE5NGQxNGE1ZmUxMDA4Y2Y5YjVkMzE1MzQyNzFmOTRmMTc0NTZkNWEwZGM1Mzg4NmUxYjI3MTBkYTRhZWJiNjAiLCJpYXQiOjE2Mzg0MzA0MTQsIm5iZiI6MTYzODQzMDQxNCwiZXhwIjoxNjM5Mjk0NDE0LCJzdWIiOiIyMzMiLCJzY29wZXMiOltdfQ.cOMYtaN7tbUEGSoLHC2pHW0Q2Ph-GNF1ClJebDfuIY6viuVLNVe1ZGZKHQLIsxeLEdaB1ARQf9sM0q-X2wTs4pHMAVj8z39EBgZRrdYuHpFXhC1Gq8LrnviKFRVxgHVm05oXEG2fdEIuIJUuBYmJ1EtDLfNaWzBuBwdIaU4n4fqwedVt70namJyKhn2nTVplpvE-Qqefg4psYo32FgJQG-f-cIC7lkfxH-NFRZ58jT4Qr3azN5fPQM7OKjSZa4nXytoUr-mb_oy5lX7geh7wdr6oLDA2Wl4FK046gNZJKY9sTu2hY6-eOlbhazFXsieyQg_rU-OHRI7VtTULSfs7I2_7wwTrP-50O4y9J6giEXxAqZAqd8Y2kVJdjgPxLGz_YrSV8Css9l_VdH8f7-vbvYQZMMfHAceYC5YsuBc4SfS5X3ag4hAlLV_oItuYR-I5MDK_QqbE1N9fuimXqoJKJkWgcgKxg_CS-C5IS0DUgtM9zZHFsWOnuqjEySiIgV8oJ77wr686ApA5rlZh96iggT6PHAJGmUkBt4JWq2Iak-TNCAvSmz_ytAJmztuivBjjoRUdmENxSjQRDWDHgOkFfP4zSwCe7pI2zly0uRx2L5L2YrWnSKD5H8KR3qwevyvuDeq1rNjHbGxdVnCdOQPAGDGJrx7Gw-EXM59-66hroXc'
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
