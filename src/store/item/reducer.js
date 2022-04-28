import {
  ITEMS_FETCHED,
  NEEDED_ITEMS_FETCHED,
  FULFILLED_ITEMS_FETCHED,
  FULFILLED_SUCCESS,
  NEW_ITEM_SUCCESS,
  ITEM_DELETE_SUCCESS,
} from "./actions";

const initialState = {
  allItems: null,
  needed: null,
  fulfilled: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ITEMS_FETCHED:
      return {
        ...state,
        allItems: action.payload,
      };
    case NEEDED_ITEMS_FETCHED:
      return {
        ...state,
        needed: action.payload,
      };
    case FULFILLED_ITEMS_FETCHED:
      return {
        ...state,
        fulfilled: action.payload,
      };
    case FULFILLED_SUCCESS:
      return {
        ...state,
        fulfilled: [...state.fulfilled, action.payload],
      };
    case NEW_ITEM_SUCCESS:
      return {
        ...state,
        allItems: [...state.allItems, action.payload],
        needed: [...state.needed, action.payload],
      };
    case ITEM_DELETE_SUCCESS:
      return {
        ...state,
        allItems: state.allItems.filter((item) => item.id !== action.payload),
      };

    default: {
      return state;
    }
  }
}
