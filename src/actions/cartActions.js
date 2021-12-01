import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, UPDATE_CART_ITEM } from '../constants/cartConstants';
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
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZhYWVjYWVmYzQxNTAxYTliZDk1NzYxYjgyNDJlMWYxNjQ5ZGFhZTkzOTMxODU2ZmRiNmNkNjdkNDg4ZjhjY2UwYjRiODMzNGVlNmYzZjQzIn0.eyJhdWQiOiIyIiwianRpIjoiZmFhZWNhZWZjNDE1MDFhOWJkOTU3NjFiODI0MmUxZjE2NDlkYWFlOTM5MzE4NTZmZGI2Y2Q2N2Q0ODhmOGNjZTBiNGI4MzM0ZWU2ZjNmNDMiLCJpYXQiOjE2Mzc1NTQ4NDcsIm5iZiI6MTYzNzU1NDg0NywiZXhwIjoxNjM4NDE4ODQ3LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.H4FjR5gd14DpDhcS6vkumuDMwjnW-nRsrMwDHaoar5BQpfpac0TmFp2hTsRfnpkFTm1w0EvBJIPrDBD14ZJdur5U7GMjIQvpbW3Q0pCP7dyECGxVYfbdlGEs_rZ6oim2bQwpxYf0UbcUaZa59xSeg0Q6X2p-Ngjnp-YGbV0L71oS7Fp-_moo_O9eWjWzLw0fJ8KYMc9DhQKNlnwuY0pdmF6HLZv2GKkVkl-Op711_Aj2LKVK_TCG0OUGYSl1BHHwzd3eu2QOWY1x2mNejq6UnIm54QZheBMZg4jhQjlbGP_2U0jTBQYTSQTSwoXXr0mZIARAE8us4uX-j0eKrHQQwJLVDnkfWI1Tj2WFekCVre2HjQNWanqCoamVzVUweh6rEb6RCZ9QpKGGZIUFCsED1_-c6tDGgdVozjoy6cu99vQv2zHP3uBPpZKFz0suy56LfzBlbfD347oCUHvf3sd4zFnDSoHLa2pkjHGkX1-jtaqYgdTCWAfG-DHakvbkRM_qGebDKMXQFNxjpF0pkDtm1Mzo5yEYPaiHVgDpil4GNTujYsJ6yqQL6RBKnp_Mqau0KO5baJkkXeINd2mkkKHlSCYFJ62gZcPCPhFWRbG8ImdoPyBS0fB_vZctGUF7sUW8hR7C9p-ACmZ99cTz5ALQkFB1xvHQNFnaYPngMLav0C4',
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
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZhYWVjYWVmYzQxNTAxYTliZDk1NzYxYjgyNDJlMWYxNjQ5ZGFhZTkzOTMxODU2ZmRiNmNkNjdkNDg4ZjhjY2UwYjRiODMzNGVlNmYzZjQzIn0.eyJhdWQiOiIyIiwianRpIjoiZmFhZWNhZWZjNDE1MDFhOWJkOTU3NjFiODI0MmUxZjE2NDlkYWFlOTM5MzE4NTZmZGI2Y2Q2N2Q0ODhmOGNjZTBiNGI4MzM0ZWU2ZjNmNDMiLCJpYXQiOjE2Mzc1NTQ4NDcsIm5iZiI6MTYzNzU1NDg0NywiZXhwIjoxNjM4NDE4ODQ3LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.H4FjR5gd14DpDhcS6vkumuDMwjnW-nRsrMwDHaoar5BQpfpac0TmFp2hTsRfnpkFTm1w0EvBJIPrDBD14ZJdur5U7GMjIQvpbW3Q0pCP7dyECGxVYfbdlGEs_rZ6oim2bQwpxYf0UbcUaZa59xSeg0Q6X2p-Ngjnp-YGbV0L71oS7Fp-_moo_O9eWjWzLw0fJ8KYMc9DhQKNlnwuY0pdmF6HLZv2GKkVkl-Op711_Aj2LKVK_TCG0OUGYSl1BHHwzd3eu2QOWY1x2mNejq6UnIm54QZheBMZg4jhQjlbGP_2U0jTBQYTSQTSwoXXr0mZIARAE8us4uX-j0eKrHQQwJLVDnkfWI1Tj2WFekCVre2HjQNWanqCoamVzVUweh6rEb6RCZ9QpKGGZIUFCsED1_-c6tDGgdVozjoy6cu99vQv2zHP3uBPpZKFz0suy56LfzBlbfD347oCUHvf3sd4zFnDSoHLa2pkjHGkX1-jtaqYgdTCWAfG-DHakvbkRM_qGebDKMXQFNxjpF0pkDtm1Mzo5yEYPaiHVgDpil4GNTujYsJ6yqQL6RBKnp_Mqau0KO5baJkkXeINd2mkkKHlSCYFJ62gZcPCPhFWRbG8ImdoPyBS0fB_vZctGUF7sUW8hR7C9p-ACmZ99cTz5ALQkFB1xvHQNFnaYPngMLav0C4',
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
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZhYWVjYWVmYzQxNTAxYTliZDk1NzYxYjgyNDJlMWYxNjQ5ZGFhZTkzOTMxODU2ZmRiNmNkNjdkNDg4ZjhjY2UwYjRiODMzNGVlNmYzZjQzIn0.eyJhdWQiOiIyIiwianRpIjoiZmFhZWNhZWZjNDE1MDFhOWJkOTU3NjFiODI0MmUxZjE2NDlkYWFlOTM5MzE4NTZmZGI2Y2Q2N2Q0ODhmOGNjZTBiNGI4MzM0ZWU2ZjNmNDMiLCJpYXQiOjE2Mzc1NTQ4NDcsIm5iZiI6MTYzNzU1NDg0NywiZXhwIjoxNjM4NDE4ODQ3LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.H4FjR5gd14DpDhcS6vkumuDMwjnW-nRsrMwDHaoar5BQpfpac0TmFp2hTsRfnpkFTm1w0EvBJIPrDBD14ZJdur5U7GMjIQvpbW3Q0pCP7dyECGxVYfbdlGEs_rZ6oim2bQwpxYf0UbcUaZa59xSeg0Q6X2p-Ngjnp-YGbV0L71oS7Fp-_moo_O9eWjWzLw0fJ8KYMc9DhQKNlnwuY0pdmF6HLZv2GKkVkl-Op711_Aj2LKVK_TCG0OUGYSl1BHHwzd3eu2QOWY1x2mNejq6UnIm54QZheBMZg4jhQjlbGP_2U0jTBQYTSQTSwoXXr0mZIARAE8us4uX-j0eKrHQQwJLVDnkfWI1Tj2WFekCVre2HjQNWanqCoamVzVUweh6rEb6RCZ9QpKGGZIUFCsED1_-c6tDGgdVozjoy6cu99vQv2zHP3uBPpZKFz0suy56LfzBlbfD347oCUHvf3sd4zFnDSoHLa2pkjHGkX1-jtaqYgdTCWAfG-DHakvbkRM_qGebDKMXQFNxjpF0pkDtm1Mzo5yEYPaiHVgDpil4GNTujYsJ6yqQL6RBKnp_Mqau0KO5baJkkXeINd2mkkKHlSCYFJ62gZcPCPhFWRbG8ImdoPyBS0fB_vZctGUF7sUW8hR7C9p-ACmZ99cTz5ALQkFB1xvHQNFnaYPngMLav0C4',
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
