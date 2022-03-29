import axios from "axios";
import { apiUrl } from "../../config/constants";

export const ITEMS_FETCHED = "ITEMS_FETCHED";

const itemsFetched = (data) => {
  return {
    type: ITEMS_FETCHED,
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
