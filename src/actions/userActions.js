import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL
} from '../constants/userConstants';
import axios from 'axios';

export const userRegister = (firstName, lastName, email, phoneNumber, password) => async dispatch => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/auth/signup';
  const bodyData = {
    first_name: `${firstName}`,
    last_name: `${lastName}`,
    email: `${email}`,
    mobile_number: `${phoneNumber}`,
    password: `${password}`
  };
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const response = await axios.post(url, bodyData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatch({ type: USER_REGISTER_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.errors
    });
  }
};

export const userLogin = (username, password) => async dispatch => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/auth/login';
  const data = {
    client_id: '2',
    client_secret: 'ZkPYPKRiUsEzVke7Q5sq21DrVvYmNK5w5bZKGzQo',
    grant_type: 'password',
    username: `${username}`,
    password: `${password}`
  };
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data.access_token });
    localStorage.setItem('accessToken', response.data.access_token);
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response && error.response.data.errors });
  }
};

export const userLogout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('cartItems');
  document.location.href = '/login';
};

export const userDetails = () => async dispatch => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/profile/show';
  const access_token = localStorage.getItem('accessToken');
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token} `,
        'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545'
      }
    });

    dispatch({ type: USER_DETAILS_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data });
  }
};
