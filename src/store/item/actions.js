import axios from "axios";
import { apiUrl } from "../../config/constants";

export const ITEMS_FETCHED = "ITEMS_FETCHED";
export const PURCHASE_SUCCESS = "PURCHASE_SUCCESS";
export const FULFILLED_SUCCESS = "FULFILLED_SUCCESS";

const itemsFetched = (data) => {
  return {
    type: ITEMS_FETCHED,
    payload: data,
  };
};

const purchaseSuccess = (data) => {
  return {
    type: PURCHASE_SUCCESS,
    payload: data,
  };
};

const fulfilledSuccess = (data) => {
  return {
    type: FULFILLED_SUCCESS,
    payload: data,
  };
};

// Get all items
export const fetchAllItems = async (dispatch, getState) => {
  try {
    const res = await axios.get(`${apiUrl}/items`);
    console.log(res.data);
    dispatch(itemsFetched(res.data));
  } catch (e) {
    console.log(e.message);
  }
};

// update sender / gift message / mark purchased
export const markPurchased =
  (id, giftMessage, name) => async (dispatch, getState) => {
    try {
      console.log("id?", id);
      const res = await axios.post(`${apiUrl}/sender/${id}`, {
        giftMessage,
        name,
      });
      console.log("data?", res.data);
      dispatch(purchaseSuccess(res.data));
    } catch (e) {
      console.log(e.message);
    }
  };

// mark item fulfilled
export const markFulfilled = (id) => async (dispatch, getState) => {
  try {
    console.log("id?", id);
    const res = await axios.patch(`${apiUrl}/items/${id}`);
    console.log("data?", res.data);
    dispatch(fulfilledSuccess(res.data));
  } catch (e) {
    console.log(e.message);
  }
};
