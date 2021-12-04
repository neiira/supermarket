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

export const userRegisterReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
        success: false
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: payload
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        errors: payload
      };

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, success: false };
    case USER_LOGIN_SUCCESS:
      return { loading: false, success: true, accessToken: payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, details: payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
