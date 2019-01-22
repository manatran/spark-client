import { GET_SEARCH_RESULTS, REMOVE_SEARCH_RESULTS, SEARCHING, SEARCH_INPUT } from "../constants";

const initialState = {
  results: null,
  input: null,
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
    case SEARCH_INPUT:
      return {
        ...state,
        input: action.payload
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