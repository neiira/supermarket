import { HOME_PAGE_REQUEST, HOME_PAGE_SUCCESS, HOME_PAGE_FAIL } from '../constants/homeConstants';

export const homePageDataReducer = (state = { homeData: [], loading: true }, { type, payload }) => {
  switch (type) {
    case HOME_PAGE_REQUEST:
      return { loading: true, homeData: [] };
    case HOME_PAGE_SUCCESS:
      return {
        loading: false,
        products: payload
      };
    case HOME_PAGE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
