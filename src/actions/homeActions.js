import axios from 'axios';
import { HOME_PAGE_REQUEST, HOME_PAGE_SUCCESS, HOME_PAGE_FAIL } from '../constants/homeConstants';

export const homePage = () => async dispatch => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/newhome';

  try {
    dispatch({ type: HOME_PAGE_REQUEST });

    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Warehouse-Id': '1',
        'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545'
      }
    });

    dispatch({
      type: HOME_PAGE_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    dispatch({
      type: HOME_PAGE_FAIL,
      payload: error
    });
  }
};
