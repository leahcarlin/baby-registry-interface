import { ITEMS_FETCHED } from "./actions";

const initialState = {
  allItems: null,
  selectedId: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ITEMS_FETCHED:
      return {
        ...state,
        allItems: action.payload,
      };

    default: {
      return state;
    }
  }
}
