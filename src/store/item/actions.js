import axios from "axios";
import { apiUrl } from "../../config/constants";

export const ITEMS_FETCHED = "ITEMS_FETCHED";
export const NEEDED_ITEMS_FETCHED = "NEEDED_ITEMS_FETCHED";
export const FULFILLED_ITEMS_FETCHED = "FULFILLED_ITEMS_FETCHED";
export const PURCHASE_SUCCESS = "PURCHASE_SUCCESS";
export const FULFILLED_SUCCESS = "FULFILLED_SUCCESS";
export const NEW_ITEM_SUCCESS = "NEW_ITEM_SUCCESS";
export const ITEM_DELETE_SUCCESS = "ITEM_DELETE_SUCCESS";

const itemsFetched = (data) => {
  return {
    type: ITEMS_FETCHED,
    payload: data,
  };
};

const neededItemsFetched = (data) => {
  return {
    type: NEEDED_ITEMS_FETCHED,
    payload: data,
  };
};

const fulfilledItemsFetched = (data) => {
  return {
    type: FULFILLED_ITEMS_FETCHED,
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

const newItemSuccess = (data) => {
  return {
    type: NEW_ITEM_SUCCESS,
    payload: data,
  };
};

const itemDeleteSuccess = (id) => {
  return {
    type: ITEM_DELETE_SUCCESS,
    payload: id,
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

// Get all needed items
export const fetchNeededItems = async (dispatch, getState) => {
  try {
    const res = await axios.get(`${apiUrl}/items/needed`);
    console.log(res.data);
    dispatch(neededItemsFetched(res.data));
  } catch (e) {
    console.log(e.message);
  }
};

// Get all fulfilled items
export const fetchFulfilledItems = async (dispatch, getState) => {
  try {
    const res = await axios.get(`${apiUrl}/items/fulfilled`);
    console.log(res.data);
    dispatch(fulfilledItemsFetched(res.data));
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
    console.log("fulfilled?", res.data);
    dispatch(fulfilledSuccess(res.data));
  } catch (e) {
    console.log(e.message);
  }
};

// add new item
export const addNewItem =
  (title, imgUrl, price, itemUrl, shortUrl, details) =>
  async (dispatch, getState) => {
    try {
      const res = await axios.post(`${apiUrl}/items`, {
        title,
        imgUrl,
        price,
        itemUrl,
        shortUrl,
        details,
      });
      console.log("new item", res.data);
      dispatch(newItemSuccess(res.data));
    } catch (e) {
      console.log(e.message);
    }
  };

// delete item
export const deleteItem = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.delete(`${apiUrl}/items/${id}/remove`);
    console.log("res", res.data);
    dispatch(itemDeleteSuccess(id));
  } catch (e) {
    console.log(e.message);
  }
};
