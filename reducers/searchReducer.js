import { GET_SEARCH_RESULTS, REMOVE_SEARCH_RESULTS, SEARCHING } from "../constants";

const initialState = {
  results: null,
  searching: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload
      };
    case REMOVE_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload
      };
    case SEARCHING:
      return {
        ...state,
        searching: action.payload
      };
    default:
      return state;
  }
}