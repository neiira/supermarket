import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_BY_CATEGORY_ID_REQUEST,
  PRODUCT_LIST_BY_CATEGORY_ID_SUCCESS,
  PRODUCT_LIST_BY_CATEGORY_ID_FAIL
} from '../constants/productConstants.js';

export const listProducts = () => async dispatch => {
  const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/product';

  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Warehouse-Id': '1',
        'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545'
      }
    });

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error
    });
  }
};

// export const listProductByCategoryId=(id)=>async dispatch=>{
//   const url = 'https://uat.ordering-boafresh.ekbana.net//api/v4/category';

//   try{
//     dispatch({type:PRODUCT_LIST_BY_CATEGORY_ID_REQUEST});
//     const response=await axios.get(`url/${id}`,{
//       headers: {
//         'Content-Type': 'application/json',
//         'Warehouse-Id': '1',
//         'perPage':'20',
//         'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545'
//       }})
//       dispatch({
//       type: PRODUCT_LIST_BY_CATEGORY_ID_SUCCESS,
//       payload: response.data.data
//     });
//   }
// }
